// Renders a route's <head> from the route config. Used only by build.mjs.
import { SITE_NAME, SITE_URL } from "../data/site";
import { abs, breadcrumbNode } from "./schema";

const esc = (s) =>
  String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");

// JSON inside <script> must not be able to close the tag.
const jsonForScript = (obj) => JSON.stringify(obj, null, 2).replace(/</g, "\\u003c");

const ROBOTS_INDEX = "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1";

export const routeGraph = (route) => {
  const graph = route.schema(route);
  if (route.breadcrumbs) graph.push(breadcrumbNode({ path: route.path, items: route.breadcrumbs }));
  return graph;
};

export function renderHead(route, assets) {
  const canonical = route.noindex ? null : abs(route.path);
  const ogImage = abs(route.og.image);
  const meta = (attr, key, content) => `<meta ${attr}="${esc(key)}" content="${esc(content)}" />`;
  const graph = routeGraph(route);

  const tags = [
    `<meta charset="UTF-8" />`,
    `<meta name="viewport" content="width=device-width, initial-scale=1.0" />`,
    `<title>${esc(route.title)}</title>`,
    meta("name", "description", route.description),
    canonical && `<link rel="canonical" href="${esc(canonical)}" />`,
    canonical && `<link rel="alternate" hreflang="en-IN" href="${esc(canonical)}" />`,
    canonical && `<link rel="alternate" hreflang="x-default" href="${esc(canonical)}" />`,
    meta("name", "robots", route.noindex ? "noindex, follow" : ROBOTS_INDEX),
    meta("name", "author", SITE_NAME),
    meta("name", "theme-color", "#78350f"),

    meta("property", "og:type", route.og.type),
    meta("property", "og:site_name", SITE_NAME),
    meta("property", "og:title", route.title),
    meta("property", "og:description", route.description),
    canonical && meta("property", "og:url", canonical),
    meta("property", "og:image", ogImage),
    meta("property", "og:image:width", route.og.width),
    meta("property", "og:image:height", route.og.height),
    meta("property", "og:image:alt", route.og.alt),
    meta("property", "og:locale", "en_IN"),

    meta("name", "twitter:card", "summary_large_image"),
    meta("name", "twitter:title", route.title),
    meta("name", "twitter:description", route.description),
    meta("name", "twitter:image", ogImage),
    meta("name", "twitter:image:alt", route.twitter.imageAlt),

    `<link rel="icon" type="image/png" href="/images/logo.png" />`,
    `<link rel="apple-touch-icon" href="/images/logo.png" />`,
    route.preloadImage && `<link rel="preload" as="image" href="${esc(route.preloadImage)}" fetchpriority="high" />`,
    `<link rel="alternate" type="text/plain" href="/llms.txt" title="LLM-readable summary" />`,
    `<link rel="sitemap" type="application/xml" href="/sitemap.xml" />`,

    graph.length > 0 &&
      `<script type="application/ld+json">\n${jsonForScript({ "@context": "https://schema.org", "@graph": graph })}\n</script>`,

    `<link rel="stylesheet" href="${esc(assets.css)}" />`,
    `<link rel="preconnect" href="https://fonts.googleapis.com" />`,
    `<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />`,
    `<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Lato:wght@300;400;700&family=Playfair+Display:ital,wght@0,400;0,600;0,700;1,400&display=swap" />`,
    `<script type="module" src="${esc(assets.js)}"></script>`,
  ];
  return tags.filter(Boolean).join("\n    ");
}

export { SITE_URL };
