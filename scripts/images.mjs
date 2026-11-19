// Responsive image generation (called by build.mjs before bundling).
//
// For every master in images/ (top level):
//   dist/images/<name>-<w>.webp   for w in 480 / 960 / 1280 (never upscaled)
//   dist/images/<name>.<ext>      stable URL (largest WebP, a re-encoded JPEG, or the PNG/SVG as-is)
// and writes src/generated/image-manifest.json { "/images/<master>": { w, h, base, variants, stable } }
// that components read for width/height/srcset, so server and client render identical markup.
// Encodes are cached in .ssg/img-cache by content hash, so rebuilds are fast.
import fs from "node:fs";
import path from "node:path";
import crypto from "node:crypto";
import sharp from "sharp";

const WIDTHS = [480, 960, 1280];
const WEBP = { quality: 72, effort: 5 };
const ENCODER_VERSION = "v3";
const MAX_BYTES = 120 * 1024;

export async function processImages({ srcDir, distDir, cacheDir, manifestFile }) {
  fs.mkdirSync(cacheDir, { recursive: true });
  fs.mkdirSync(path.join(distDir, "images"), { recursive: true });
  const manifest = {};
  const files = fs.readdirSync(srcDir, { withFileTypes: true }).filter((e) => e.isFile()).map((e) => e.name);

  for (const file of files.sort()) {
    const abs = path.join(srcDir, file);
    const ext = path.extname(file).slice(1).toLowerCase();
    const base = file.slice(0, -(ext.length + 1));
    const key = `/images/${file}`;
    if (ext === "svg") {
      fs.copyFileSync(abs, path.join(distDir, "images", file));
      manifest[key] = { stable: key };
      continue;
    }
    const buf = fs.readFileSync(abs);
    const digest = crypto.createHash("sha1").update(buf).update(ENCODER_VERSION).digest("hex").slice(0, 12);
    const meta = await sharp(buf).metadata();
    const variants = WIDTHS.filter((w) => w < meta.width);
    variants.push(Math.min(meta.width, WIDTHS[WIDTHS.length - 1]));
    const uniq = [...new Set(variants)].sort((a, b) => a - b);

    for (const w of uniq) {
      const cached = path.join(cacheDir, `${digest}-${w}.webp`);
      if (!fs.existsSync(cached)) {
        // Step quality down until the file is under the 120 KB budget.
        let out;
        for (const quality of [WEBP.quality, 64, 56, 48, 40]) {
          out = await sharp(buf).resize({ width: w }).webp({ ...WEBP, quality }).toBuffer();
          if (out.length <= MAX_BYTES) break;
        }
        fs.writeFileSync(cached, out);
      }
      fs.copyFileSync(cached, path.join(distDir, "images", `${base}-${w}.webp`));
    }
    const largest = uniq[uniq.length - 1];
    const height = Math.round((meta.height * largest) / meta.width);
    let stable;
    if (ext === "webp") {
      stable = `/images/${base}.webp`;
      fs.copyFileSync(path.join(cacheDir, `${digest}-${largest}.webp`), path.join(distDir, "images", `${base}.webp`));
    } else if (ext === "jpg" || ext === "jpeg") {
      stable = `/images/${base}.jpg`;
      const cached = path.join(cacheDir, `${digest}-${largest}.jpg`);
      if (!fs.existsSync(cached)) await sharp(buf).resize({ width: largest }).jpeg({ quality: 80, mozjpeg: true }).toFile(cached);
      fs.copyFileSync(cached, path.join(distDir, "images", `${base}.jpg`));
    } else {
      stable = `/images/${file}`;
      fs.copyFileSync(abs, path.join(distDir, "images", file));
    }
    manifest[key] = { w: largest, h: height, base: `/images/${base}`, variants: uniq, stable };
  }
  fs.mkdirSync(path.dirname(manifestFile), { recursive: true });
  fs.writeFileSync(manifestFile, JSON.stringify(manifest, null, 2) + "\n");
  return manifest;
}

// 1200x630 Open Graph crops, generated for the masters the rendered pages actually reference.
export async function writeOgImages({ srcDir, distDir, cacheDir, names }) {
  fs.mkdirSync(path.join(distDir, "images", "og"), { recursive: true });
  for (const name of names) {
    const master = fs.readdirSync(srcDir).find((f) => f.replace(/\.[^.]+$/, "") === name);
    if (!master) throw new Error(`OG image source not found for ${name}`);
    const buf = fs.readFileSync(path.join(srcDir, master));
    const digest = crypto.createHash("sha1").update(buf).update("og1").digest("hex").slice(0, 12);
    const cached = path.join(cacheDir, `${digest}-og.jpg`);
    if (!fs.existsSync(cached)) {
      await sharp(buf).resize(1200, 630, { fit: "cover", position: "attention" }).jpeg({ quality: 82, mozjpeg: true }).toFile(cached);
    }
    fs.copyFileSync(cached, path.join(distDir, "images", "og", `${name}.jpg`));
  }
}
