// JSON-LD node builders. Routes compose these into their @graph.
// Every node goes through clean(): TODO facts (src/data/facts.js) are dropped, never published.
import { ADDRESS, EMAIL, PHONES, RESAVENUE_URL, SITE_URL, SOCIAL } from "../data/site";
import {
  BAR_FACTS,
  DINING_FACTS,
  HALL_FACTS,
  HOTEL_FACTS,
  ROOM_FACTS,
  clean,
  isTodo,
  known,
} from "../data/facts";
import { HOTEL_DESCRIPTION } from "../data/content";
import { stableImage } from "../lib/img";

export const abs = (p) => (p.startsWith("http") ? p : SITE_URL + p);
const img = (src) => abs(stableImage(src));

export const HOTEL_ID = `${SITE_URL}/#hotel`;
export const WEBSITE_ID = `${SITE_URL}/#website`;
export const RESTAURANT_ID = `${SITE_URL}/dining/#restaurant`;
export const BAR_ID = `${SITE_URL}/bar/#bar`;
export const VENUE_ID = `${SITE_URL}/banquets/#venue`;
export const HALL_IDS = { galaVista1: `${SITE_URL}/banquets/#gala-vista-1`, galaVista2: `${SITE_URL}/banquets/#gala-vista-2` };

export const postalAddress = () => ({ "@type": "PostalAddress", ...ADDRESS });
const feature = (name) => ({ "@type": "LocationFeatureSpecification", name, value: true });
const ref = (id) => ({ "@id": id });

// [{ days: ["Monday"], opens: "07:00", closes: "23:00" }] -> OpeningHoursSpecification[]
const openingHours = (spec) =>
  isTodo(spec)
    ? spec
    : spec.map((s) => ({ "@type": "OpeningHoursSpecification", dayOfWeek: s.days, opens: s.opens, closes: s.closes }));

export const HOTEL_IMAGES = [
  "/images/radiant-vista-hotel-exterior-night.jpg",
  "/images/hotel-facade-night-radiant-vista-hubballi.webp",
  "/images/radiant-vista-hotel-exterior-day-hubballi.webp",
  "/images/reception-front-desk-radiant-vista.webp",
  "/images/hotel-lobby-atrium-radiant-vista.webp",
];

export const hotelNode = () =>
  clean({
    "@type": "Hotel",
    "@id": HOTEL_ID,
    name: "Radiant Vista",
    alternateName: ["Hotel Radiant Vista", "Radiant Vista Hubballi", "Radiant Vista Hubli"],
    url: `${SITE_URL}/`,
    logo: abs("/images/logo.png"),
    image: HOTEL_IMAGES.map(img),
    description: HOTEL_DESCRIPTION,
    telephone: PHONES.primary.tel,
    email: EMAIL,
    priceRange: "₹₹₹",
    address: postalAddress(),
    geo: { "@type": "GeoCoordinates", latitude: HOTEL_FACTS.geo.latitude, longitude: HOTEL_FACTS.geo.longitude },
    hasMap: HOTEL_FACTS.hasMap,
    sameAs: [
      SOCIAL.instagram,
      SOCIAL.youtube,
      HOTEL_FACTS.facebook,
      HOTEL_FACTS.googleBusinessProfile,
      ...(Array.isArray(HOTEL_FACTS.otaListings) ? HOTEL_FACTS.otaListings : [HOTEL_FACTS.otaListings]),
    ],
    checkinTime: HOTEL_FACTS.checkinTime,
    checkoutTime: HOTEL_FACTS.checkoutTime,
    numberOfRooms: HOTEL_FACTS.numberOfRooms,
    petsAllowed: HOTEL_FACTS.petsAllowed,
    paymentAccepted: HOTEL_FACTS.paymentAccepted,
    currenciesAccepted: HOTEL_FACTS.currenciesAccepted,
    contactPoint: [
      { "@type": "ContactPoint", telephone: PHONES.reservations.tel, contactType: "reservations", areaServed: "IN", availableLanguage: ["en"] },
      { "@type": "ContactPoint", telephone: PHONES.primary.tel, contactType: "customer service", areaServed: "IN" },
    ],
    areaServed: ["Hubballi", "Dharwad", "Hubballi-Dharwad", "Karnataka"],
    containsPlace: [ref(RESTAURANT_ID), ref(BAR_ID), ref(VENUE_ID)],
    amenityFeature: [
      "Brick and Brew Restaurant",
      "Breeze Point Rooftop Bar",
      "Gala Vista Banquet Halls",
      "Business Center",
      "Travel Desk",
      "Basement Parking",
      "24-hour Front Desk",
      "CCTV Security",
      "Free Wi-Fi",
    ].map(feature),
  });

