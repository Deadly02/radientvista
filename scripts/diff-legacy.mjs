// Compares the legacy site (hand-written HTML + the old React bundle, from a git ref) with the
// SSG output in dist/, and lists what the new output no longer contains: visible copy, image
// alt text, links, head tags and JSON-LD facts.
//
//   node scripts/diff-legacy.mjs [git-ref=main] [out=reports/ssg-vs-legacy.md]
import fs from "node:fs";
import path from "node:path";
import { execSync } from "node:child_process";
import { chromium } from "playwright-core";
import { startServer } from "./serve.mjs";

const ref = process.argv[2] || "main";
const outFile = process.argv[3] || "reports/ssg-vs-legacy.md";
const ROUTES = ["/", "/rooms/", "/dining/", "/bar/", "/banquets/", "/gallery/"];

// 1) Materialise the legacy site (without the 245 MB of images).
const legacyDir = path.resolve(".ssg/legacy");
fs.rmSync(legacyDir, { recursive: true, force: true });
fs.mkdirSync(legacyDir, { recursive: true });
const tar = path.join(legacyDir, "legacy.tar");
execSync(`git archive --format=tar -o "${tar}" ${ref} index.html rooms dining bar banquets gallery assets`);
execSync("tar -xf legacy.tar", { cwd: legacyDir });

const extract = () => {
  const norm = (s) => (s || "").replace(/\s+/g, " ").trim();
  const q = (sel) => [...document.querySelectorAll(sel)];
  return {
    title: norm(document.title),
    metas: q("meta[name],meta[property]").map((m) => `${m.getAttribute("name") || m.getAttribute("property")} = ${m.getAttribute("content")}`),
    links: q("head link").map((l) => `${l.getAttribute("rel")}${l.hreflang ? `[${l.hreflang}]` : ""} ${l.getAttribute("href")}`),
    ld: q('script[type="application/ld+json"]').map((s) => s.textContent),
    lines: document.body.innerText.split("\n").map(norm).filter(Boolean),
    alts: q("img").map((i) => norm(i.getAttribute("alt"))).filter(Boolean),
    imgs: q("img").map((i) => i.getAttribute("src")),
    hrefs: q("body a[href]").map((a) => a.getAttribute("href")),
  };
};

