## 2. Content to approve

- **Legal pages** (`/privacy-policy/`, `/terms/`, `/cancellation-policy/`) are drafts with bracketed
  "[To be confirmed by Radiant Vista: ...]" notes. They show a draft banner, are `noindex` and are left out of the sitemap until
  the matching `LEGAL_FACTS` entry in `src/data/facts.js` is set (text approved).
- **Claims removed from the old static HTML.** The previous hand-written pages (only seen by crawlers, never by visitors)
  stated these as facts. None could be verified, so they are not on the new site. Confirm any that are true and they can go back:
  - Rooms: "round-the-clock room service".
  - Brick and Brew: "regional Indian cuisine, continental dishes and chef specials" (old meta description).
  - Breeze Point: open daily 5:30 PM to 11:30 PM; elevator access from the lobby; complimentary parking for diners; mocktails;
    tandoori platters; covered lounge seating.
  - Gala Vista: chandelier lighting and a raised stage; climate control; theatre, round-table and U-shape layouts; event
    managers and technical staff; HD projection and screens; sound system with wireless microphones; catering by Brick and Brew
    chefs; pre-function foyer and dressing rooms; valet parking.
  - Old JSON-LD: Classic Room "1 double bed", maximum occupancy 2 / 2 / 3 (now `ROOM_FACTS` TODOs).
- **About page:** opening year, ownership/management names and a short founding story, if the client wants them shown.
- **Hero slide captions** ("Legendary Hospitality", "Luxury Redefined"...) are marketing lines kept from the old design.

## 3. Technical items that cannot be done in code

- **HTTP/2:** Apache only enables it in the server/vhost config (`Protocols h2 http/1.1`), not in `.htaccess`. Ask the host to
  enable it, or put Cloudflare (free plan) in front of the site, which also adds HTTP/3, Brotli and a CDN.
- **After every deploy:** run `npm run check:live`. It verifies the single-hop 301s (http, www, missing slash, `/index.html`),
  real 404s on unknown URLs and `text/html; charset=utf-8` on every page.
- **Contact form:** `public/contact.php` sends enquiries to reservations@hotelradiantvista.com with PHP `mail()`. After deploy,
  send a test enquiry. If it lands in spam, add SPF/DKIM for hotelradiantvista.com in cPanel (Email Deliverability). To use
  Web3Forms instead, change `FORM_ENDPOINT` in `src/data/site.js`.
- **GA4 and Search Console:** set `gaMeasurementId` and `searchConsoleToken` in `src/data/facts.js` and rebuild. Until then no
  analytics script or verification tag is output. The existing `google183e2376ba3269a0.html` file on the server still verifies
  Search Console; keep it.
- **Old files on the server:** `.cpanel.yml` copies but never deletes, so the old `assets/app-*.js`, `images/*.jpg` originals and
  `ChatGPT Image ...` files stay in `public_html`. Old image URLs 301 to the new names; the rest can be deleted in cPanel File
  Manager once the new site is live.
- **Images:** most photos are AI-generated renders. Replace them with real photography of the property (see section 4), then
  drop the new files into `images/` with descriptive names and rebuild; variants, sizes and OG crops are generated.
- **Google Maps:** the map uses raw coordinates until `HOTEL_FACTS.mapEmbedUrl` is set to the Business Profile embed.
- **Reviews:** a reviews section is ready to embed real Google reviews once the client chooses a widget or provides a Place ID;
  no reviews are written or faked on the site.

## 4. Not for code (owner / marketing tasks)

- Claim and optimise the Google Business Profile, upload real photos, post weekly, and run a steady review drive.
- Make NAP identical everywhere: name "Radiant Vista"; address "Plot No 04, S/No 106A, 107B, 108A & 109A, Gokul Road,
  Akshay Park, Hubballi, Karnataka 580030"; phone +91 836 200 2487; reservations +91 91871 95517. Fix it on MakeMyTrip,
  Goibibo, Booking.com, Agoda, ixigo (currently "Manjunath Nagar"), Justdial, Zomato, WedMeGood and WeddingWire.
- Replace AI-generated/rendered photos with real photography of the property.
- Build genuine local backlinks; ignore the existing spam backlink network (disavow only if a manual action appears).
- Verify Search Console and Bing Webmaster Tools, submit `https://hotelradiantvista.com/sitemap.xml`, and request indexing
  for the new pages after deploy.
- Monthly: check AI answers (ChatGPT, Perplexity, Gemini, Google AI Mode) for "business hotel Gokul Road Hubballi" and
  "rooftop bar Hubballi".
