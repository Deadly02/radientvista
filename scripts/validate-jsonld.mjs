// Validates the JSON-LD in every built page.
//   - JSON parses and expands as JSON-LD (jsonld.js, schema.org vocabulary)
//   - no unconfirmed facts leaked ("__todo" / "{{TODO")
//   - every {"@id": ...} reference points at a node defined somewhere on the site
//   - required properties per type, absolute https URLs, our image URLs exist in dist/
//   - every FAQPage question is visible on the same page
//
//   node scripts/validate-jsonld.mjs [dist]
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import jsonld from "jsonld";

const SITE = "https://hotelradiantvista.com";
const REQUIRED = {
  Hotel: ["name", "address", "telephone", "url", "image"],
  Restaurant: ["name", "address", "url"],
  BarOrPub: ["name", "address", "url"],
  EventVenue: ["name", "address"],
  WebSite: ["name", "url"],
  WebPage: ["name", "url"],
  AboutPage: ["name", "url"],
  ContactPage: ["name", "url"],
  CollectionPage: ["name", "url"],
  HotelRoom: ["name"],
  FAQPage: ["mainEntity"],
  BreadcrumbList: ["itemListElement"],
  ImageGallery: ["name"],
  ItemList: ["itemListElement"],
};

// Offline document loader: the schema.org context maps every term into the schema.org vocabulary.
const documentLoader = async (url) => {
  if (/^https?:\/\/schema\.org\/?$/.test(url)) {
    return { contextUrl: null, documentUrl: url, document: { "@context": { "@vocab": "https://schema.org/" } } };
  }
  throw new Error(`Unexpected remote context: ${url}`);
};

const htmlFiles = (dir) => {
  const out = [];
  const walk = (d) => {
    for (const e of fs.readdirSync(d, { withFileTypes: true })) {
      const p = path.join(d, e.name);
      if (e.isDirectory()) walk(p);
      else if (e.name.endsWith(".html")) out.push(p);
    }
  };
  walk(dir);
  return out.sort();
};

const types = (n) => (Array.isArray(n["@type"]) ? n["@type"] : [n["@type"]]).filter(Boolean);
const visibleText = (html) =>
  (html.split("<body")[1] || "")
    .replace(/<script[\s\S]*?<\/script>/g, " ")
    .replace(/<[^>]+>/g, " ")
    .replace(/&amp;/g, "&")
    .replace(/&#x27;|&#39;/g, "'")
    .replace(/&quot;/g, '"')
    .replace(/\s+/g, " ");

export async function validateJsonLd(distDir) {
  const files = htmlFiles(distDir);
  const pages = [];
  const definedIds = new Set();
  for (const file of files) {
    const html = fs.readFileSync(file, "utf8");
    const blocks = [...html.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)].map((m) => m[1]);
    pages.push({ file: path.relative(distDir, file).replace(/\\/g, "/"), html, blocks });
  }
  const errors = [];
  const summary = [];
  // pass 1: parse and collect node ids
  for (const p of pages) {
    p.graphs = [];
    for (const raw of p.blocks) {
      try {
        const data = JSON.parse(raw);
        p.graphs.push(data);
        for (const n of data["@graph"] || [data]) if (n["@id"]) definedIds.add(n["@id"]);
      } catch (e) {
        errors.push(`${p.file}: JSON parse error: ${e.message}`);
      }
    }
  }
  // pass 2: checks
  for (const p of pages) {
    let nodes = 0;
    for (const data of p.graphs) {
      const raw = JSON.stringify(data);
      if (/__todo|\{\{TODO/i.test(raw)) errors.push(`${p.file}: unconfirmed TODO value leaked into JSON-LD`);
      try {
        await jsonld.expand(data, { documentLoader, safe: true });
      } catch (e) {
        errors.push(`${p.file}: JSON-LD expansion failed: ${e.message}`);
      }
      const walk = (v, where) => {
        if (Array.isArray(v)) return v.forEach((x, i) => walk(x, `${where}[${i}]`));
        if (v && typeof v === "object") {
          const keys = Object.keys(v);
          if (keys.length === 1 && keys[0] === "@id" && !definedIds.has(v["@id"])) {
            errors.push(`${p.file}: ${where} references undefined node ${v["@id"]}`);
          }
          for (const [k, x] of Object.entries(v)) walk(x, `${where}.${k}`);
          return;
        }
        if (typeof v === "string" && /^(https?:)?\/\//.test(v) && !v.startsWith("https://")) {
          errors.push(`${p.file}: ${where} is not an https URL: ${v}`);
        }
        if (typeof v === "string" && v.startsWith(`${SITE}/images/`)) {
          const rel = decodeURIComponent(v.slice(SITE.length));
          if (!fs.existsSync(path.join(distDir, rel))) errors.push(`${p.file}: ${where} image does not exist: ${rel}`);
        }
      };
      for (const n of data["@graph"] || [data]) {
        nodes++;
        const label = `${types(n).join("+")}${n["@id"] ? ` ${n["@id"].replace(SITE, "")}` : ""}`;
        for (const t of types(n)) {
          for (const prop of REQUIRED[t] || []) {
            if (n[prop] === undefined || n[prop] === "" || (Array.isArray(n[prop]) && !n[prop].length)) {
              errors.push(`${p.file}: ${label} is missing required "${prop}"`);
            }
          }
        }
        if (types(n).includes("FAQPage")) {
          const text = visibleText(p.html);
          for (const q of n.mainEntity || []) {
            if (!q.name || !q.acceptedAnswer || !q.acceptedAnswer.text) errors.push(`${p.file}: FAQ entry missing question or answer`);
            else if (!text.includes(q.name)) errors.push(`${p.file}: FAQ question not visible on the page: "${q.name}"`);
          }
        }
        if (types(n).includes("BreadcrumbList")) {
          (n.itemListElement || []).forEach((li, i) => {
            if (li.position !== i + 1 || !li.name || !String(li.item || "").startsWith(SITE)) {
              errors.push(`${p.file}: breadcrumb item ${i + 1} is incomplete`);
            }
          });
        }
        walk(n, label);
      }
    }
    summary.push(`${p.file.padEnd(38)} ${p.graphs.length ? `${nodes} nodes` : "no JSON-LD"}`);
  }
  return { ok: errors.length === 0, errors, summary };
}

if (process.argv[1] && path.resolve(process.argv[1]) === fileURLToPath(import.meta.url)) {
  const { ok, errors, summary } = await validateJsonLd(process.argv[2] || "dist");
  console.log(summary.join("\n"));
  if (!ok) {
    console.error("\nJSON-LD errors:\n" + errors.map((e) => "  - " + e).join("\n"));
    process.exit(1);
  }
  console.log("\nJSON-LD: all pages valid");
}
