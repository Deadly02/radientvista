// Business facts that are NOT yet confirmed by the hotel are TODO(...) markers.
// - JSON-LD builders drop any property whose value is a TODO marker.
// - Visible components hide table columns / sentences that depend on a TODO.
// - build.mjs lists every remaining marker in SEO-TODO.md.
// To publish a fact, replace TODO("...") with the real value and rebuild.

export const TODO = (label) => ({ __todo: label });
export const isTodo = (v) => !!(v && typeof v === "object" && "__todo" in v);
export const known = (v) => v !== undefined && v !== null && !isTodo(v);

export const HOTEL_FACTS = {
  geo: {
    latitude: TODO("Hotel latitude (copy from the Google Business Profile pin)"),
    longitude: TODO("Hotel longitude (copy from the Google Business Profile pin)"),
  },
  hasMap: TODO("Google Maps URL of the hotel's Google Business Profile (https://maps.google.com/?cid=...)"),
  mapEmbedUrl: TODO("Google Maps embed URL for the Google Business Profile place (Share > Embed a map)"),
  facebook: TODO("Facebook page URL (the real page, not a /share/ link)"),
  googleBusinessProfile: TODO("Google Business Profile URL"),
  otaListings: TODO("OTA listing URLs (MakeMyTrip, Goibibo, Booking.com, Agoda, ixigo)"),
  checkinTime: TODO("Check-in time, 24h format, e.g. 12:00"),
  checkoutTime: TODO("Check-out time, 24h format, e.g. 11:00"),
  numberOfRooms: TODO("Total number of guest rooms"),
  petsAllowed: TODO("Are pets allowed? true / false"),
  paymentAccepted: TODO("Payment methods accepted, e.g. Cash, Credit Card, Debit Card, UPI"),
  currenciesAccepted: "INR",
  idPolicy: TODO("ID documents accepted at check-in (and any local-ID or couple policy)"),
  earlyCheckin: TODO("Early check-in / late check-out policy and charges"),
  breakfast: TODO("Is breakfast included in room rates? Where and when is it served?"),
  airportPickup: TODO("Airport pickup: available? charge?"),
  gstInvoices: TODO("Confirm GST invoices are issued for corporate stays (and the hotel GSTIN if it should be shown)"),
  gaMeasurementId: TODO("GA4 Measurement ID (G-XXXXXXXXXX)"),
  searchConsoleToken: TODO("Google Search Console HTML-tag verification token (content value)"),
};

// Distances from the hotel. km + minutes by road.
export const DISTANCES = {
  airport: { name: "Hubballi Airport", km: TODO("Road distance to Hubballi Airport (km)"), minutes: TODO("Drive time to Hubballi Airport (minutes)") },
  railway: { name: "Hubballi Junction railway station", km: TODO("Road distance to Hubballi Junction (km)"), minutes: TODO("Drive time to Hubballi Junction (minutes)") },
  busStand: { name: "Hubballi new bus stand (Gokul Road)", km: TODO("Road distance to the Gokul Road new bus stand (km)"), minutes: TODO("Drive time to the new bus stand (minutes)") },
  inorbit: { name: "Inorbit Mall Hubballi", km: TODO("Road distance to Inorbit Mall (km)"), minutes: TODO("Drive time to Inorbit Mall (minutes)") },
  unkal: { name: "Unkal Lake", km: TODO("Road distance to Unkal Lake (km)"), minutes: TODO("Drive time to Unkal Lake (minutes)") },
  nrupatunga: { name: "Nrupatunga Betta", km: TODO("Road distance to Nrupatunga Betta (km)"), minutes: TODO("Drive time to Nrupatunga Betta (minutes)") },
  siddharoodha: { name: "Siddharoodha Math", km: TODO("Road distance to Siddharoodha Math (km)"), minutes: TODO("Drive time to Siddharoodha Math (minutes)") },
  chandramouleshwara: { name: "Chandramouleshwara Temple", km: TODO("Road distance to Chandramouleshwara Temple (km)"), minutes: TODO("Drive time (minutes)") },
  glassHouse: { name: "Indira Gandhi Glass House Garden", km: TODO("Road distance to the Glass House Garden (km)"), minutes: TODO("Drive time (minutes)") },
};