export const restaurantNode = () =>
  clean({
    "@type": "Restaurant",
    "@id": RESTAURANT_ID,
    name: "Brick and Brew",
    alternateName: ["Brick and Brew Hubballi", "Brick and Brew Restaurant"],
    description:
      "Brick and Brew is the restaurant at Radiant Vista on Gokul Road, Hubballi, serving nostalgic Indian food favourites with a modern twist to hotel guests and visitors.",
    url: abs("/dining/"),
    logo: abs("/images/brick-and-brew-logo.png"),
    image: [
      "/images/brick-and-brew-woven-lantern-dining.webp",
      "/images/brick-and-brew-arched-dining-room.webp",
      "/images/brick-and-brew-restaurant-dining-space.webp",
    ].map(img),
    telephone: PHONES.primary.tel,
    address: postalAddress(),
    servesCuisine: DINING_FACTS.servesCuisine,
    menu: DINING_FACTS.menuUrl,
    acceptsReservations: DINING_FACTS.acceptsReservations,
    openingHoursSpecification: openingHours(DINING_FACTS.openingHours),
    containedInPlace: ref(HOTEL_ID),
  });

export const barNode = () =>
  clean({
    "@type": "BarOrPub",
    "@id": BAR_ID,
    name: "Breeze Point",
    alternateName: ["Breeze Point Rooftop Bar", "Breeze Point Hubballi"],
    description:
      "Breeze Point is the open-roof rooftop bar and restaurant at Radiant Vista on Gokul Road, Hubballi, with curated cocktails, savoury dishes and views over the city.",
    url: abs("/bar/"),
    image: ["/images/breeze-point-open-air-rooftop-terrace.webp", "/images/breeze-point-aerial-rooftop-dining.webp"].map(img),
    telephone: PHONES.primary.tel,
    address: postalAddress(),
    servesCuisine: BAR_FACTS.servesCuisine,
    openingHoursSpecification: openingHours(BAR_FACTS.openingHours),
    containedInPlace: ref(HOTEL_ID),
  });

export const venueNodes = () => [
  clean({
    "@type": "EventVenue",
    "@id": VENUE_ID,
    name: "Gala Vista",
    alternateName: ["Gala Vista Banquet Halls", "Gala Vista Hubballi"],
    description:
      "Gala Vista is the banquet and conference venue at Radiant Vista on Gokul Road, Hubballi, with two halls: Gala Vista I for weddings and receptions, and Gala Vista II for conferences and meetings.",
    url: abs("/banquets/"),
    logo: abs("/images/gala-vista-logo.png"),
    image: ["/images/gala-vista-banquet-hall-stage.webp", "/images/gala-vista-banquet-round-table-setup.webp"].map(img),
    telephone: PHONES.primary.tel,
    address: postalAddress(),
    containedInPlace: ref(HOTEL_ID),
    containsPlace: [ref(HALL_IDS.galaVista1), ref(HALL_IDS.galaVista2)],
  }),
  clean({
    "@type": "EventVenue",
    "@id": HALL_IDS.galaVista1,
    name: "Gala Vista I (Grand Banquet Hall)",
    description: "Banquet hall at Radiant Vista, Hubballi, for weddings, receptions, engagements and family celebrations.",
    url: abs("/banquets/weddings/"),
    image: img("/images/gala-vista-banquet-round-table-setup.webp"),
    maximumAttendeeCapacity: HALL_FACTS.galaVista1.theatre,
    address: postalAddress(),
    containedInPlace: ref(VENUE_ID),
  }),
  clean({
    "@type": "EventVenue",
    "@id": HALL_IDS.galaVista2,
    name: "Gala Vista II (Conference & Event Space)",
    description: "Conference and event space at Radiant Vista, Hubballi, for seminars, corporate meetings, training and presentations.",
    url: abs("/banquets/conferences/"),
    image: img("/images/gala-vista-conference-hall-theatre-seating.webp"),
    maximumAttendeeCapacity: HALL_FACTS.galaVista2.theatre,
    address: postalAddress(),
    containedInPlace: ref(VENUE_ID),
  }),
];

