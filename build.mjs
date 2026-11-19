// Static site generation for hotelradiantvista.com
//
//   npm run build            build dist/ and run the SSR-vs-hydration parity check
//   npm run build -- --no-check   build only
//
// Every route's <head> comes from src/routes.js (via src/seo/head.js) and every body from
// renderToString of the same React components the browser hydrates. Output is plain static
// files in dist/, which .cpanel.yml copies to public_html.
import fs from "node:fs";
import path from "node:path";
import crypto from "node:crypto";
import { execSync } from "node:child_process";
import { pathToFileURL } from "node:url";
import * as esbuild from "esbuild";

process.env.NODE_ENV = "production";

const ROOT = process.cwd();
const DIST = path.join(ROOT, "dist");
const TMP = path.join(ROOT, ".ssg");
const PUBLIC = path.join(ROOT, "public");
const args = new Set(process.argv.slice(2));

const now = new Date();
const BUILD_DATE = now.toISOString().slice(0, 10);
const define = {
  "process.env.NODE_ENV": '"production"',
  __BUILD_YEAR__: JSON.stringify(String(now.getFullYear())),
  __BUILD_DATE__: JSON.stringify(BUILD_DATE),
};
const hash = (s) => crypto.createHash("sha256").update(s).digest("hex").slice(0, 8);
const log = (...m) => console.log("[build]", ...m);

// Empty dist/ (not the folder itself, which may be open in a shell or editor on Windows).
fs.mkdirSync(DIST, { recursive: true });
for (const entry of fs.readdirSync(DIST)) fs.rmSync(path.join(DIST, entry), { recursive: true, force: true });
fs.mkdirSync(path.join(DIST, "assets"), { recursive: true });
fs.mkdirSync(TMP, { recursive: true });

const common = {
  bundle: true,
  jsx: "automatic",
  target: "es2020",
  legalComments: "none",
  logLevel: "warning",
  loader: { ".js": "jsx" },
};

// 1) Client bundle (hydrateRoot)
const client = await esbuild.build({
  ...common,
  entryPoints: ["src/entry-client.jsx"],
  format: "esm",
  minify: true,
  write: false,
  define,
});
const js = client.outputFiles[0].text;
const jsName = `app-${hash(js)}.js`;
fs.writeFileSync(path.join(DIST, "assets", jsName), js);
log(`assets/${jsName} (${(js.length / 1024).toFixed(0)} KB)`);

// Development client bundle, used only by the parity check: React's dev build reports
// every text and attribute hydration mismatch.
await esbuild.build({
  ...common,
  entryPoints: ["src/entry-client.jsx"],
  format: "esm",
  outfile: path.join(TMP, "app-dev.js"),
  define: { ...define, "process.env.NODE_ENV": '"development"' },
});

// 2) CSS (Tailwind scans src/ only)
const tmpCss = path.join(TMP, "styles.css");
execSync(`npx tailwindcss -i src/styles.css -o "${tmpCss}" --minify`, { cwd: ROOT, stdio: "pipe" });
const css = fs.readFileSync(tmpCss, "utf8");
const cssName = `styles-${hash(css)}.css`;
fs.writeFileSync(path.join(DIST, "assets", cssName), css);
log(`assets/${cssName} (${(css.length / 1024).toFixed(0)} KB)`);

// 3) Server bundle (renderToString), same source and same build-time defines
const serverFile = path.join(TMP, "entry-server.mjs");
await esbuild.build({
  ...common,
  entryPoints: ["src/entry-server.jsx"],
  platform: "node",
  format: "esm",
  packages: "external",
  outfile: serverFile,
  define,
});
const { ROUTES, renderHead, renderBody, cspHeaderValue, SITE_URL } = await import(
  `${pathToFileURL(serverFile).href}?t=${Date.now()}`
);

// 4) Write one static HTML file per route.
//    lastmod = the last build date on which the page's rendered content actually changed
//    (content hash kept in src/seo/lastmod.json, which is committed).
const LASTMOD_FILE = path.join(ROOT, "src/seo/lastmod.json");
const lastmods = fs.existsSync(LASTMOD_FILE) ? JSON.parse(fs.readFileSync(LASTMOD_FILE, "utf8")) : {};
const contentHash = (s) =>
  hash(s.replace(/\/assets\/[a-z]+-[0-9a-f]{8}\.(js|css|woff2)/g, "").replace(/<time data-lastmod[^>]*>[\s\S]*?<\/time>/g, ""));
