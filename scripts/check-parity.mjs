// Build check: for every route, the server HTML (JavaScript disabled) and the hydrated DOM
// must have identical headings and visible text, and exactly one <h1>. Hydration warnings
// from React's development build fail the check.
import { chromium } from "playwright-core";
import { startServer } from "./serve.mjs";

const VIEWPORTS = [
  { name: "desktop", width: 1280, height: 900 },
  { name: "mobile", width: 390, height: 844 },
];

const snapshot = () => {
  const norm = (s) => s.replace(/\s+/g, " ").trim();
  return {
    headings: [...document.querySelectorAll("h1,h2,h3,h4,h5,h6")].map((h) => `${h.tagName} ${norm(h.textContent)}`),
    text: document.body.innerText.split("\n").map(norm).filter(Boolean),
    h1: document.querySelectorAll("h1").length,
  };
};

const diffLines = (a, b) => {
  const out = [];
  const max = Math.max(a.length, b.length);
  for (let i = 0; i < max; i++) {
    if (a[i] !== b[i]) {
      out.push(`  at line ${i + 1}:\n    server : ${a[i] ?? "(none)"}\n    hydrated: ${b[i] ?? "(none)"}`);
      if (out.length >= 5) break;
    }
  }
  return out;
};

const IGNORED_CONSOLE = [/Failed to load resource/i, /net::ERR_FAILED/i, /Download the React DevTools/i];

export async function runParityCheck({ distDir, devBundle, routes }) {
  const server = await startServer({ root: distDir });
  const browser = await chromium.launch({ channel: "chrome", headless: true });
  const problems = [];
  const notes = [];
  try {
    for (const vp of VIEWPORTS) {
      const viewport = { width: vp.width, height: vp.height };
      const noJs = await browser.newContext({ javaScriptEnabled: false, viewport, reducedMotion: "reduce" });
      const withJs = await browser.newContext({ viewport, reducedMotion: "reduce" });
      for (const ctx of [noJs, withJs]) {
        // Keep the check local and fast: no fonts, maps or other third-party requests.
        await ctx.route((url) => !url.href.startsWith(server.url), (r) => r.abort());
      }
      if (devBundle) {
        await withJs.route(/\/assets\/app-[0-9a-f]{8}\.js$/, (r) =>
          r.fulfill({ status: 200, contentType: "text/javascript", body: devBundle })
        );
      }
      for (const route of routes) {
        const url = server.url + route.urlPath;
        const label = `${vp.name} ${route.path}`;

        const p1 = await noJs.newPage();
        await p1.goto(url, { waitUntil: "load" });
        const ssr = await p1.evaluate(snapshot);
        await p1.close();

        const p2 = await withJs.newPage();
        const logs = [];
        p2.on("console", (m) => {
          if (!["error", "warning"].includes(m.type())) return;
          const text = m.text();
          if (!IGNORED_CONSOLE.some((re) => re.test(text))) logs.push(`${m.type()}: ${text}`);
        });
        p2.on("pageerror", (e) => logs.push(`pageerror: ${e.message}`));
        await p2.goto(url, { waitUntil: "load" });
        try {
          await p2.waitForFunction(() => window.__RV_HYDRATED__ === true, null, { timeout: 20000 });
        } catch {
          problems.push(`${label}: app never hydrated`);
        }
        await p2.waitForTimeout(250);
        const csr = await p2.evaluate(snapshot);
        await p2.close();

        if (ssr.h1 !== 1) problems.push(`${label}: server HTML has ${ssr.h1} <h1> elements (expected 1)`);
        if (csr.h1 !== 1) problems.push(`${label}: hydrated DOM has ${csr.h1} <h1> elements (expected 1)`);
        const hd = diffLines(ssr.headings, csr.headings);
        if (hd.length) problems.push(`${label}: headings differ\n${hd.join("\n")}`);
        const td = diffLines(ssr.text, csr.text);
        if (td.length) problems.push(`${label}: visible text differs\n${td.join("\n")}`);
        for (const l of logs) {
          if (/hydrat|did not match|didn't match|server rendered/i.test(l)) problems.push(`${label}: hydration warning: ${l}`);
          else notes.push(`${label}: ${l}`);
        }
        if (vp.name === "desktop") {
          console.log(`[check] ${route.path.padEnd(11)} h1=${ssr.h1} headings=${ssr.headings.length} lines=${ssr.text.length}`);
        }
      }
      await noJs.close();
      await withJs.close();
    }
  } finally {
    await browser.close();
    await server.close();
  }
  for (const n of notes) console.warn("[check] console:", n);
  if (problems.length) {
    console.error("[check] FAILED:\n" + problems.map((p) => "  - " + p).join("\n"));
    return false;
  }
  console.log(`[check] OK: ${routes.length} routes x ${VIEWPORTS.length} viewports, server HTML == hydrated DOM, one <h1> each, no hydration warnings`);
  return true;
}
