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
const sitemapRes = await fetch(`${canonical}/sitemap.xml`);
const locs = [...(await sitemapRes.text()).matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1]);
for (const loc of locs) {
  const r = await hop(loc);
  report(r.status === 200 && /text\/html;\s*charset=utf-8/i.test(r.type || ""), `${loc} -> ${r.status} ${r.type}`);
}
console.log(failed ? `\n${failed} check(s) failed` : "\nAll live checks passed");
process.exit(failed ? 1 : 0);
