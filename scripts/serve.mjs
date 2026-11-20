// Minimal static server for dist/ that mirrors the Apache rules in public/.htaccess:
// directory index, 301 to the trailing-slash URL, real 404s served with 404.html.
//
//   node scripts/serve.mjs [dir=dist] [port=4173]
import http from "node:http";
import fs from "node:fs";
import path from "node:path";
import zlib from "node:zlib";
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

export function startServer({ root = "dist", port = 0, headers: extraHeaders = {} } = {}) {
  const base = path.resolve(root);
  const server = http.createServer((req, res) => {
    const url = new URL(req.url, "http://localhost");
    // Local stand-in for public/contact.php (no PHP here). MOCK_FORM=fail simulates a mail error.
    if (url.pathname === "/contact.php" && req.method === "POST") {
      req.resume();
      req.on("end", () => {
        const fail = process.env.MOCK_FORM === "fail";
        const json = /application\/json/.test(req.headers.accept || "");
        res.writeHead(fail ? 500 : 200, { "Content-Type": json ? "application/json" : "text/html; charset=utf-8" });
        res.end(json ? JSON.stringify({ ok: !fail, error: fail ? "mock failure" : "" }) : fail ? "<h1>Message not sent</h1>" : "<h1>Thank you</h1>");
      });
      return;
    }
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
      const type = TYPES[path.extname(f)] || "application/octet-stream";
      const headers = { "Content-Type": type, ...extraHeaders };
      const accept = req.headers["accept-encoding"] || "";
      // Compress text like Apache's mod_brotli/mod_deflate so local measurements are realistic.
      const compressible = /^(text\/|application\/(json|xml)|image\/svg)/.test(type);
      if (compressible && /\bbr\b/.test(accept)) {
        res.writeHead(status, { ...headers, "Content-Encoding": "br", Vary: "Accept-Encoding" });
        fs.createReadStream(f).pipe(zlib.createBrotliCompress()).pipe(res);
      } else if (compressible && /\bgzip\b/.test(accept)) {
        res.writeHead(status, { ...headers, "Content-Encoding": "gzip", Vary: "Accept-Encoding" });
        fs.createReadStream(f).pipe(zlib.createGzip()).pipe(res);
      } else {
        res.writeHead(status, headers);
        fs.createReadStream(f).pipe(res);
      }
    };
    const notFoundPage = path.join(base, "404.html");
    if (fs.existsSync(file) && fs.statSync(file).isFile()) send(200, file);
    else if (fs.existsSync(notFoundPage)) send(404, notFoundPage);
    else res.writeHead(404, { "Content-Type": "text/plain; charset=utf-8" }).end("Not found");
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
