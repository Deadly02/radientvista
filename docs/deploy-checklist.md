# Deploy checklist (seo-fixes → main)

Rollback point: tag `pre-seo-fixes` (commit 236b9b5). To roll back: in cPanel Git Version Control, deploy that
commit, or `git push origin pre-seo-fixes:main --force` and deploy again.

## 1. Deploy

cPanel → Git Version Control → Manage (radientvista) → Pull or Deploy:
1. **Update from Remote** (pulls `main` from GitHub).
2. **Deploy HEAD Commit** (runs `.cpanel.yml`: copies `dist/.` into `public_html`).

Then run `npm run check:live`.

## 2. Manual checks after deploy

- [ ] Home, Rooms, Banquets: **Book Now** opens the ResAvenue booking engine (regCode TXRX0322) in a new tab.
- [ ] **WhatsApp** links open wa.me/919187195517 with the right message: floating button, Dining, Bar, the banquet
      planner (message reads "My event type is: ___ / Preferred date: ___").
- [ ] **Map** loads on the home page (Location), /contact/ and /hotel-near-hubballi-airport/.
- [ ] **Form**: send a test enquiry from /contact/. It should arrive at reservations@hotelradiantvista.com from
      website@hotelradiantvista.com, and "Reply" should go to the email you typed. Check the spam folder too.
- [ ] `http://www.hotelradiantvista.com/rooms` → one 301 straight to `https://hotelradiantvista.com/rooms/`.
- [ ] An old image URL, e.g. `https://hotelradiantvista.com/images/abt1.jpg` → one 301 to
      `/images/radiant-vista-hotel-exterior-night.jpg`.
- [ ] A random URL, e.g. `/xyz-test/`, shows the branded "Page not found" page with status 404.
- [ ] Phone (tel:) links dial, and the email link opens a new message.

## 3. Server cleanup (delete in cPanel File Manager after the checks pass)

`.cpanel.yml` copies but never deletes, so these old files are still in `public_html`. None is used by the new site.
Old image URLs keep redirecting after deletion (the redirects do not depend on the files).
**Keep** `google183e2376ba3269a0.html`, `BingSiteAuth.xml`, `.well-known/`, `cgi-bin/` and anything not listed.

Folders (delete the whole folder):

- `public_html/images/bar/`
- `public_html/images/dining/`
- `public_html/images/gallery/`
- `public_html/images/hall/`
- `public_html/images/roomimage/`

Files in `public_html/assets/` (keep the new `app-xxxxxxxx.js` referenced by the pages and the `fonts/` folder):

- `public_html/assets/app-efe79a2d.js` (bundle from the first new-site deploy, replaced by app-2bd48414.js)
- `public_html/assets/app-98ff2c86.js`
- `public_html/assets/app-e078dab4.js`
- `public_html/assets/index-C1VnNDX7.js`
- `public_html/assets/styles-07db9887.css`
- `public_html/assets/styles-d09abf05.css`

Files in `public_html/images/` (top level; keep `logo.png`, `logo.svg` and every file with a new descriptive name):

- `public_html/images/1.jpg`
- `public_html/images/1_result.webp`
- `public_html/images/2.jpg`
- `public_html/images/2_result.webp`
- `public_html/images/3.jpg`
- `public_html/images/3_result.webp`
- `public_html/images/ChatGPT Image Oct 11, 2026, 03_02_41 PM_result.webp`
- `public_html/images/abt.jpg`
- `public_html/images/abt1.jpg`
- `public_html/images/abt1_result.webp`
- `public_html/images/brick&Brew.svg`
- `public_html/images/brick.png`
- `public_html/images/c1.jpg`
- `public_html/images/c1_result.webp`
- `public_html/images/c2.jpg`
- `public_html/images/c2_result.webp`
- `public_html/images/c3.jpg`
- `public_html/images/c3_result.webp`
- `public_html/images/c4.jpg`
- `public_html/images/c4_result.webp`
- `public_html/images/c5.jpg`
- `public_html/images/c5_result.webp`
- `public_html/images/classic.jpg`
- `public_html/images/classic1.jpg`
- `public_html/images/classic1_result.webp`
- `public_html/images/classic_result.webp`
- `public_html/images/g1.jpg`
- `public_html/images/g1_result.webp`
- `public_html/images/g2.jpg`
- `public_html/images/g3.jpg`
- `public_html/images/g3_result.webp`
- `public_html/images/g4.jpg`
- `public_html/images/g5.jpg`
- `public_html/images/g5_result.webp`
- `public_html/images/g6.jpg`
- `public_html/images/g6_result.webp`
- `public_html/images/gala.png`
- `public_html/images/premium.jpg`
- `public_html/images/premium_result.webp`
- `public_html/images/r.svg`
- `public_html/images/radiant-vista-about.png`
- `public_html/images/radiant-vista-about.webp`
- `public_html/images/suite.jpg`
- `public_html/images/suite1.jpg`
- `public_html/images/suite1_result.webp`
- `public_html/images/suite_result.webp`
