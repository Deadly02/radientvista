// Post-deploy check of the Apache rules (cannot be tested locally without Apache).
//
//   node scripts/check-live.mjs [https://hotelradiantvista.com]
//
// Verifies: http/www/no-slash/index.html all reach the canonical URL in ONE 301, unknown paths
// return 404 with the branded page, every sitemap URL returns 200 text/html; charset=utf-8.
import fs from "node:fs";

const origin = (process.argv[2] || "https://hotelradiantvista.com").replace(/\/$/, "");
const host = new URL(origin).host;
const canonical = `https://${host}`;

const hop = async (url) => {
  const res = await fetch(url, { redirect: "manual" });
  return { status: res.status, location: res.headers.get("location"), type: res.headers.get("content-type"), res };
};

const redirects = [
  [`http://${host}/`, `${canonical}/`],
  [`http://www.${host}/`, `${canonical}/`],
  [`https://www.${host}/`, `${canonical}/`],
  [`http://www.${host}/rooms`, `${canonical}/rooms/`],
  [`https://${host}/rooms`, `${canonical}/rooms/`],
  [`https://${host}/index.html`, `${canonical}/`],
  [`https://${host}/rooms/index.html`, `${canonical}/rooms/`],
];
const notFound = [`${canonical}/this-page-does-not-exist-xyz/`, `${canonical}/manifest.json`, `${canonical}/rooms/xyz`];

let failed = 0;
const report = (ok, msg) => {
  if (!ok) failed++;
  console.log(`${ok ? "PASS" : "FAIL"}  ${msg}`);
};

for (const [from, to] of redirects) {
  const r = await hop(from);
  report(r.status === 301 && r.location === to, `${from} -> ${r.status} ${r.location || ""} (want 301 ${to})`);
  if (r.location) {
    const second = await hop(r.location);
    report(second.status === 200, `  then ${r.location} -> ${second.status} (want 200, no second hop)`);
  }
}
for (const url of notFound) {
  const r = await hop(url);
  const body = r.status === 404 ? await r.res.text() : "";
  report(r.status === 404 && /noindex/.test(body), `${url} -> ${r.status} (want 404 with noindex page)`);
}
// Renamed images: old URL -> new URL in ONE 301 (also from http://www), new URL serves an image.
const renames = JSON.parse(fs.readFileSync(new URL("../src/data/image-renames.json", import.meta.url), "utf8"));
const samples = Object.entries(renames).filter((_, i) => i % 13 === 0);
samples.push(Object.entries(renames).find(([from]) => from.includes("ChatGPT")));
for (const [from, to] of samples) {
  for (const origin of [canonical, `http://www.${host}`]) {
    const url = origin + encodeURI(from);
    const r = await hop(url);
    const target = `${canonical}${to}`;
    const ok = r.status === 301 && decodeURI(r.location || "") === target;
    report(ok, `${origin.replace(canonical, "https")} ${from} -> ${r.status} ${r.location || ""}`);
    if (ok) {
      const second = await hop(r.location);
      report(second.status === 200 && /^image\//.test(second.type || ""), `  then ${to} -> ${second.status} ${second.type} (no second hop)`);
    }
  }
}

// contact.php must be executed by PHP (GET -> 405 from the script), never served as source.
{
  const r = await hop(`${canonical}/contact.php`);
  const body = await r.res.text();
  report(r.status === 405 && !body.includes("<?php"), `GET /contact.php -> ${r.status} (want 405 from PHP, no source code)`);
}

const sitemapRes = await fetch(`${canonical}/sitemap.xml`);
const locs = [...(await sitemapRes.text()).matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1]);
for (const loc of locs) {
  const r = await hop(loc);
  report(r.status === 200 && /text\/html;\s*charset=utf-8/i.test(r.type || ""), `${loc} -> ${r.status} ${r.type}`);
}
console.log(failed ? `\n${failed} check(s) failed` : "\nAll live checks passed");
process.exit(failed ? 1 : 0);
