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
import { processImages, writeOgImages } from "./scripts/images.mjs";
import { htmlToMarkdown } from "./scripts/html-to-md.mjs";

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

// 0) Responsive images + manifest (must exist before bundling: components read it)
const IMG_CACHE = path.join(TMP, "img-cache");
const imageManifest = await processImages({
  srcDir: path.join(ROOT, "images"),
  distDir: DIST,
  cacheDir: IMG_CACHE,
  manifestFile: path.join(ROOT, "src/generated/image-manifest.json"),
});
log(`images: ${Object.keys(imageManifest).length} masters -> dist/images`);

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
// Self-hosted fonts (only the weights the design uses), content-hashed for immutable caching.
const FONTS = [
  ["Lato", "normal", 300, "@fontsource/lato/files/lato-latin-300-normal.woff2"],
  ["Lato", "normal", 400, "@fontsource/lato/files/lato-latin-400-normal.woff2"],
  ["Lato", "normal", 700, "@fontsource/lato/files/lato-latin-700-normal.woff2"],
  ["Playfair Display", "normal", 400, "@fontsource/playfair-display/files/playfair-display-latin-400-normal.woff2"],
  ["Playfair Display", "normal", 600, "@fontsource/playfair-display/files/playfair-display-latin-600-normal.woff2"],
  ["Playfair Display", "normal", 700, "@fontsource/playfair-display/files/playfair-display-latin-700-normal.woff2"],
  ["Playfair Display", "italic", 400, "@fontsource/playfair-display/files/playfair-display-latin-400-italic.woff2"],
];
fs.mkdirSync(path.join(DIST, "assets", "fonts"), { recursive: true });
const fontFaces = FONTS.map(([family, style, weight, file]) => {
  const data = fs.readFileSync(path.join(ROOT, "node_modules", file));
  const name = `${path.basename(file, ".woff2")}-${hash(data)}.woff2`;
  fs.writeFileSync(path.join(DIST, "assets", "fonts", name), data);
  return `@font-face{font-family:"${family}";font-style:${style};font-weight:${weight};font-display:swap;src:url(/assets/fonts/${name}) format("woff2")}`;
}).join("");
// The whole stylesheet is small, so it is inlined in every page: no render-blocking CSS request.
const css = fontFaces + fs.readFileSync(tmpCss, "utf8");
log(`css inlined (${(css.length / 1024).toFixed(0)} KB) + ${FONTS.length} self-hosted fonts`);

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
const { ROUTES, renderHead, renderBody, cspHeaderValue, SITE_URL, collectTodos, buildLlmsTxt } = await import(
  `${pathToFileURL(serverFile).href}?t=${Date.now()}`
);

// 4) Write one static HTML file per route.
//    lastmod = the last build date on which the page's rendered content actually changed
//    (content hash kept in src/seo/lastmod.json, which is committed).
const LASTMOD_FILE = path.join(ROOT, "src/seo/lastmod.json");
const lastmods = fs.existsSync(LASTMOD_FILE) ? JSON.parse(fs.readFileSync(LASTMOD_FILE, "utf8")) : {};
const contentHash = (s) =>
  hash(
    s
      .replace(/\/assets\/[a-z]+-[0-9a-f]{8}\.(js|css|woff2)/g, "")
      .replace(/<time data-lastmod[^>]*>[\s\S]*?<\/time>/g, "")
      .replace(/data-lastmod="[^"]*"/g, "")
      .replace(/"dateModified": "[^"]*"/g, "")
  );
const assets = { cssInline: css, js: `/assets/${jsName}` };
// React 19 emits its own <link rel="preload" as="image"> for <img fetchPriority="high"> inside the body.
// The head already has the single hero preload (with srcset), so drop the duplicate.
const stripReactPreloads = (html) => html.replace(/<link rel="preload" as="image"[^>]*\/>/g, "");
const pageHtml = (route) => `<!DOCTYPE html>
<html lang="en-IN">
  <head>
    ${renderHead(route, assets)}
  </head>
  <body class="bg-hubli-light text-hubli-dark antialiased">
    <div id="root" data-route="${route.path}" data-lastmod="${route.lastmod || ""}">${stripReactPreloads(renderBody(route))}</div>
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
    // Variant URLs (/images/x-960.webp) are listed by their stable URL (/images/x.webp or .jpg).
    const toStable = (src) => {
      const m = src.match(/^(\/images\/[a-z0-9-]+)-\d+\.webp$/);
      if (!m) return src;
      return [".webp", ".jpg"].map((e) => m[1] + e).find((u) => fs.existsSync(path.join(DIST, u))) || src;
    };
    const srcs = [route.og.image, ...[...body.matchAll(/<img[^>]+src="([^"]+)"/g)].map((m) => m[1].replace(/&amp;/g, "&"))];
    const images = [...new Set(srcs.map(toStable))].filter((s) => /\.(webp|avif|jpe?g|png)$/i.test(s) && !/logo/i.test(s)).slice(0, 10);
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

// 5b2) llms.txt (fact sheet from the data modules) and llms-full.txt (every indexable page as Markdown)
fs.writeFileSync(path.join(DIST, "llms.txt"), buildLlmsTxt(ROUTES));
const fullText = rendered
  .filter(({ route }) => !route.noindex)
  .map(({ route, html }) => {
    const main = (html.match(/<main\b[\s\S]*<\/main>/) || [""])[0];
    return `# ${route.title}

URL: ${SITE_URL}${route.path}
Last updated: ${route.lastmod}

