// Contact sheet of page screenshots from a running local server (dev aid).
//   node scripts/screenshot.mjs <out.jpg> "/path" "/path#selector" ... [--mobile] [--base=http://127.0.0.1:4173]
import { chromium } from "playwright-core";
import sharp from "sharp";

const args = process.argv.slice(2);
const out = args.shift();
const mobile = args.includes("--mobile");
const base = (args.find((a) => a.startsWith("--base=")) || "--base=http://127.0.0.1:4173").slice(7);
const targets = args.filter((a) => !a.startsWith("--"));
const viewport = mobile ? { width: 390, height: 844 } : { width: 1280, height: 800 };
const tileW = mobile ? 260 : 640;
const tileH = Math.round((tileW * viewport.height) / viewport.width);
const cols = mobile ? 4 : 2;

const browser = await chromium.launch({ channel: "chrome" });
const page = await browser.newPage({ viewport, deviceScaleFactor: 1 });
const tiles = [];
for (const t of targets) {
  const [url, sel] = t.split("@");
  await page.goto(base + url, { waitUntil: "networkidle" });
  if (sel) await page.locator(sel).first().scrollIntoViewIfNeeded();
  await page.waitForTimeout(900);
  tiles.push(await sharp(await page.screenshot()).resize(tileW).toBuffer());
}
await browser.close();
const rows = Math.ceil(tiles.length / cols);
await sharp({ create: { width: tileW * cols, height: tileH * rows, channels: 3, background: "#ffffff" } })
  .composite(tiles.map((input, i) => ({ input, left: (i % cols) * tileW, top: Math.floor(i / cols) * tileH })))
  .jpeg({ quality: 72 })
  .toFile(out);
console.log(`wrote ${out}`);
