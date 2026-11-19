# Radiant Vista website

Static, pre-rendered React site for https://hotelradiantvista.com.

## How it works

- `src/routes.jsx` is the single route config: path, title, meta description, OG/Twitter, JSON-LD graph,
  breadcrumbs and the page component. Head tags are never written by hand. New content pages are data in
  `src/content/pages.js`.
- `build.mjs` renders every route with `react-dom/server` into `dist/<route>/index.html` (plus `dist/404.html`).
  The browser bundle hydrates the same components with `hydrateRoot`.
- Business facts live in `src/data/site.js` (NAP, phones, links) and `src/data/facts.js` (everything not yet
  confirmed, as `TODO("...")` markers). TODO values are never shown or written into JSON-LD; the build lists them in
  `SEO-TODO.md`. Replace a marker with the real value and rebuild.
- Shared copy (FAQs, rooms, halls, nearby places) lives in `src/data/content.js` and feeds the visible pages,
  the JSON-LD and `llms.txt`.
- Images: put masters in `images/` with descriptive kebab-case names. The build writes 480/960/1280 WebP variants
  (max 120 KB), 1200x630 OG crops and a size manifest; components get `width`/`height`/`srcset` from it.
- `public/` is copied into `dist/` as-is (`.htaccess`, `robots.txt`, `contact.php`, verification files).

## Commands

```bash
npm install
npm run build            # build dist/ + JSON-LD validation + server-vs-hydrated parity check
npm run build:fast       # build without the parity check
npm run serve            # preview dist/ at http://127.0.0.1:4173 (Apache-like 404s and slash redirects)
npm run check:crawl      # crawl dist/: status, one h1, title/description length, canonical, img alt/size, links
npm run test:form        # end-to-end test of the enquiry form (local mock of contact.php)
npm run validate:jsonld  # JSON-LD checks on every page
npm run lighthouse       # Lighthouse mobile on / and /rooms/ (median of 3)
npm run check:live       # after deploy: single-hop 301s, real 404s, charset on the live site
```

The checks need Google Chrome installed (`playwright-core` uses the system Chrome). The build fails if any route
does not have exactly one `<h1>`, if headings or visible text differ between the server HTML and the hydrated
DOM, if React reports a hydration mismatch, or if any JSON-LD is invalid.

## Deploying

cPanel only copies files. Run `npm run build`, commit `dist/`, then push; `.cpanel.yml` copies `dist/.` into
`public_html`. Then run `npm run check:live`.