async function capture(baseUrl, { js, legacy }) {
  const browser = await chromium.launch({ channel: "chrome", headless: true });
  const ctx = await browser.newContext({ javaScriptEnabled: js, viewport: { width: 1280, height: 900 }, reducedMotion: "reduce" });
  await ctx.route((url) => !url.href.startsWith(baseUrl) || /\/images\//.test(url.pathname), (r) => r.abort());
  if (legacy) await ctx.addInitScript(() => sessionStorage.setItem("rv_splash_shown", "1"));
  const out = {};
  for (const r of ROUTES) {
    const page = await ctx.newPage();
    await page.goto(baseUrl + r, { waitUntil: "load" });
    if (js) await page.waitForTimeout(legacy ? 1500 : 600);
    out[r] = await page.evaluate(extract);
    await page.close();
  }
  await browser.close();
  return out;
}

// 2) Capture legacy (static HTML and hydrated React DOM) and new (static) output.
const legacySrv = await startServer({ root: legacyDir });
const newSrv = await startServer({ root: "dist" });
const legacyStatic = await capture(legacySrv.url, { js: false, legacy: true });
const legacyLive = await capture(legacySrv.url, { js: true, legacy: true });
const fresh = await capture(newSrv.url, { js: false, legacy: false });
await legacySrv.close();
await newSrv.close();

// 3) Normalisation helpers
const canon = (s) =>
  s
    .toLowerCase()
    .replace(/[’‘]/g, "'")
    .replace(/[“”]/g, '"')
    .replace(/[—–]/g, "-")
    .replace(/&amp;/g, "&")
    .replace(/\s+/g, " ")
    .trim();
const sentences = (lines) =>
  lines
    .flatMap((l) => l.split(/(?<=[.!?:])\s+/))
    .map((s) => s.trim())
    .filter((s) => s.split(" ").length >= 3);
const normHref = (h) => {
  if (!h) return h;
  let x = h.replace(/^https:\/\/hotelradiantvista\.com/, "") || "/";
  if (x.startsWith("https://wa.me/")) {
    const u = new URL(x);
    x = `wa.me/${u.pathname.slice(1)} "${u.searchParams.get("text") || ""}"`;
  }
  return x;
};
const normAsset = (s) => s.replace(/\/assets\/(app|styles)-[0-9a-f]{8}\.(js|css)/g, "/assets/$1-<hash>.$2");
const flattenLd = (blocks) => {
  const lines = [];
  const walk = (prefix, v) => {
    if (Array.isArray(v)) {
      if (v.every((x) => typeof x !== "object")) lines.push(`${prefix} = [${v.join(" | ")}]`);
      else v.forEach((x, i) => walk(`${prefix}[${i}]`, x));
    } else if (v && typeof v === "object") for (const [k, val] of Object.entries(v)) walk(`${prefix}.${k}`, val);
    else lines.push(`${prefix} = ${v}`);
  };
  for (const b of blocks) {
    const data = JSON.parse(b);
    for (const node of data["@graph"] || [data]) {
      const t = Array.isArray(node["@type"]) ? node["@type"].join("+") : node["@type"];
      const key = `${t}${node["@id"] ? ` <${node["@id"].replace("https://hotelradiantvista.com", "")}>` : ""}`;
      const { "@type": _t, "@id": _i, ...rest } = node;
      walk(key, rest);
    }
  }
  return lines;
};
const minus = (a, b) => [...new Set(a)].filter((x) => !new Set(b).has(x));

// 4) Report
let md = `# SSG output vs legacy site (${ref})\n\nGenerated ${new Date().toISOString()}.\n`;
md += `"Legacy static" = the hand-written HTML (what crawlers without JS saw). "Legacy live" = the old React DOM after it replaced that HTML (what visitors saw). "New" = dist/ server HTML (identical to the hydrated DOM, see the parity check).\n`;
const summary = [];
for (const r of ROUTES) {
  const L = legacyStatic[r];
  const V = legacyLive[r];
  const N = fresh[r];
  const newText = canon(N.lines.join(" "));
  const lostCopy = (lines) => [...new Set(sentences(lines))].filter((s) => !newText.includes(canon(s)));
  const lostStatic = lostCopy(L.lines);
  const lostLive = minus(lostCopy(V.lines), lostStatic);
  const lostAlts = minus([...L.alts, ...V.alts], N.alts);
  const lostLinks = minus([...L.hrefs, ...V.hrefs].map(normHref), N.hrefs.map(normHref));
  const headL = [`title = ${L.title}`, ...L.metas, ...L.links].map(normAsset);
  const headN = [`title = ${N.title}`, ...N.metas, ...N.links].map(normAsset);
  const lostHead = minus(headL, headN);
  const addedHead = minus(headN, headL);
  const ldL = flattenLd(L.ld);
  const ldN = flattenLd(N.ld);
  const lostLd = minus(ldL, ldN);
  const addedLd = minus(ldN, ldL);
  summary.push(
    `| \`${r}\` | ${lostStatic.length} | ${lostLive.length} | ${lostAlts.length} | ${lostLinks.length} | ${lostHead.length} | ${lostLd.length} / +${addedLd.length} |`
  );
  const list = (title, items) =>
    `\n### ${title} (${items.length})\n\n` + (items.length ? items.map((x) => `- ${x}`).join("\n") : "_none_") + "\n";
  md += `\n## \`${r}\`\n`;
  md += list("Copy in legacy static HTML that is not in the new page", lostStatic);
  md += list("Copy in the legacy live React page that is not in the new page", lostLive);
  md += list("Image alt text no longer present", lostAlts);
  md += list("Links no longer present", lostLinks);
  md += list("Head tags removed or changed (legacy value)", lostHead);
  md += list("Head tags added or changed (new value)", addedHead);
  md += list("JSON-LD facts removed or changed (legacy value)", lostLd);
  md += list("JSON-LD facts added or changed (new value)", addedLd);
}
md = md.replace(
  "\n## `/`",
  `\n## Summary\n\n| Route | Static copy lost | Live copy lost | Alts lost | Links lost | Head tags changed | JSON-LD lost / added |\n|---|---|---|---|---|---|---|\n${summary.join("\n")}\n\n## \`/\``
);
fs.mkdirSync(path.dirname(outFile), { recursive: true });
fs.writeFileSync(outFile, md);
console.log(`wrote ${outFile}`);
console.log(summary.join("\n"));