export const websiteNode = () => ({
  "@type": "WebSite",
  "@id": WEBSITE_ID,
  url: `${SITE_URL}/`,
  name: "Radiant Vista",
  inLanguage: "en-IN",
  publisher: ref(HOTEL_ID),
});

export const webPageNode = ({ type = "WebPage", route, name, description, about = HOTEL_ID, speakable }) =>
  clean({
    "@type": type,
    "@id": `${abs(route.path)}#webpage`,
    url: abs(route.path),
    name: name || route.title,
    description: description || route.description,
    isPartOf: ref(WEBSITE_ID),
    about: ref(about),
    inLanguage: "en-IN",
    dateModified: route.lastmod,
    primaryImageOfPage: route.og ? { "@type": "ImageObject", url: img(route.og.image) } : undefined,
    breadcrumb: route.breadcrumbs ? ref(`${abs(route.path)}#breadcrumb`) : undefined,
    speakable: speakable ? { "@type": "SpeakableSpecification", cssSelector: speakable } : undefined,
  });

// FAQPage built from the same array the visible FAQ section renders.
export const faqNode = ({ route, faqs }) => ({
  "@type": "FAQPage",
  "@id": `${abs(route.path)}#faq-schema`,
  mainEntity: faqs.map(({ q, a }) => ({
    "@type": "Question",
    name: q,
    acceptedAnswer: { "@type": "Answer", text: a },
  })),
});

export const breadcrumbNode = ({ path, items }) => ({
  "@type": "BreadcrumbList",
  "@id": `${abs(path)}#breadcrumb`,
  itemListElement: items.map((item, i) => ({
    "@type": "ListItem",
    position: i + 1,
    name: item.name,
    item: abs(item.path),
  })),
});

// HotelRoom nodes from the room data + ROOM_FACTS (size, bed, occupancy, price when known).
export const hotelRoomNode = (room) => {
  const f = ROOM_FACTS[room.id] || {};
  return clean({
    "@type": "HotelRoom",
    "@id": `${SITE_URL}/rooms/#${room.id}`,
    name: room.title,
    description: room.description,
    image: room.images.slice(0, 3).map(img),
    amenityFeature: room.amenityNames.map(feature),
    floorSize: known(f.sizeSqft) ? { "@type": "QuantitativeValue", value: f.sizeSqft, unitCode: "FTK" } : undefined,
    bed: known(f.bed) ? { "@type": "BedDetails", typeOfBed: f.bed } : undefined,
    occupancy: known(f.maxOccupancy) ? { "@type": "QuantitativeValue", maxValue: f.maxOccupancy } : undefined,
    containedInPlace: ref(HOTEL_ID),
    offers: known(f.fromPriceINR)
      ? { "@type": "Offer", price: f.fromPriceINR, priceCurrency: "INR", url: RESAVENUE_URL, availability: "https://schema.org/InStock" }
      : undefined,
  });
};

export const touristAttractionNode = (place, i) =>
  clean({
    "@type": "TouristAttraction",
    "@id": `${SITE_URL}/hubballi-guide/#place-${i + 1}`,
    name: place.name,
    description: place.description,
    address: { "@type": "PostalAddress", addressLocality: "Hubballi", addressRegion: "Karnataka", addressCountry: "IN" },
  });
