// Minimal static server for dist/ that mirrors the Apache rules in public/.htaccess:
// directory index, 301 to the trailing-slash URL, real 404s served with 404.html.
//
//   node scripts/serve.mjs [dir=dist] [port=4173]
import http from "node:http";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const TYPES = {
  ".html": "text/html; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".json": "application/json",
  ".xml": "application/xml; charset=utf-8",
  ".txt": "text/plain; charset=utf-8",
  ".svg": "image/svg+xml",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".webp": "image/webp",
  ".avif": "image/avif",
  ".ico": "image/x-icon",
  ".woff2": "font/woff2",
};

export function startServer({ root = "dist", port = 0 } = {}) {
  const base = path.resolve(root);
  const server = http.createServer((req, res) => {
    const url = new URL(req.url, "http://localhost");
    let rel;
    try {
      rel = decodeURIComponent(url.pathname);
    } catch {
      rel = "/";
    }
    let file = path.join(base, rel);
    if (!file.startsWith(base)) {
      res.writeHead(403).end();
      return;
    }
    if (rel.endsWith("/")) file = path.join(file, "index.html");
    else if (fs.existsSync(file) && fs.statSync(file).isDirectory()) {
      res.writeHead(301, { Location: rel + "/" + url.search }).end();
      return;
    }
    const send = (status, f) => {
      res.writeHead(status, { "Content-Type": TYPES[path.extname(f)] || "application/octet-stream" });
      fs.createReadStream(f).pipe(res);
    };
    if (fs.existsSync(file) && fs.statSync(file).isFile()) send(200, file);
    else send(404, path.join(base, "404.html"));
  });
  return new Promise((resolve) => {
    server.listen(port, "127.0.0.1", () => {
      const { port: p } = server.address();
      resolve({ url: `http://127.0.0.1:${p}`, close: () => new Promise((r) => server.close(r)) });
    });
  });
}

if (process.argv[1] && path.resolve(process.argv[1]) === fileURLToPath(import.meta.url)) {
  const [root = "dist", port = "4173"] = process.argv.slice(2);
  const { url } = await startServer({ root, port: Number(port) });
  console.log(`serving ${root} at ${url}`);
}
