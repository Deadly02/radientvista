// Lighthouse (mobile, default simulated throttling) against a local build.
//
//   node scripts/lighthouse.mjs [dir=dist] [runs=3] [paths=/,/rooms/] [label]
//
// Uses the system Chrome. Set LIGHTHOUSE_BIN to lighthouse/cli/index.js, otherwise `npx lighthouse@13.6.0`.
// Prints the median of each metric and writes reports/lighthouse-<label>.json.
import fs from "node:fs";
import path from "node:path";
import os from "node:os";
import { execFile } from "node:child_process";
import { promisify } from "node:util";

// Async on purpose: the local server runs in this process and must keep serving while Chrome loads pages.
const run = promisify(execFile);
import { startServer } from "./serve.mjs";

const [dir = "dist", runsArg = "3", pathsArg = "/,/rooms/", label = path.basename(path.resolve(dir))] = process.argv.slice(2);
const runs = Number(runsArg);
const paths = pathsArg.split(",");
const chrome =
  process.env.CHROME_PATH ||
  (process.platform === "win32" ? "C:/Program Files/Google/Chrome/Application/chrome.exe" : "/usr/bin/google-chrome");
const bin = process.env.LIGHTHOUSE_BIN;

const median = (xs) => {
  const s = [...xs].sort((a, b) => a - b);
  return s[Math.floor(s.length / 2)];
};

const server = await startServer({ root: dir, port: 0 });
const tmp = fs.mkdtempSync(path.join(os.tmpdir(), "lh-"));
const results = {};
try {
  for (const p of paths) {
    const samples = [];
    for (let i = 0; i < runs; i++) {
      const out = path.join(tmp, `r${i}.json`);
      const args = [
        server.url + p,
        "--quiet",
        "--output=json",
        `--output-path=${out}`,
        "--only-categories=performance,accessibility,best-practices,seo",
        "--chrome-flags=--headless=new",
      ];
      const env = { ...process.env, CHROME_PATH: chrome };
      if (bin) await run(process.execPath, [bin, ...args], { env, maxBuffer: 64 * 1024 * 1024 });
      else await run("npx", ["-y", "lighthouse@13.6.0", ...args.map((x) => JSON.stringify(x))], { env, shell: true, maxBuffer: 64 * 1024 * 1024 });
      const lhr = JSON.parse(fs.readFileSync(out, "utf8"));
      const a = lhr.audits;
      samples.push({
        performance: Math.round(lhr.categories.performance.score * 100),
        accessibility: Math.round(lhr.categories.accessibility.score * 100),
        bestPractices: Math.round(lhr.categories["best-practices"].score * 100),
        seo: Math.round(lhr.categories.seo.score * 100),
        lcpMs: Math.round(a["largest-contentful-paint"].numericValue),
        fcpMs: Math.round(a["first-contentful-paint"].numericValue),
        tbtMs: Math.round(a["total-blocking-time"].numericValue),
        cls: Number(a["cumulative-layout-shift"].numericValue.toFixed(3)),
        speedIndexMs: Math.round(a["speed-index"].numericValue),
        totalKB: Math.round(a["total-byte-weight"].numericValue / 1024),
      });
    }
    const keys = Object.keys(samples[0]);
    results[p] = Object.fromEntries(keys.map((k) => [k, median(samples.map((s) => s[k]))]));
    console.log(`${label} ${p}`, JSON.stringify(results[p]));
  }
} finally {
  await server.close();
}
fs.mkdirSync("reports", { recursive: true });
fs.writeFileSync(`reports/lighthouse-${label}.json`, JSON.stringify({ date: new Date().toISOString(), runs, results }, null, 2) + "\n");