${htmlToMarkdown(main, SITE_URL)}`;
  });
fs.writeFileSync(
  path.join(DIST, "llms-full.txt"),
  `# Radiant Vista: full text of hotelradiantvista.com

Generated ${BUILD_DATE}. Fact sheet: ${SITE_URL}/llms.txt

---

${fullText.join("\n\n---\n\n")}
`
);
log(`llms.txt + llms-full.txt (${(fs.statSync(path.join(DIST, "llms-full.txt")).size / 1024).toFixed(0)} KB)`);

// 5c) .htaccess: fill in the CSP and the redirects for renamed images
let htaccess = fs.readFileSync(path.join(DIST, ".htaccess"), "utf8");
htaccess = htaccess.replace("# @@CSP@@", `Header always set Content-Security-Policy "${cspHeaderValue()}"`);
const renamesFile = path.join(ROOT, "src/data/image-renames.json");
const renames = fs.existsSync(renamesFile) ? JSON.parse(fs.readFileSync(renamesFile, "utf8")) : {};
// mod_rewrite (not mod_alias) so they run before the canonical-host rule: one hop from http/www too.
// The per-directory pattern is the %-decoded path without the leading slash; spaces are escaped.
const rewritePattern = (from) => "^" + from.replace(/^\//, "").replace(/[.^$*+?()[\]{}|\\]/g, "\\$&").replace(/ /g, "\\ ") + "$";
const redirectLines = Object.entries(renames).map(([from, to]) => `  RewriteRule ${rewritePattern(from)} ${SITE_URL}${to} [R=301,L]`);
htaccess = htaccess.replace("  # @@IMAGE_REDIRECTS@@", redirectLines.length ? redirectLines.join("\n") : "  # (none)");
if (htaccess.includes("@@")) throw new Error(".htaccess still contains an unfilled @@ marker");
const deadTargets = Object.values(renames).filter((to) => !fs.existsSync(path.join(DIST, to)));
if (deadTargets.length) throw new Error(`image redirect targets missing from dist/: ${deadTargets.join(", ")}`);
fs.writeFileSync(path.join(DIST, ".htaccess"), htaccess);

// 6) Open Graph crops for the og images the pages use, then verify every referenced image exists.
const scanFiles = [];
const walk = (dir) => {
  for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, e.name);
    if (e.isDirectory()) walk(p);
    else if (/\.(html|js|css|txt|xml)$/.test(e.name)) scanFiles.push(p);
  }
};
walk(DIST);
const scanned = scanFiles.map((f) => fs.readFileSync(f, "utf8").replace(/&amp;/g, "&")).join("\n");
const ogNames = new Set([...scanned.matchAll(/\/images\/og\/([a-z0-9-]+)\.jpg/g)].map((m) => m[1]));
await writeOgImages({ srcDir: path.join(ROOT, "images"), distDir: DIST, cacheDir: IMG_CACHE, names: ogNames });
const referenced = new Set(
  [...scanned.matchAll(/\/images\/[^"'`<>()\s,\\]+?\.(?:webp|avif|png|jpe?g|svg|gif|ico)/gi)].map((m) => decodeURIComponent(m[0]))
);
const missing = [...referenced].filter((rel) => !fs.existsSync(path.join(DIST, rel)));
log(`${referenced.size} image URLs referenced, ${ogNames.size} OG crops`);
if (missing.length) {
  console.error("[build] referenced images missing from dist/:\n  " + missing.join("\n  "));
  process.exit(1);
}

// 6b) JSON-LD validation (fails the build on errors)
{
  const { validateJsonLd } = await import("./scripts/validate-jsonld.mjs");
  const { ok, errors } = await validateJsonLd(DIST);
  if (!ok) {
    console.error("[build] JSON-LD errors:\n" + errors.map((e) => "  - " + e).join("\n"));
    process.exit(1);
  }
  log("JSON-LD valid on every page");
}

// 6c) SEO-TODO.md: facts still marked TODO in src/data/facts.js + the manual task list
{
  const USED_IN = {
    HOTEL_FACTS: "Hotel JSON-LD, FAQs, contact/map, analytics",
    DISTANCES: "How-to-reach lists, Hubballi guide, airport page, FAQs",
    ROOM_FACTS: "Rooms comparison table, HotelRoom JSON-LD",
    HALL_FACTS: "Hall capacity tables, EventVenue JSON-LD, banquet FAQs",
    DINING_FACTS: "Restaurant JSON-LD, dining FAQ",
    BAR_FACTS: "BarOrPub JSON-LD, bar FAQ",
    LEGAL_FACTS: "Legal pages (drafts are noindex until approved)",
  };
  const todos = collectTodos();
  const rows = todos.map((t) => `| \`${t.key}\` | ${t.label.replace(/\|/g, "/")} | ${USED_IN[t.key.split(".")[0]] || ""} |`);
  const manual = fs.readFileSync(path.join(ROOT, "docs/seo-todo-manual.md"), "utf8");
  fs.writeFileSync(
    path.join(ROOT, "SEO-TODO.md"),
    `# SEO-TODO: what Radiant Vista still needs to supply

Generated by \`npm run build\` on ${BUILD_DATE}. Section 1 is built from \`src/data/facts.js\`: replace a
\`TODO("...")\` there with the real value and rebuild, and it appears on the site and in the JSON-LD and drops off this list.
Nothing marked TODO is ever shown to visitors or written into structured data.

## 1. Facts to confirm (${todos.length} open)

| Key | What we need | Where it is used |
|---|---|---|
${rows.join("\n")}

${manual}`
  );
  log(`SEO-TODO.md (${todos.length} open facts)`);
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
