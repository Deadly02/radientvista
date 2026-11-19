// Single source of truth for business facts (NAP, phones, links).
// Anything shown on the site, in JSON-LD or in llms.txt should be read from here.

export const SITE_URL = "https://hotelradiantvista.com";
export const SITE_NAME = "Radiant Vista";

export const RESAVENUE_URL = "https://bookings.resavenue.com/engine-ibe/search?regCode=TXRX0322";

// WhatsApp number in wa.me format (reservations line).
export const WA_PHONE = "919187195517";

export const PHONES = {
  primary: { display: "+91 836 200 2487", tel: "+918362002487", label: "Front Desk" },
  reservations: { display: "+91 91871 95517", tel: "+919187195517", label: "Reservations" },
  secondary: { display: "+91 836 451 1339", tel: "+918364511339", label: "Front Desk" },
};

export const EMAIL = "reservations@hotelradiantvista.com";

export const ADDRESS = {
  streetAddress: "Plot No 04, S/No 106A, 107B, 108A & 109A, Gokul Road, Akshay Park",
  addressLocality: "Hubballi",
  addressRegion: "Karnataka",
  postalCode: "580030",
  addressCountry: "IN",
};

// One address string, used verbatim everywhere it is printed.
export const ADDRESS_LINE = "Plot No 04, S/No 106A, 107B, 108A & 109A, Gokul Road, Akshay Park, Hubballi, Karnataka 580030";

export const SOCIAL = {
  facebook: "https://www.facebook.com/share/19zCqFvENQ/",
  instagram: "https://www.instagram.com/radiantvistahubli/",
  youtube: "https://www.youtube.com/@RadiantVistaHubli",
};

export const waLink = (message) => `https://wa.me/${WA_PHONE}?text=${encodeURIComponent(message)}`;

export const WA_MESSAGES = {
  rooms:
    "Hello Radiant Vista Hotel, I would like to enquire about room reservations and accommodation at Radiant Vista. Please share the available details. Thank you.",
  dining:
    "Hello Radiant Vista Hotel, I would like to enquire about dining at Brick and Brew. Please share the available details. Thank you.",
  bar: "Hello Radiant Vista Hotel, I would like to enquire about Breeze Point Rooftop Bar and Restaurant. Please share the available details. Thank you.",
  banquets:
    "Hello Radiant Vista Hotel, I would like to enquire about Gala Vista Banquets and Conferencing. My event type is [event type], and my preferred event date is [date]. Please share the available packages and details.",
  general: "Hi, I want to book a room at Radiant Vista",
};

// Header navigation. `hash` items point at sections on the home page.
export const NAV_ITEMS = [
  { label: "Home", href: "/", hash: "#home" },
  { label: "About", href: "/", hash: "#about" },
  { label: "Rooms", href: "/rooms/" },
  { label: "Dining", href: "/dining/" },
  { label: "Bar", href: "/bar/" },
  { label: "Banquets", href: "/banquets/" },
  { label: "Facilities", href: "/", hash: "#facilities" },
  { label: "Gallery", href: "/gallery/" },
  { label: "Location", href: "/", hash: "#location" },
  { label: "Contact", href: "/", hash: "#contact" },
];

// Build-time constants injected by esbuild (identical in server and client bundles,
// so they are safe to use during render).
export const BUILD_YEAR = typeof __BUILD_YEAR__ !== "undefined" ? __BUILD_YEAR__ : "2026";
export const BUILD_DATE = typeof __BUILD_DATE__ !== "undefined" ? __BUILD_DATE__ : "2026-01-01";
