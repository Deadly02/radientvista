// Crawls the built site (local server) from / and the sitemap, and checks every page:
// status, exactly one <h1>, title 30-60 chars, meta description 120-160 chars, canonical, robots,
// JSON-LD parses, every <img> has alt + width + height, no "ChatGPT Image" file names, internal
// links resolve. Also checks unknown URLs return 404 and directory URLs without a slash 301.
//
//   node scripts/crawl-check.mjs [dist] [report=reports/crawl-check.md]
import fs from "node:fs";
import path from "node:path";
import { startServer } from "./serve.mjs";

const dist = process.argv[2] || "dist";
const reportFile = process.argv[3] || "reports/crawl-check.md";
const SITE = "https://hotelradiantvista.com";
const server = await startServer({ root: dist });
const base = server.url;

const decode = (s) => s.replace(/&amp;/g, "&").replace(/&#x27;|&#39;/g, "'").replace(/&quot;/g, '"').replace(/&lt;/g, "<").replace(/&gt;/g, ">");
const attr = (tag, name) => {
  const m = tag.match(new RegExp(`\\s${name}="([^"]*)"`, "i"));
  return m ? decode(m[1]) : null;
};

const sitemap = await (await fetch(`${base}/sitemap.xml`)).text();
const queue = ["/", ...[...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1].replace(SITE, ""))];
const seen = new Set();
const results = [];
const brokenLinks = new Map();

while (queue.length) {
  const p = queue.shift();
  if (seen.has(p)) continue;
  seen.add(p);
  const res = await fetch(base + p, { redirect: "manual" });
  const html = res.status === 200 ? await res.text() : "";
  const head = html.split("</head>")[0] || "";
  const body = html.split("<body")[1] || "";
  const title = decode((head.match(/<title>([\s\S]*?)<\/title>/) || [, ""])[1].trim());
  const desc = decode((head.match(/<meta name="description" content="([^"]*)"/) || [, ""])[1]);
  const canonical = (head.match(/<link rel="canonical" href="([^"]*)"/) || [, ""])[1];
  const robots = (head.match(/<meta name="robots" content="([^"]*)"/) || [, ""])[1];
  const h1 = (body.match(/<h1\b/g) || []).length;
  let ldOk = true;
  for (const m of head.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)) {
    try {
      JSON.parse(m[1]);
    } catch {
      ldOk = false;
    }
  }
  const imgs = [...body.matchAll(/<img\b[^>]*>/g)].map((m) => m[0]);
  const badImgs = imgs.filter((t) => !attr(t, "alt") || !attr(t, "width") || !attr(t, "height"));
  const chatgpt = /ChatGPT(%20| )Image/i.test(html);
  for (const m of body.matchAll(/<a\b[^>]*href="(\/[^"#]*)(#[^"]*)?"/g)) {
    const link = decode(m[1]);
    if (!seen.has(link) && !queue.includes(link) && !/\.(php|xml|txt|jpg|webp|png)$/.test(link)) queue.push(link);
    if (!brokenLinks.has(link)) brokenLinks.set(link, new Set());
    brokenLinks.get(link).add(p);
  }
  const noindex = /noindex/.test(robots);
  const issues = [];
  if (res.status !== 200) issues.push(`status ${res.status}`);
  if (h1 !== 1) issues.push(`${h1} h1`);
  if (!noindex && (title.length < 30 || title.length > 60)) issues.push(`title ${title.length} chars`);
  if (!noindex && (desc.length < 120 || desc.length > 160)) issues.push(`description ${desc.length} chars`);
  if (!noindex && canonical !== SITE + p) issues.push(`canonical "${canonical}"`);
  if (!robots) issues.push("no meta robots");
  if (!ldOk) issues.push("JSON-LD does not parse");
  if (badImgs.length) issues.push(`${badImgs.length} img without alt/width/height`);
  if (chatgpt) issues.push('"ChatGPT Image" file name');
  results.push({ p, status: res.status, h1, title: title.length, desc: desc.length, canonical: !!canonical, noindex, imgs: imgs.length, issues });
}

// links that do not resolve
const linkIssues = [];
for (const [link, from] of brokenLinks) {
  const r = await fetch(base + link, { redirect: "manual" });
  if (r.status !== 200) linkIssues.push(`${link} -> ${r.status} (linked from ${[...from].slice(0, 3).join(", ")})`);
}

// error handling
const extra = [];
for (const u of ["/this-page-does-not-exist-xyz/", "/manifest.json", "/rooms/xyz"]) {
  const r = await fetch(base + u, { redirect: "manual" });
  const body = await r.text();
  extra.push({ check: `${u} returns 404 with noindex page`, ok: r.status === 404 && /noindex/.test(body) });
}
for (const u of ["/rooms", "/banquets/weddings"]) {
  const r = await fetch(base + u, { redirect: "manual" });
  extra.push({ check: `${u} 301 -> ${u}/ (local server; Apache rule verified by check:live)`, ok: r.status === 301 && r.headers.get("location") === `${u}/` });
}
await server.close();

const failing = results.filter((r) => r.issues.length);
let md = `# Crawl check (${new Date().toISOString().slice(0, 10)})\n\n`;
md += `${results.length} URLs crawled from / and sitemap.xml. ${failing.length} with issues, ${linkIssues.length} broken internal links.\n\n`;
md += "| URL | Status | H1 | Title | Desc | Canonical | Robots | Images | Issues |\n|---|---|---|---|---|---|---|---|---|\n";
for (const r of results) {
  md += `| ${r.p} | ${r.status} | ${r.h1} | ${r.title} | ${r.desc} | ${r.canonical ? "yes" : "-"} | ${r.noindex ? "noindex" : "index"} | ${r.imgs} | ${r.issues.join("; ") || "OK"} |\n`;
}
md += `\n## Error handling\n\n${extra.map((e) => `- ${e.ok ? "PASS" : "FAIL"} ${e.check}`).join("\n")}\n`;
md += `\n## Internal links\n\n${linkIssues.length ? linkIssues.map((l) => `- ${l}`).join("\n") : "All internal links resolve (200)."}\n`;
fs.mkdirSync(path.dirname(reportFile), { recursive: true });
fs.writeFileSync(reportFile, md);
console.log(md);
const ok = !failing.length && !linkIssues.length && extra.every((e) => e.ok);
process.exit(ok ? 0 : 1);
