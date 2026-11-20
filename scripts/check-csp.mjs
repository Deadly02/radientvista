// Loads every built page with the exact Content-Security-Policy from dist/.htaccess, lets all
// external requests through, and reports (a) CSP violations, (b) every external host each page
// loads, (c) external link targets (booking engine, WhatsApp, maps), which CSP does not restrict.
//
//   node scripts/check-csp.mjs [dist] [report=reports/csp-check.md]
import fs from "node:fs";
import path from "node:path";
import { chromium } from "playwright-core";
import { startServer } from "./serve.mjs";

const dist = process.argv[2] || "dist";
const reportFile = process.argv[3] || "reports/csp-check.md";
const htaccess = fs.readFileSync(path.join(dist, ".htaccess"), "utf8");
const csp = (htaccess.match(/Header always set Content-Security-Policy "([^"]+)"/) || [])[1];
if (!csp) throw new Error("No CSP found in dist/.htaccess");

const server = await startServer({ root: dist, headers: { "Content-Security-Policy": csp } });
const sitemap = fs.readFileSync(path.join(dist, "sitemap.xml"), "utf8");
const pages = [...sitemap.matchAll(/<loc>https:\/\/hotelradiantvista\.com([^<]*)<\/loc>/g)].map((m) => m[1]);
pages.push("/privacy-policy/", "/terms/", "/cancellation-policy/", "/this-page-does-not-exist-xyz/");

const browser = await chromium.launch({ channel: "chrome" });
const context = await browser.newContext({ viewport: { width: 1280, height: 900 } });
await context.addInitScript(() => {
  window.__cspViolations = [];
  document.addEventListener("securitypolicyviolation", (e) =>
    window.__cspViolations.push(`${e.violatedDirective} blocked ${e.blockedURI || "(inline)"}`)
  );
});
const rows = [];
const allHosts = new Map();
const linkHosts = new Map();
let violations = 0;
for (const p of pages) {
  const page = await context.newPage();
  const ownHosts = new Set();
  const frameHosts = new Set();
  page.on("request", (req) => {
    const u = new URL(req.url());
    if (u.origin === server.url || u.protocol === "data:") return;
    const fromMain = req.frame() === page.mainFrame();
    (fromMain ? ownHosts : frameHosts).add(u.host);
  });
  await page.goto(server.url + p, { waitUntil: "load" });
  // Scroll through the page so lazy images and the map iframe load.
  await page.evaluate(async () => {
    for (let y = 0; y < document.body.scrollHeight; y += 600) {
      window.scrollTo(0, y);
      await new Promise((r) => setTimeout(r, 120));
    }
  });
  await page.waitForTimeout(2500);
  const v = await page.evaluate(() => window.__cspViolations);
  violations += v.length;
  const links = await page.evaluate(() =>
    [...document.querySelectorAll("a[href^='http'], iframe[src]")].map((el) => (el.href || el.src))
  );
  for (const l of links) {
    const h = new URL(l).host;
    if (h !== "hotelradiantvista.com" && !h.startsWith("127.0.0.1")) {
      if (!linkHosts.has(h)) linkHosts.set(h, new Set());
      linkHosts.get(h).add(p);
    }
  }
  for (const h of ownHosts) {
    if (!allHosts.has(h)) allHosts.set(h, new Set());
    allHosts.get(h).add(p);
  }
  rows.push({ p, own: [...ownHosts].sort(), frame: [...frameHosts].sort(), v });
  await page.close();
}
await browser.close();
await server.close();

let md = `# CSP and external domains (${new Date().toISOString().slice(0, 10)})\n\nCSP tested (from dist/.htaccess):\n\n\`\`\`\n${csp.split("; ").join(";\n")}\n\`\`\`\n\n`;
md += `**CSP violations: ${violations}**\n\n`;
md += "## External hosts loaded by our pages (main document)\n\n| Host | Pages |\n|---|---|\n";
for (const [h, ps] of [...allHosts].sort()) md += `| ${h} | ${[...ps].join(", ")} |\n`;
md += "\n## Loaded inside the Google Maps iframe (Google's own CSP applies, not ours)\n\n";
md += [...new Set(rows.flatMap((r) => r.frame))].sort().map((h) => `- ${h}`).join("\n") || "- none";
md += "\n\n## External links and embeds (navigation targets; CSP does not restrict new-tab links)\n\n| Host | Pages |\n|---|---|\n";
for (const [h, ps] of [...linkHosts].sort()) md += `| ${h} | ${ps.size} pages |\n`;
md += "\n## Per page\n\n| Page | External hosts (main document) | CSP violations |\n|---|---|---|\n";
for (const r of rows) md += `| ${r.p} | ${r.own.join(", ") || "none"} | ${r.v.length ? r.v.join("; ") : "0"} |\n`;
fs.mkdirSync(path.dirname(reportFile), { recursive: true });
fs.writeFileSync(reportFile, md);
console.log(md);
process.exit(violations ? 1 : 0);
