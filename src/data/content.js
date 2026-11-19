// Copy that is shared between visible components and JSON-LD / llms.txt.
// Edit text here, never in two places.
import { EMAIL, PHONES } from "./site";

export const ANSWER_SUMMARY =
  "Radiant Vista is a premium business and leisure hotel on Gokul Road, Akshay Park, Hubballi (Hubli), Karnataka. " +
  "The hotel features designer rooms and suites, the vibrant Brick and Brew restaurant, Breeze Point rooftop bar with " +
  "panoramic city views, Gala Vista banquet halls and event spaces, and modern business conferencing facilities.";

// Home page FAQ. Rendered in <FaqSection id="faq"> and as the FAQPage JSON-LD on "/".
export const HOME_FAQS = [
  {
    q: "Where is Radiant Vista hotel located in Hubballi?",
    a: "Radiant Vista is located on Gokul Road, Akshay Park, Hubballi (also spelled Hubli), Karnataka 580030, India, near Hubballi Airport and Inorbit Mall Hubballi.",
  },
  {
    q: "Is Hubballi the same city as Hubli?",
    a: "Yes. Hubballi is the official Kannada name and Hubli is the common Anglicized spelling of the same city in northern Karnataka, which forms the twin city Hubballi-Dharwad.",
  },
  {
    q: "Does Radiant Vista have an on-site restaurant?",
    a: "Yes. Brick and Brew is the restaurant at Radiant Vista on Gokul Road, Hubballi, serving nostalgic food favourites with a modern twist in a vibrant setting.",
  },
  {
    q: "Is there a rooftop bar at Radiant Vista in Hubballi?",
    a: "Yes. Breeze Point is the rooftop bar and restaurant at Radiant Vista, offering an open-roof ambience, curated cocktails, savoury dishes, and panoramic skyline views.",
  },
  {
    q: "Can I book a banquet hall for a wedding or corporate event at Radiant Vista?",
    a: `Yes. Gala Vista offers two dedicated event spaces: Gala Vista I (Grand Banquet Hall) for weddings and receptions, and Gala Vista II (Conference & Event Space) for corporate conferences, seminars, and business meetings. Call ${PHONES.primary.display} or email ${EMAIL} to check dates.`,
  },
  {
    q: "What room categories are available at Radiant Vista?",
    a: "Radiant Vista offers Classic Rooms, Premium Rooms, and Suites, all equipped with individually controlled air conditioning, 42-inch Smart TVs, and business amenities.",
  },
  {
    q: "Is Radiant Vista suitable for business travellers visiting Hubballi?",
    a: "Yes. Radiant Vista is positioned as a business hotel on Gokul Road near Hubballi Airport, featuring a business center, meeting spaces, high-speed Wi-Fi, and 24/7 front desk services.",
  },
  {
    q: "How do I book a room or reserve a table at Radiant Vista?",
    a: `Call reservations at ${PHONES.reservations.display}, call the front desk at ${PHONES.primary.display}, email ${EMAIL}, or book online through hotelradiantvista.com.`,
  },
];

// Rooms page FAQ. Rendered on /rooms/ and as the FAQPage JSON-LD there.
export const ROOMS_FAQS = [
  {
    q: "What room categories are available at Radiant Vista?",
    a: "Radiant Vista offers three verified room categories: Classic Room, Premium Room, and luxury Suite. All categories include individually controlled air conditioning and 42-inch Smart TVs.",
  },
  {
    q: "What amenities are included in the rooms?",
    a: "Standard amenities include individually controlled AC, 42-inch Smart TV, hot water kettle, complimentary high-speed Wi-Fi, work desks, and CCTV secure premises. Premium Rooms and Suites additionally feature mini fridges and safe deposit lockers.",
  },
  {
    q: "Is Radiant Vista suitable for business travellers visiting Hubballi?",
    a: "Yes. Radiant Vista is positioned as a business hotel on Gokul Road near Hubballi Airport, featuring a business center, meeting facilities, high-speed Wi-Fi, executive work desks, and 24/7 front desk services.",
  },
  {
    q: "How do I book a room at Radiant Vista?",
    a: `You can book directly online via our verified ResAvenue booking engine, contact reservations on WhatsApp at ${PHONES.reservations.display}, or call ${PHONES.primary.display}.`,
  },
];

// Nearby places (home #nearby-places, later llms.txt and the Hubballi guide).
export const NEARBY_PLACES = [
  {
    name: "Inorbit Mall Hubballi",
    description:
      "Hubballi’s leading retail, dining, and family entertainment center, just minutes from the hotel (convenient for guests looking for a hotel near Inorbit Mall Hubballi or dining near Inorbit Mall).",
  },
  {
    name: "Hubballi Airport (Gokul Road)",
    description:
      "The city's primary domestic airport, situated on the same Gokul Road corridor for effortless transit (ideal for travelers needing a hotel near Hubballi Airport).",
  },
  {
    name: "Hubballi Junction (Railway Station)",
    description:
      "The central railway terminal for the South Western Railway zone, connecting Hubballi-Dharwad to major cities across India (perfect for visitors looking for a hotel near Hubballi Junction).",
  },
  {
    name: "Unkal Lake",
    description: "A scenic 110-year-old recreational lake with lush parklands, boating facilities, and a grand statue of Swami Vivekananda.",
  },
  {
    name: "Chandramouleshwara Temple",
    description: "An extraordinary 11th-century Western Chalukya architectural monument featuring intricate black granite stone carvings.",
  },
  {
    name: "Nrupatunga Betta",
    description: "A popular elevated viewpoint offering sweeping vistas of the Hubballi-Dharwad cityscape, sunrise, and sunset.",
  },
  {
    name: "Siddharoodha Math",
    description:
      "A historic spiritual institution and ashram founded in honor of Sri Siddharoodha Swami, attracting devotees and cultural travelers.",
  },
  {
    name: "Indira Gandhi Glass House Garden",
    description:
      "A public horticultural park featuring a glass house modelled after London's Crystal Palace, hosting city flower shows and recreational walks.",
  },
];
