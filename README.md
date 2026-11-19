# Radiant Vista website

Static, pre-rendered React site for https://hotelradiantvista.com.

## How it works

- `src/routes.js` is the single route config: path, title, meta description, OG/Twitter, JSON-LD graph,
  breadcrumbs and the page component. Head tags are never written by hand.
- `build.mjs` renders every route with `react-dom/server` into `dist/<route>/index.html` (plus `dist/404.html`).
  The browser bundle hydrates the same components with `hydrateRoot`.
- Business facts (NAP, phones, links) live in `src/data/site.js`. Shared copy (FAQ, answer summary, nearby places)
  lives in `src/data/content.js` and feeds both the visible page and the JSON-LD.
- `public/` is copied into `dist/` as-is (`.htaccess`, `robots.txt`, `llms.txt`, verification files).
- Only images referenced by the output are copied from `images/` into `dist/images/`.

## Commands

```bash
npm install
npm run build        # build dist/ and run the parity check (server HTML vs hydrated DOM)
npm run build:fast   # build without the check
npm run serve        # preview dist/ at http://127.0.0.1:4173 (Apache-like 404s and slash redirects)
```

The parity check needs Google Chrome installed (it uses `playwright-core` with the system Chrome). It fails the
build if any route has more or fewer than one `<h1>`, if headings or visible text differ between the server HTML
and the hydrated DOM, or if React reports a hydration mismatch.

## Deploying

cPanel only copies files. Run `npm run build`, commit `dist/`, then push; `.cpanel.yml` copies `dist/.` into
`public_html`.
