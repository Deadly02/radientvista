// Responsive <img> attributes from the build-generated manifest (scripts/images.mjs).
// Same data in the server and client bundles, so hydration always matches.
import MANIFEST from "../generated/image-manifest.json";

const entry = (src) => MANIFEST[src];

// Spread onto <img>: src, srcSet, sizes, width, height.
export function imgProps(src, sizes = "100vw") {
  const m = entry(src);
  if (!m || !m.variants) return { src: (m && m.stable) || src };
  return {
    src: `${m.base}-${m.w}.webp`,
    srcSet: m.variants.map((w) => `${m.base}-${w}.webp ${w}w`).join(", "),
    sizes,
    width: m.w,
    height: m.h,
  };
}

// Stable, crawlable URL for JSON-LD, sitemaps and redirects.
export const stableImage = (src) => (entry(src) && entry(src).stable) || src;

// 1200x630 Open Graph crop (written by the build for every route's og image).
export const ogImage = (src) => `/images/og/${src.split("/").pop().replace(/\.[^.]+$/, "")}.jpg`;

export const imageSize = (src) => {
  const m = entry(src);
  return m && m.w ? { width: m.w, height: m.h } : null;
};
