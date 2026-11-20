# CSP and external domains (2026-11-20)

CSP tested (from dist/.htaccess):

```
default-src 'self';
script-src 'self' 'unsafe-inline' https://www.googletagmanager.com;
style-src 'self' 'unsafe-inline';
font-src 'self' data:;
img-src 'self' data: https://hotelradiantvista.com https://www.transparenttextures.com https://*.googleapis.com https://*.gstatic.com https://www.googletagmanager.com https://*.google-analytics.com https://*.analytics.google.com;
frame-src 'self' https://www.google.com https://bookings.resavenue.com;
connect-src 'self' https://bookings.resavenue.com https://www.googletagmanager.com https://*.google-analytics.com https://*.analytics.google.com;
form-action 'self';
base-uri 'self';
object-src 'none'
```

**CSP violations: 0**

## External hosts loaded by our pages (main document)

| Host | Pages |
|---|---|
| www.transparenttextures.com | / |

## Loaded inside the Google Maps iframe (Google's own CSP applies, not ours)

- maps.googleapis.com
- maps.gstatic.com
- www.google.com

## External links and embeds (navigation targets; CSP does not restrict new-tab links)

| Host | Pages |
|---|---|
| bookings.resavenue.com | 17 pages |
| dishanwebwing.com | 17 pages |
| wa.me | 17 pages |
| www.facebook.com | 17 pages |
| www.google.com | 3 pages |
| www.instagram.com | 17 pages |
| www.youtube.com | 17 pages |

## Per page

| Page | External hosts (main document) | CSP violations |
|---|---|---|
| / | www.transparenttextures.com | 0 |
| /rooms/ | none | 0 |
| /dining/ | none | 0 |
| /bar/ | none | 0 |
| /banquets/ | none | 0 |
| /gallery/ | none | 0 |
| /about/ | none | 0 |
| /contact/ | none | 0 |
| /hotel-near-hubballi-airport/ | none | 0 |
| /corporate-stays/ | none | 0 |
| /banquets/weddings/ | none | 0 |
| /banquets/conferences/ | none | 0 |
| /hubballi-guide/ | none | 0 |
| /privacy-policy/ | none | 0 |
| /terms/ | none | 0 |
| /cancellation-policy/ | none | 0 |
| /this-page-does-not-exist-xyz/ | none | 0 |
