// JSON-LD node builders. Routes compose these into their @graph.
import { ADDRESS, EMAIL, PHONES, SITE_URL } from "../data/site";

export const abs = (p) => (p.startsWith("http") ? p : SITE_URL + p);
export const HOTEL_ID = `${SITE_URL}/#hotel`;
export const WEBSITE_ID = `${SITE_URL}/#website`;

export const postalAddress = () => ({ "@type": "PostalAddress", ...ADDRESS });

const feature = (name) => ({ "@type": "LocationFeatureSpecification", name, value: true });

// Full Hotel node (home page).
export const hotelNode = () => ({
  "@type": "Hotel",
  "@id": HOTEL_ID,
  name: "Radiant Vista",
  alternateName: [
    "Hotel Radiant Vista",
    "Radiant Vista Hubballi",
    "Radiant Vista Hubli",
    "Radiant Vista Hotel Hubballi",
    "Radiant Vista Hotel Hubli",
  ],
  url: `${SITE_URL}/`,
  logo: abs("/images/logo.png"),
  image: [abs("/images/abt1.jpg")],
  description:
    "Radiant Vista is a business and leisure hotel on Gokul Road, Akshay Park, Hubballi (Hubli), Karnataka. Features comfortable rooms and suites, the Brick and Brew restaurant, Breeze Point rooftop bar, Gala Vista banquet halls, and modern conference facilities.",
  telephone: PHONES.primary.tel,
  email: EMAIL,
  priceRange: "₹₹₹",
  address: postalAddress(),
  areaServed: ["Hubballi", "Hubli", "Dharwad", "Hubballi-Dharwad", "Karnataka"],
  containsPlace: [
    { "@id": `${SITE_URL}/#brick-and-brew` },
    { "@id": `${SITE_URL}/#breeze-point` },
    { "@id": `${SITE_URL}/#gala-vista` },
  ],
  amenityFeature: [
    "Brick and Brew Restaurant",
    "Breeze Point Rooftop Bar",
    "Gala Vista Banquet Halls",
    "Business Center & Conference Facilities",
    "Basement Parking",
    "24/7 Front Desk & CCTV Security",
  ].map(feature),
});

// Short Hotel node repeated on sub-pages so the page entity can point at it.
export const hotelStubNode = ({ alternateName, email } = {}) => ({
  "@type": "Hotel",
  "@id": HOTEL_ID,
  name: "Radiant Vista",
  ...(alternateName ? { alternateName } : {}),
  url: `${SITE_URL}/`,
  telephone: PHONES.primary.tel,
  ...(email ? { email: EMAIL } : {}),
  address: postalAddress(),
});

export const restaurantNode = ({ id, description, alternateName }) => ({
  "@type": "Restaurant",
  "@id": id,
  name: "Brick and Brew",
  alternateName,
  description,
  logo: abs("/images/brick.png"),
  image: abs("/images/brick.png"),
  url: abs("/dining/"),
  telephone: PHONES.primary.tel,
  address: postalAddress(),
  containedInPlace: { "@id": HOTEL_ID },
});

export const barNode = ({ id, type, description }) => ({
  "@type": type,
  "@id": id,
  name: "Breeze Point",
  alternateName: ["Breeze Point Hubballi", "Breeze Point Hubli", "Breeze Point Rooftop Bar", "Breeze Point Radiant Vista"],
  description,
  image: abs("/images/g6_result.webp"),
  url: abs("/bar/"),
  telephone: PHONES.primary.tel,
  address: postalAddress(),
  containedInPlace: { "@id": HOTEL_ID },
});

export const venueNode = ({ id, description, alternateName, logo }) => ({
  "@type": "EventVenue",
  "@id": id,
  name: "Gala Vista",
  alternateName,
  description,
  ...(logo ? { logo: abs("/images/gala.png") } : {}),
  image: abs("/images/g3_result.webp"),
  url: abs("/banquets/"),
  telephone: PHONES.primary.tel,
  address: postalAddress(),
  containedInPlace: { "@id": HOTEL_ID },
});

export const websiteNode = () => ({
  "@type": "WebSite",
  "@id": WEBSITE_ID,
  url: `${SITE_URL}/`,
  name: "Radiant Vista",
  inLanguage: "en-IN",
  publisher: { "@id": HOTEL_ID },
});

export const webPageNode = ({ type = "WebPage", path, name, description, about = HOTEL_ID, speakable }) => ({
  "@type": type,
  "@id": `${abs(path)}#webpage`,
  url: abs(path),
  name,
  ...(description ? { description } : {}),
  isPartOf: { "@id": WEBSITE_ID },
  about: { "@id": about },
  inLanguage: "en-IN",
  ...(speakable ? { speakable: { "@type": "SpeakableSpecification", cssSelector: speakable } } : {}),
});

// FAQPage built from the same array the visible FAQ section renders.
export const faqNode = ({ path, faqs }) => ({
  "@type": "FAQPage",
  "@id": `${abs(path)}#faq-schema`,
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

export const hotelRoomNode = ({ name, description, image, maxOccupancy, bed, features }) => ({
  "@type": "HotelRoom",
  name,
  description,
  image: abs(image),
  occupancy: { "@type": "QuantitativeValue", maxValue: maxOccupancy },
  ...(bed ? { bed: { "@type": "BedDetails", ...bed } } : {}),
  amenityFeature: features.map(feature),
});