export const ROOM_FACTS = {
  classic: {
    sizeSqft: TODO("Classic Room size (sq ft)"),
    bed: TODO("Classic Room bed type (legacy JSON-LD said 1 double bed: confirm)"),
    maxOccupancy: TODO("Classic Room max occupancy (legacy JSON-LD said 2: confirm)"),
    fromPriceINR: TODO("Classic Room starting price per night in INR (optional)"),
  },
  premium: {
    sizeSqft: TODO("Premium Room size (sq ft)"),
    bed: TODO("Premium Room bed type"),
    maxOccupancy: TODO("Premium Room max occupancy (legacy JSON-LD said 2: confirm)"),
    fromPriceINR: TODO("Premium Room starting price per night in INR (optional)"),
  },
  suite: {
    sizeSqft: TODO("Suite size (sq ft)"),
    bed: TODO("Suite bed type"),
    maxOccupancy: TODO("Suite max occupancy (legacy JSON-LD said 3: confirm)"),
    fromPriceINR: TODO("Suite starting price per night in INR (optional)"),
  },
};

export const HALL_FACTS = {
  galaVista1: {
    theatre: TODO("Gala Vista I capacity, theatre seating"),
    roundTable: TODO("Gala Vista I capacity, round tables"),
    floating: TODO("Gala Vista I capacity, floating / standing"),
    areaSqft: TODO("Gala Vista I area (sq ft)"),
  },
  galaVista2: {
    theatre: TODO("Gala Vista II capacity, theatre seating"),
    roundTable: TODO("Gala Vista II capacity, round tables"),
    floating: TODO("Gala Vista II capacity, floating / standing"),
    areaSqft: TODO("Gala Vista II area (sq ft)"),
  },
  perPlateFromINR: TODO("Banquet per-plate starting price in INR (optional)"),
};

// openingHoursSpecification entries: [{ days: ["Monday", ...], opens: "07:00", closes: "23:00" }]
export const DINING_FACTS = {
  servesCuisine: ["Indian"],
  menuUrl: TODO("Brick and Brew menu URL (PDF or page)"),
  openingHours: TODO("Brick and Brew opening hours per day"),
  acceptsReservations: true,
};

export const BAR_FACTS = {
  servesCuisine: TODO("Breeze Point cuisine / food style for schema (e.g. Indian, Bar snacks)"),
  openingHours: TODO("Breeze Point opening hours (the old static page said daily 5:30 PM-11:30 PM: confirm)"),
  minimumAge: TODO("Confirm Breeze Point serves alcohol and the minimum age for entry"),
};

export const LEGAL_FACTS = {
  privacyPolicy: TODO("Approve the Privacy Policy text (/privacy-policy/)"),
  terms: TODO("Approve the Terms of Use text (/terms/)"),
  cancellationPolicy: TODO("Supply the room and banquet cancellation policy (/cancellation-policy/)"),
  legalEntity: TODO("Registered legal name of the business that operates Radiant Vista"),
};

// All fact groups, for the TODO report.
export const ALL_FACTS = { HOTEL_FACTS, DISTANCES, ROOM_FACTS, HALL_FACTS, DINING_FACTS, BAR_FACTS, LEGAL_FACTS };

export const collectTodos = () => {
  const out = [];
  const walk = (prefix, v) => {
    if (isTodo(v)) out.push({ key: prefix, label: v.__todo });
    else if (v && typeof v === "object") for (const [k, x] of Object.entries(v)) walk(prefix ? `${prefix}.${k}` : k, x);
  };
  walk("", ALL_FACTS);
  return out;
};

// JSON-LD keywords that do not count as content: an object with only these is empty
// (e.g. {"@type": "GeoCoordinates"} once latitude and longitude are TODO). "@id" is kept,
// because {"@id": ...} on its own is a valid reference to another node.
const NON_CONTENT_KEYS = new Set(["@type", "@context"]);

// Removes TODO markers, undefined values, empty strings, empty arrays and objects that are
// left with nothing but @type, recursively (for JSON-LD output).
export const clean = (value) => {
  if (Array.isArray(value)) {
    const arr = value.map(clean).filter((x) => x !== undefined);
    return arr.length ? arr : undefined;
  }
  if (isTodo(value) || value === "") return undefined;
  if (value && typeof value === "object") {
    const entries = Object.entries(value)
      .map(([k, v]) => [k, clean(v)])
      .filter(([, v]) => v !== undefined);
    if (!entries.some(([k]) => !NON_CONTENT_KEYS.has(k))) return undefined;
    return Object.fromEntries(entries);
  }
  return value;
};

// "about 15 minutes (8 km)" or null when unknown.
export const distanceText = (d) => {
  if (!d || !known(d.km) || !known(d.minutes)) return null;
  return `about ${d.minutes} minutes by road (${d.km} km)`;
};
