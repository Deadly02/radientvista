# Crawl check (2026-11-19)

16 URLs crawled from / and sitemap.xml. 0 with issues, 0 broken internal links.

| URL | Status | H1 | Title | Desc | Canonical | Robots | Images | Issues |
|---|---|---|---|---|---|---|---|---|
| / | 200 | 1 | 54 | 147 | yes | index | 30 | OK |
| /rooms/ | 200 | 1 | 48 | 160 | yes | index | 11 | OK |
| /dining/ | 200 | 1 | 50 | 155 | yes | index | 5 | OK |
| /bar/ | 200 | 1 | 49 | 155 | yes | index | 3 | OK |
| /banquets/ | 200 | 1 | 49 | 148 | yes | index | 6 | OK |
| /gallery/ | 200 | 1 | 44 | 147 | yes | index | 17 | OK |
| /about/ | 200 | 1 | 60 | 158 | yes | index | 2 | OK |
| /contact/ | 200 | 1 | 53 | 150 | yes | index | 0 | OK |
| /hotel-near-hubballi-airport/ | 200 | 1 | 55 | 157 | yes | index | 0 | OK |
| /corporate-stays/ | 200 | 1 | 58 | 160 | yes | index | 0 | OK |
| /banquets/weddings/ | 200 | 1 | 55 | 152 | yes | index | 2 | OK |
| /banquets/conferences/ | 200 | 1 | 58 | 142 | yes | index | 2 | OK |
| /hubballi-guide/ | 200 | 1 | 57 | 156 | yes | index | 0 | OK |
| /privacy-policy/ | 200 | 1 | 39 | 152 | - | noindex | 0 | OK |
| /terms/ | 200 | 1 | 37 | 122 | - | noindex | 0 | OK |
| /cancellation-policy/ | 200 | 1 | 44 | 144 | - | noindex | 0 | OK |

## Error handling

- PASS /this-page-does-not-exist-xyz/ returns 404 with noindex page
- PASS /manifest.json returns 404 with noindex page
- PASS /rooms/xyz returns 404 with noindex page
- PASS /rooms 301 -> /rooms/ (local server; Apache rule verified by check:live)
- PASS /banquets/weddings 301 -> /banquets/weddings/ (local server; Apache rule verified by check:live)

## Internal links

All internal links resolve (200).