const assets = { css: `/assets/${cssName}`, js: `/assets/${jsName}` };
const pageHtml = (route) => `<!DOCTYPE html>
<html lang="en-IN">
  <head>
    ${renderHead(route, assets)}
  </head>
  <body class="bg-hubli-light text-hubli-dark antialiased">
    <div id="root" data-route="${route.path}" data-lastmod="${route.lastmod || ""}">${renderBody(route)}</div>
  </body>
</html>
`;
const rendered = [];
for (const baseRoute of ROUTES) {
  const prev = lastmods[baseRoute.path];
  let route = { ...baseRoute, lastmod: prev ? prev.date : BUILD_DATE };
  const h = contentHash(pageHtml(route));
  if (!prev || prev.hash !== h) {
    lastmods[baseRoute.path] = { hash: h, date: BUILD_DATE };
    route = { ...baseRoute, lastmod: BUILD_DATE };
  }
  const html = pageHtml(route);
  const out = path.join(DIST, route.outFile);
  fs.mkdirSync(path.dirname(out), { recursive: true });
  fs.writeFileSync(out, html);
  rendered.push({ route, html });
  log(`${route.outFile} (${(html.length / 1024).toFixed(0)} KB, lastmod ${route.lastmod})`);
}
fs.writeFileSync(LASTMOD_FILE, JSON.stringify(lastmods, null, 2) + "\n");

// 5) Static files copied verbatim (robots.txt, llms.txt, .htaccess, verification files...)
fs.cpSync(PUBLIC, DIST, { recursive: true });

// 5b) sitemap.xml: every indexable route, real lastmod, and its key photos
const xmlEsc = (s) => s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
const imageLoc = (src) => (src.startsWith("http") ? src : SITE_URL + encodeURI(src));
const sitemapEntries = rendered
  .filter(({ route }) => !route.noindex)
  .map(({ route, html }) => {
    const body = html.split("<body")[1] || "";
    const srcs = [route.og.image, ...[...body.matchAll(/<img[^>]+src="([^"]+)"/g)].map((m) => m[1].replace(/&amp;/g, "&"))];
    const images = [...new Set(srcs)].filter((s) => /\.(webp|avif|jpe?g|png)$/i.test(s) && !/logo|brick\.png/i.test(s)).slice(0, 10);
    const sm = route.sitemap || { changefreq: "monthly", priority: "0.5" };
    return `  <url>
    <loc>${xmlEsc(SITE_URL + route.path)}</loc>
    <lastmod>${route.lastmod}</lastmod>
    <changefreq>${sm.changefreq}</changefreq>
    <priority>${sm.priority}</priority>
${images.map((src) => `    <image:image><image:loc>${xmlEsc(imageLoc(src))}</image:loc></image:image>`).join("\n")}
  </url>`;
  });
fs.writeFileSync(
  path.join(DIST, "sitemap.xml"),
  `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
${sitemapEntries.join("\n")}
</urlset>
`
);
log(`sitemap.xml (${sitemapEntries.length} URLs)`);

// 5c) .htaccess: fill in the CSP and the redirects for renamed images
let htaccess = fs.readFileSync(path.join(DIST, ".htaccess"), "utf8");
htaccess = htaccess.replace("# @@CSP@@", `Header always set Content-Security-Policy "${cspHeaderValue()}"`);
const renamesFile = path.join(ROOT, "src/data/image-renames.json");
const renames = fs.existsSync(renamesFile) ? JSON.parse(fs.readFileSync(renamesFile, "utf8")) : {};
const redirectLines = Object.entries(renames).map(([from, to]) => `Redirect 301 "${from}" "${SITE_URL}${to}"`);
htaccess = htaccess.replace("# @@IMAGE_REDIRECTS@@", redirectLines.length ? redirectLines.join("\n") : "# (none)");
fs.writeFileSync(path.join(DIST, ".htaccess"), htaccess);

// 6) Copy only the images that the output actually references, and fail on missing ones.
const scanFiles = [];
const walk = (dir) => {
  for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, e.name);
    if (e.isDirectory()) walk(p);
    else if (/\.(html|js|css|txt|xml)$/.test(e.name)) scanFiles.push(p);
  }
};
walk(DIST);
const referenced = new Set();
const IMG_RE = /\/images\/[^"'`<>()\n\\]+?\.(?:webp|avif|png|jpe?g|svg|gif|ico)/gi;
for (const f of scanFiles) {
  const text = fs.readFileSync(f, "utf8").replace(/&amp;/g, "&");
  for (const m of text.matchAll(IMG_RE)) referenced.add(decodeURIComponent(m[0]));
}
const missing = [];
for (const rel of referenced) {
  const src = path.join(ROOT, rel);
  if (!fs.existsSync(src)) {
    missing.push(rel);
    continue;
  }
  const dest = path.join(DIST, rel);
  fs.mkdirSync(path.dirname(dest), { recursive: true });
  fs.copyFileSync(src, dest);
}
log(`copied ${referenced.size - missing.length} referenced images`);
if (missing.length) {
  console.error("[build] referenced images that do not exist:\n  " + missing.join("\n  "));
  process.exit(1);
}

// 7) Parity check: server HTML vs hydrated DOM for every route
if (!args.has("--no-check")) {
  const { runParityCheck } = await import("./scripts/check-parity.mjs");
  const ok = await runParityCheck({
    distDir: DIST,
    devBundle: fs.readFileSync(path.join(TMP, "app-dev.js"), "utf8"),
    routes: ROUTES.map((r) => ({ path: r.path, urlPath: r.path === "/404/" ? "/this-page-does-not-exist-xyz/" : r.path })),
  });
  if (!ok) {
    console.error("[build] parity check failed");
    process.exit(1);
  }
}
log("done");
