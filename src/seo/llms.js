// /llms.txt fact sheet, generated from the same data as the pages and JSON-LD.
// Unconfirmed facts (TODO markers in data/facts.js) are never stated; they read "on request".
import { ADDRESS_LINE, EMAIL, PHONES, RESAVENUE_URL, SITE_URL, SOCIAL, WA_PHONE } from "../data/site";
import { BAR_FACTS, DINING_FACTS, HALL_FACTS, HOTEL_FACTS, ROOM_FACTS, known } from "../data/facts";
import { HALLS, HOTEL_DESCRIPTION, NEARBY_PLACES, ROOMS, placeDistance } from "../data/content";
import { FACILITIES } from "../components/FacilitiesSection";

const or = (v, fallback = "on request (ask reservations)") => (known(v) ? String(v) : fallback);
const hours = (spec) =>
  known(spec) ? spec.map((s) => `${s.days.join(", ")} ${s.opens}-${s.closes}`).join("; ") : "please confirm with the hotel";

export function buildLlmsTxt(routes) {
  const pages = routes.filter((r) => !r.noindex);
  const lines = [];
  const add = (...l) => lines.push(...l);

  add("# Radiant Vista", "", `> ${HOTEL_DESCRIPTION}`, "");
  add(
    "## Key facts",
    "- Name: Radiant Vista (business hotel)",
    `- Address: ${ADDRESS_LINE}, India`,
    "- City: Hubballi (also spelled Hubli), Hubballi-Dharwad, Karnataka",
    `- Front desk phone: ${PHONES.primary.display} (24 hours)`,
    `- Reservations and WhatsApp: ${PHONES.reservations.display} (https://wa.me/${WA_PHONE})`,
    `- Second front desk line: ${PHONES.secondary.display}`,
    `- Email: ${EMAIL}`,
    `- Website: ${SITE_URL}/`,
    `- Book online: ${RESAVENUE_URL}`,
    `- Check-in time: ${or(HOTEL_FACTS.checkinTime, "confirmed at booking")}`,
    `- Check-out time: ${or(HOTEL_FACTS.checkoutTime, "confirmed at booking")}`,
    `- Number of rooms: ${or(HOTEL_FACTS.numberOfRooms)}`,
    `- Payment accepted: ${or(HOTEL_FACTS.paymentAccepted)}`,
    `- Currency: ${HOTEL_FACTS.currenciesAccepted}`,
    `- Pets: ${or(HOTEL_FACTS.petsAllowed)}`,
    `- Instagram: ${SOCIAL.instagram}`,
    `- YouTube: ${SOCIAL.youtube}`,
    ""
  );

  add("## Rooms");
  for (const r of ROOMS) {
    const f = ROOM_FACTS[r.id] || {};
    add(
      `### ${r.title}`,
      r.description,
      `- Amenities: ${r.amenityNames.join(", ")}`,
      `- Size: ${known(f.sizeSqft) ? `${f.sizeSqft} sq ft` : "on request"}`,
      `- Bed: ${or(f.bed, "on request")}`,
      `- Maximum guests: ${or(f.maxOccupancy, "on request")}`,
      `- From price: ${known(f.fromPriceINR) ? `INR ${f.fromPriceINR} per night` : "see the online booking engine"}`,
      `- Details: ${SITE_URL}/rooms/#${r.id}`,
      ""
    );
  }

  add(
    "## Policies",
    `- ID at check-in: ${or(HOTEL_FACTS.idPolicy, "valid government-issued photo ID for every adult guest; ask reservations which documents are accepted")}`,
    `- Early check-in / late check-out: ${or(HOTEL_FACTS.earlyCheckin, "on request, subject to confirmation by reservations")}`,
    `- Breakfast: ${or(HOTEL_FACTS.breakfast)}`,
    `- Airport pickup: ${or(HOTEL_FACTS.airportPickup, "ask the travel desk via reservations")}`,
    `- GST invoices: ${or(HOTEL_FACTS.gstInvoices, "share company name and GSTIN with reservations when booking")}`,
    `- Cancellation policy: ${SITE_URL}/cancellation-policy/`,
    ""
  );

  add(
    "## Dining: Brick and Brew (restaurant)",
    "In-house restaurant serving nostalgic Indian favourites with a modern twist (butter chicken, gourmet momos, home-style dal), with retro Bollywood music. Open to hotel guests and visitors.",
    `- Cuisine: ${or(DINING_FACTS.servesCuisine)}`,
    `- Opening hours: ${hours(DINING_FACTS.openingHours)}`,
    `- Reservations: WhatsApp ${PHONES.reservations.display}`,
    `- Page: ${SITE_URL}/dining/`,
    "",
    "## Rooftop bar: Breeze Point",
    "Open-roof rooftop bar and restaurant with curated cocktails, savoury bites and views over the city. Separate areas for quiet dinners and groups.",
    `- Opening hours: ${hours(BAR_FACTS.openingHours)}`,
    "- Alcohol: served; legal drinking age in Karnataka is 21",
    `- Page: ${SITE_URL}/bar/`,
    ""
  );

  add("## Events: Gala Vista banquet halls");
  for (const h of HALLS) {
    const f = HALL_FACTS[h.id] || {};
    add(
      `### ${h.name}: ${h.label}`,
      `- Best for: ${h.bestFor}`,
      `- Capacity (theatre / round tables / floating): ${[f.theatre, f.roundTable, f.floating].every(known) ? `${f.theatre} / ${f.roundTable} / ${f.floating}` : "on request"}`,
      `- Area: ${known(f.areaSqft) ? `${f.areaSqft} sq ft` : "on request"}`,
      `- Page: ${SITE_URL}${h.path}`,
      ""
    );
  }
  add(
    `- Per-plate price: ${known(HALL_FACTS.perPlateFromINR) ? `from INR ${HALL_FACTS.perPlateFromINR}` : "quoted per event"}`,
    "- Catering: on-site catering and banquet management",
    `- Enquiries: WhatsApp ${PHONES.reservations.display} or ${EMAIL}`,
    ""
  );

  add("## Facilities", ...FACILITIES.map((f) => `- ${f.title}: ${f.detail}`), "");

  add("## Location and distances");
  for (const key of ["airport", "railway", "busStand"]) {
    const p = { airport: "Hubballi Airport", railway: "Hubballi Junction railway station", busStand: "Hubballi new bus stand" }[key];
    add(`- ${p}: ${placeDistance(key) || "short drive (exact distance on request)"}`);
  }
  add("", "## Nearby places", ...NEARBY_PLACES.map((p) => `- ${p.name}: ${p.description}${placeDistance(p.key) ? ` (${placeDistance(p.key)})` : ""}`), "");

  add("## Pages", ...pages.map((r) => `- [${r.title}](${SITE_URL}${r.path}): ${r.description}`));
  add(`- [Full text of every page](${SITE_URL}/llms-full.txt)`, `- [Sitemap](${SITE_URL}/sitemap.xml)`, "");
  return lines.join("\n");
}
