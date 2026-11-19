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
const { ROUTES, renderHead, renderBody } = await import(`${pathToFileURL(serverFile).href}?t=${Date.now()}`);

// 4) Write one static HTML file per route
const assets = { css: `/assets/${cssName}`, js: `/assets/${jsName}` };
for (const route of ROUTES) {
  const body = renderBody(route);
  const html = `<!DOCTYPE html>
<html lang="en-IN">
  <head>
    ${renderHead(route, assets)}
  </head>
  <body class="bg-hubli-light text-hubli-dark antialiased">
    <div id="root" data-route="${route.path}">${body}</div>
  </body>
</html>
`;
  const out = path.join(DIST, route.outFile);
  fs.mkdirSync(path.dirname(out), { recursive: true });
  fs.writeFileSync(out, html);
  log(`${route.outFile} (${(html.length / 1024).toFixed(0)} KB)`);
}

// 5) Static files copied verbatim (robots.txt, llms.txt, .htaccess, verification files...)
fs.cpSync(PUBLIC, DIST, { recursive: true });

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
