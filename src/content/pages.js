// New content pages, rendered by components/ContentPage.jsx. Route metadata lives with the copy
// so each page is defined in one place; routes.js turns these into routes.
import { ADDRESS_LINE, EMAIL, PHONES, RESAVENUE_URL, WA_MESSAGES, waLink } from "../data/site";
import {
  AIRPORT_FAQS,
  CORPORATE_FAQS,
  HALLS,
  HOTEL_DESCRIPTION,
  NEARBY_PLACES,
  ROOMS,
  hallFacts,
  placeDistance,
} from "../data/content";
import { DISTANCES, HALL_FACTS, LEGAL_FACTS, known } from "../data/facts";
import { BUILD_YEAR } from "../data/site";

const RES = PHONES.reservations.display;
const HOME = { name: "Home", path: "/" };
const BANQUETS = { name: "Gala Vista Banquets", path: "/banquets/" };
const num = (v) => (known(v) ? v : undefined);

const capacityRows = HALLS.map((h) => ({
  hall: `${h.name}: ${h.label}`,
  bestFor: h.bestFor,
  theatre: hallFacts(h.id).theatre,
  roundTable: hallFacts(h.id).roundTable,
  floating: hallFacts(h.id).floating,
  areaSqft: hallFacts(h.id).areaSqft,
}));
export const CAPACITY_TABLE = {
  caption: "Gala Vista halls",
  columns: [
    { key: "hall", label: "Hall", always: true },
    { key: "bestFor", label: "Best for", always: true },
    { key: "theatre", label: "Theatre" },
    { key: "roundTable", label: "Round tables" },
    { key: "floating", label: "Floating" },
    { key: "areaSqft", label: "Area", format: (v) => `${v} sq ft` },
  ],
  rows: capacityRows,
};

const distanceRows = NEARBY_PLACES.map((p) => ({
  place: p.name,
  km: DISTANCES[p.key] ? DISTANCES[p.key].km : undefined,
  minutes: DISTANCES[p.key] ? DISTANCES[p.key].minutes : undefined,
}));

const roomLinks = ROOMS.map((r) => `[${r.title}](/rooms/#${r.id})`).join(", ");

export const PAGES = {
  about: {
    path: "/about/",
    title: "About Radiant Vista | Business Hotel on Gokul Road, Hubballi",
    description:
      "About Radiant Vista: a business hotel on Gokul Road, Hubballi, with three room types, a restaurant, a rooftop bar, two banquet halls and a 24-hour front desk.",
    og: { image: "/images/radiant-vista-hotel-exterior-day-hubballi.webp", alt: "Radiant Vista hotel building on Gokul Road, Hubballi" },
    breadcrumbs: [HOME, { name: "About", path: "/about/" }],
    schemaType: "AboutPage",
    eyebrow: "About Us",
    h1: "About Radiant Vista",
    intro: HOTEL_DESCRIPTION,
    sections: [
      {
        id: "our-story",
        title: "A hotel for work and for leisure",
        blocks: [
          "Radiant Vista brings business and leisure together under one roof. Guests come to Hubballi for meetings, conferences and family occasions, and the hotel is set up for all three.",
          "The rooms are designed for rest and for work, with work desks and fast Wi-Fi. In the hotel, Brick and Brew serves nostalgic Indian favourites, and on the roof, Breeze Point is the place to unwind in the evening. For bigger occasions, the two Gala Vista halls host weddings, receptions and corporate events.",
          { images: [
            { src: "/images/reception-front-desk-radiant-vista.webp", alt: "Reception desk at Radiant Vista, Hubballi" },
            { src: "/images/hotel-lobby-atrium-radiant-vista.webp", alt: "Lobby atrium with chandeliers at Radiant Vista" },
          ] },
        ],
      },
      {
        id: "at-the-hotel",
        title: "What you will find at the hotel",
        blocks: [
          {
            list: [
              `**Rooms:** ${roomLinks}, all with individually controlled AC, a 42-inch Smart TV and high-speed Wi-Fi.`,
              "**Dining:** [Brick and Brew](/dining/), the in-house restaurant for Indian comfort food with a modern twist.",
              "**Rooftop bar:** [Breeze Point](/bar/), an open-roof bar and restaurant with views over the city.",
              "**Events:** [Gala Vista I](/banquets/weddings/) for weddings and receptions, and [Gala Vista II](/banquets/conferences/) for conferences and meetings.",
              "**Services:** a business center, a travel desk, secure basement parking, CCTV across the premises and a 24-hour front desk.",
            ],
          },
        ],
      },
      {
        id: "whats-nearby",
        title: "What is nearby",
        blocks: [
          "The hotel is in Akshay Park on Gokul Road, the road that also leads to Hubballi Airport. Inorbit Mall is close by, and the railway station and the city's temples, lakes and gardens are an easy drive away.",
          { list: NEARBY_PLACES.slice(0, 5).map((p) => `**${p.name}:** ${p.description}`) },
          "See the [Hubballi guide](/hubballi-guide/) for more places to visit, or [contact us](/contact/) for directions.",
        ],
      },
    ],
    related: [
      { href: "/rooms/", label: "Rooms & Suites" },
      { href: "/corporate-stays/", label: "Corporate Stays" },
      { href: "/banquets/", label: "Gala Vista Banquets" },
      { href: "/contact/", label: "Contact Us" },
    ],
  },

  contact: {
    path: "/contact/",
    title: "Contact Radiant Vista | Hotel on Gokul Road, Hubballi",
    description:
      "Contact Radiant Vista on Gokul Road, Hubballi. Call or WhatsApp reservations on +91 91871 95517, email us, find directions and send an enquiry online.",
    og: { image: "/images/reception-front-desk-radiant-vista.webp", alt: "Reception desk at Radiant Vista, Hubballi" },
    breadcrumbs: [HOME, { name: "Contact", path: "/contact/" }],
    schemaType: "ContactPage",
    eyebrow: "Contact & Reservations",
    h1: "Contact Radiant Vista",
    intro: `Radiant Vista is at ${ADDRESS_LINE}; call or WhatsApp reservations on ${RES} for rooms, tables and events.`,
    sections: [
      {
        id: "get-in-touch",
        title: "Phone, WhatsApp and email",
        blocks: [
          { nap: true },
          "The front desk is open 24 hours a day. For the quickest reply about rooms, tables or events, send a WhatsApp message to the reservations number.",
          { buttons: [
            { whatsapp: true, href: waLink(WA_MESSAGES.rooms), label: `WhatsApp ${RES}` },
            { href: RESAVENUE_URL, label: "Book a room online", external: true },
          ] },
        ],
      },
      {
        id: "enquiry-form",
        title: "Send an enquiry",
        blocks: [
          "Tell us your dates, the number of guests and what you need. The team will reply by phone or email.",
          { form: "contact-page" },
        ],
      },
      {
        id: "find-us",
        title: "How to find us",
        blocks: [{ map: true }, { howToReach: true }],
      },
    ],
    related: [
      { href: "/rooms/", label: "Rooms & Suites" },
      { href: "/hotel-near-hubballi-airport/", label: "Near Hubballi Airport" },
      { href: "/banquets/", label: "Gala Vista Banquets" },
      { href: "/hubballi-guide/", label: "Hubballi Guide" },
    ],
  },

  airport: {
    path: "/hotel-near-hubballi-airport/",
    title: "Hotel Near Hubballi Airport | Radiant Vista, Gokul Road",
    description:
      "Radiant Vista is a business hotel on Gokul Road, the airport road in Hubballi. Getting from the airport, transfers, early arrivals and rooms for short stays.",
    og: { image: "/images/hotel-facade-night-radiant-vista-hubballi.webp", alt: "Radiant Vista hotel at night on Gokul Road, Hubballi" },
    breadcrumbs: [HOME, { name: "Hotel near Hubballi Airport", path: "/hotel-near-hubballi-airport/" }],
    eyebrow: "Close to the airport",
    h1: "Hotel Near Hubballi Airport",
    intro: `Radiant Vista is a business hotel on Gokul Road, the same road as Hubballi Airport${placeDistance("airport") ? ` and ${placeDistance("airport")} away` : ""}, which makes it an easy base for short trips and early flights.`,
    sections: [
      {
        id: "from-the-airport",
        title: "Getting here from the airport",
        blocks: [
          "Hubballi Airport and Radiant Vista are both on Gokul Road. Leave the airport on Gokul Road and head towards Akshay Park. You do not need to cross the city centre, which helps at peak hours.",
          { howToReach: true },
          { map: true },
        ],
      },
      {
        id: "airport-transfers",
        title: "Airport transfers",
        blocks: [
          `The hotel's travel desk helps guests with transport around Hubballi. Send your flight number and arrival time to reservations on ${RES}, ideally a day before you travel, and the team will tell you what pickup options are available.`,
        ],
      },
      {
        id: "short-stays",
        title: "Rooms for short stays",
        blocks: [
          `All three room types work well for a one-night stop: ${roomLinks}. Every room has a work desk, high-speed Wi-Fi and individually controlled air conditioning, so you can catch up on work or rest before a flight.`,
          "Brick and Brew restaurant and the Breeze Point rooftop bar are in the same building, so a good meal is never far away after a long journey.",
          { buttons: [
            { href: RESAVENUE_URL, label: "Check availability", external: true },
            { whatsapp: true, href: waLink(WA_MESSAGES.rooms), label: "Ask on WhatsApp" },
          ] },
        ],
      },
    ],
    faqs: AIRPORT_FAQS,
    faqTitle: "Airport Stay FAQ",
    related: [
      { href: "/rooms/", label: "Rooms & Suites" },
      { href: "/corporate-stays/", label: "Corporate Stays" },
      { href: "/contact/", label: "Contact & Directions" },
      { href: "/hubballi-guide/", label: "Hubballi Guide" },
    ],
  },

  corporate: {
    path: "/corporate-stays/",
    title: "Corporate Stays in Hubballi | Radiant Vista Business Hotel",
    description:
      "Corporate stays at Radiant Vista, Hubballi: work-ready rooms, Gala Vista II meeting hall, a business center, GST billing details and long-stay rates on request.",
    og: { image: "/images/gala-vista-conference-hall-theatre-seating.webp", alt: "Gala Vista II conference hall at Radiant Vista, Hubballi" },
    breadcrumbs: [HOME, { name: "Corporate Stays", path: "/corporate-stays/" }],
    eyebrow: "Business travel",
    h1: "Corporate Stays at Radiant Vista",
    intro:
      "Radiant Vista is a business hotel on Gokul Road in Hubballi with work-ready rooms, a business center and the Gala Vista II meeting hall, close to the airport.",
    sections: [
      {
        id: "work-ready-rooms",
        title: "Rooms you can work in",
        blocks: [
          "Every room has a work desk, high-speed Wi-Fi and individually controlled air conditioning. The Premium Room adds an executive work desk, a safe deposit locker and a mini fridge. The Suite has a separate lounge for small meetings.",
          { buttons: [{ href: "/rooms/", label: "Compare the rooms" }] },
        ],
      },
      {
        id: "meetings",
        title: "Meetings, training and conferences",
        blocks: [
          "[Gala Vista II](/banquets/conferences/) is a conference and event space for seminars, training sessions, presentations and board meetings. It has high-speed Wi-Fi and presentation connectivity, with on-site catering for tea breaks and working lunches.",
          "The business center is available for work between meetings, and the front desk is open 24 hours.",
        ],
      },
      {
        id: "billing",
        title: "Billing, GST and long stays",
        blocks: [
          `For company bookings, share your company name, billing address and GSTIN with reservations when you book, so invoices are prepared correctly. Ask about corporate and long-stay rates by emailing ${EMAIL} or calling ${RES}.`,
        ],
      },
      {
        id: "getting-around",
        title: "Getting around",
        blocks: [
          "The hotel is on Gokul Road, close to [Hubballi Airport](/hotel-near-hubballi-airport/). The travel desk can help with local transport for your team, and secure basement parking is available for guests who drive.",
        ],
      },
    ],
    faqs: CORPORATE_FAQS,
    faqTitle: "Corporate Stay FAQ",
    related: [
      { href: "/banquets/conferences/", label: "Conference Hall" },
      { href: "/rooms/", label: "Rooms & Suites" },
      { href: "/hotel-near-hubballi-airport/", label: "Near the Airport" },
      { href: "/contact/", label: "Contact Us" },
    ],
  },

  weddings: {
    path: "/banquets/weddings/",
    title: "Wedding Venue in Hubballi | Gala Vista I, Radiant Vista",
    description:
      "Plan a wedding, reception or engagement at Gala Vista I, the grand banquet hall at Radiant Vista, Hubballi, with catering, parking and rooms for guests.",
    og: { image: "/images/gala-vista-banquet-round-table-setup.webp", alt: "Gala Vista banquet hall with round tables, Hubballi" },
    breadcrumbs: [HOME, BANQUETS, { name: "Weddings", path: "/banquets/weddings/" }],
    eyebrow: "Gala Vista I",
    h1: "Weddings & Receptions at Gala Vista I",
    intro:
      "Gala Vista I is the grand banquet hall at Radiant Vista in Hubballi, used for weddings, receptions, engagements and family celebrations.",
    venue: "galaVista1",
    sections: [
      {
        id: "the-hall",
        title: "The hall",
        blocks: [
          "Gala Vista I is designed for big days. It suits weddings, marriage receptions, engagement ceremonies and family reunions, with elegant lighting and a layout that can be set up for dining or a stage programme.",
          { images: [
            { src: "/images/gala-vista-banquet-round-table-setup.webp", alt: "Round-table banquet setup at Gala Vista, Hubballi" },
            { src: "/images/gala-vista-banquet-hall-stage.webp", alt: "Gala Vista banquet hall with stage, Hubballi" },
          ] },
          { table: CAPACITY_TABLE },
        ],
      },
      {
        id: "food-and-coordination",
        title: "Food and coordination",
        blocks: [
          "On-site catering and banquet management mean one team looks after the menu, service and timings. Share your guest count and food preferences when you enquire, and the team will suggest menus to suit.",
        ],
      },
      {
        id: "guests",
        title: "Rooms and parking for your guests",
        blocks: [
          `Out-of-town family can stay in the same building. Ask about blocks of ${roomLinks} for your dates. Secure basement parking is available, and the hotel is close to the airport.`,
        ],
      },
      {
        id: "enquire",
        title: "Check your date",
        blocks: [
          `Send your event type, date and guest count on WhatsApp to ${RES}, or use the planner on the [Gala Vista page](/banquets/).`,
          { buttons: [{ whatsapp: true, href: waLink(WA_MESSAGES.banquets), label: "Enquire on WhatsApp" }] },
        ],
      },
    ],
    related: [
      { href: "/banquets/", label: "All Gala Vista Halls" },
      { href: "/banquets/conferences/", label: "Conference Hall" },
      { href: "/rooms/", label: "Rooms for Guests" },
      { href: "/dining/", label: "Brick and Brew" },
    ],
  },

  conferences: {
    path: "/banquets/conferences/",
    title: "Conference Hall in Hubballi | Gala Vista II, Radiant Vista",
    description:
      "Book Gala Vista II at Radiant Vista, Hubballi, for conferences, seminars, training and board meetings, with Wi-Fi, catering and rooms on site.",
    og: { image: "/images/gala-vista-conference-hall-theatre-seating.webp", alt: "Gala Vista II conference hall with theatre seating, Hubballi" },
    breadcrumbs: [HOME, BANQUETS, { name: "Conferences", path: "/banquets/conferences/" }],
    eyebrow: "Gala Vista II",
    h1: "Conferences & Meetings at Gala Vista II",
    intro:
      "Gala Vista II is the conference and event space at Radiant Vista in Hubballi, for seminars, training sessions, presentations and board meetings.",
    venue: "galaVista2",
    sections: [
      {
        id: "the-space",
        title: "The space",
        blocks: [
          "Gala Vista II is built for professional events. It has high-speed Wi-Fi and presentation connectivity, and the hotel's business center is available for work between sessions.",
          { images: [
            { src: "/images/gala-vista-conference-hall-theatre-seating.webp", alt: "Theatre-style seating in Gala Vista II, Hubballi" },
            { src: "/images/gala-vista-banquet-hall-round-tables.webp", alt: "Round-table setup for a corporate event at Gala Vista" },
          ] },
          { table: CAPACITY_TABLE },
        ],
      },
      {
        id: "catering",
        title: "Tea breaks and working lunches",
        blocks: [
          "On-site catering covers tea breaks, working lunches and conference dinners. Tell the events team your timings and headcount, and they will plan service around your agenda.",
        ],
      },
      {
        id: "delegates",
        title: "Rooms for delegates",
        blocks: [
          `Delegates can stay in the same building, close to Hubballi Airport. Ask about room blocks and [corporate rates](/corporate-stays/) for your dates. Secure basement parking is available for local attendees.`,
        ],
      },
      {
        id: "enquire",
        title: "Plan your event",
        blocks: [
          `Share your event type, date and number of attendees on WhatsApp at ${RES}, or email ${EMAIL}.`,
          { buttons: [{ whatsapp: true, href: waLink(WA_MESSAGES.banquets), label: "Enquire on WhatsApp" }] },
        ],
      },
    ],
    related: [
      { href: "/corporate-stays/", label: "Corporate Stays" },
      { href: "/banquets/weddings/", label: "Wedding Hall" },
      { href: "/banquets/", label: "All Gala Vista Halls" },
      { href: "/rooms/", label: "Rooms & Suites" },
    ],
  },

  guide: {
    path: "/hubballi-guide/",
    title: "Hubballi Travel Guide: Places to Visit Near Radiant Vista",
    description:
      "A short Hubballi guide: Unkal Lake, Nrupatunga Betta, Siddharoodha Math, Chandramouleshwara Temple, Glass House Garden and Inorbit Mall, near Radiant Vista.",
    og: { image: "/images/radiant-vista-hotel-exterior-day-hubballi.webp", alt: "Radiant Vista hotel in Hubballi" },
    breadcrumbs: [HOME, { name: "Hubballi Guide", path: "/hubballi-guide/" }],
    eyebrow: "Explore the city",
    h1: "Hubballi Guide: Places to Visit Near Radiant Vista",
    intro:
      "Hubballi, also written Hubli, is a commercial city in northern Karnataka, and Radiant Vista on Gokul Road is a convenient base for its lakes, temples, gardens and shopping.",
    sections: [
      {
        id: "places-to-visit",
        title: "Places to visit",
        blocks: NEARBY_PLACES.filter((p) => !["airport", "railway"].includes(p.key)).flatMap((p) => {
          const d = placeDistance(p.key);
          return [{ h3: p.name }, `${p.description}${d ? ` It is ${d} from the hotel.` : ""}`];
        }),
      },
      {
        id: "distances",
        title: "Distances from the hotel",
        blocks: [
          {
            table: {
              caption: "By road from Radiant Vista",
              columns: [
                { key: "place", label: "Place", always: true },
                { key: "km", label: "Distance", format: (v) => `${v} km` },
                { key: "minutes", label: "Drive time", format: (v) => `${v} min` },
              ],
              rows: distanceRows,
            },
          },
          "The travel desk can help you plan a half-day or full-day tour of the city and arrange local transport.",
        ],
      },
      {
        id: "getting-around",
        title: "Getting around Hubballi",
        blocks: [
          "Taxis and auto-rickshaws are the easiest way to get around. The hotel is on Gokul Road, near the airport, and Hubballi Junction railway station connects the city to Bengaluru, Mumbai, Goa and beyond.",
          { howToReach: true },
        ],
      },
    ],
    related: [
      { href: "/rooms/", label: "Rooms & Suites" },
      { href: "/dining/", label: "Brick and Brew" },
      { href: "/bar/", label: "Breeze Point Rooftop" },
      { href: "/contact/", label: "Contact & Directions" },
    ],
  },

  privacy: {
    path: "/privacy-policy/",
    draft: !known(LEGAL_FACTS.privacyPolicy),
    title: "Privacy Policy | Radiant Vista Hubballi",
    description:
      "How Radiant Vista, Hubballi, collects and uses personal information sent through this website, the enquiry form, WhatsApp and the online booking engine.",
    og: { image: "/images/radiant-vista-hotel-exterior-night.jpg", alt: "Radiant Vista hotel, Hubballi" },
    breadcrumbs: [HOME, { name: "Privacy Policy", path: "/privacy-policy/" }],
    h1: "Privacy Policy",
    intro: "This policy explains what personal information Radiant Vista collects through hotelradiantvista.com and how it is used.",
    sections: [
      {
        id: "who-we-are",
        title: "Who we are",
        blocks: [
          `This website is operated for Radiant Vista, ${ADDRESS_LINE}. [To be confirmed by Radiant Vista: registered legal name of the business.] Questions about this policy can be sent to ${EMAIL}.`,
        ],
      },
      {
        id: "what-we-collect",
        title: "What we collect",
        blocks: [
          {
            list: [
              "**Enquiry form:** your name, phone number, email address (optional) and message.",
              "**WhatsApp, phone and email:** whatever you choose to share with us when you contact us.",
              "**Online bookings:** room bookings are made through the ResAvenue booking engine, which collects the details needed for your reservation under its own terms.",
              "**Analytics:** if analytics is enabled, anonymous usage data such as pages viewed and the device type, collected by Google Analytics.",
            ],
          },
        ],
      },
      {
        id: "how-we-use",
        title: "How we use it",
        blocks: [
          "We use your information to reply to enquiries, manage reservations and events, meet legal requirements for guest registration, and improve the website. We do not sell personal information.",
        ],
      },
      {
        id: "retention-and-rights",
        title: "Retention and your rights",
        blocks: [
          `[To be confirmed by Radiant Vista: how long enquiry and guest records are kept.] You can ask us to see, correct or delete the personal information we hold about you by emailing ${EMAIL}.`,
        ],
      },
    ],
  },

  terms: {
    path: "/terms/",
    draft: !known(LEGAL_FACTS.terms),
    title: "Terms of Use | Radiant Vista Hubballi",
    description:
      "Terms of use for hotelradiantvista.com, the website of Radiant Vista, a business hotel on Gokul Road, Hubballi, Karnataka.",
    og: { image: "/images/radiant-vista-hotel-exterior-night.jpg", alt: "Radiant Vista hotel, Hubballi" },
    breadcrumbs: [HOME, { name: "Terms of Use", path: "/terms/" }],
    h1: "Terms of Use",
    intro: "These terms apply to your use of hotelradiantvista.com, the website of Radiant Vista in Hubballi.",
    sections: [
      {
        id: "website-content",
        title: "Website content",
        blocks: [
          "We try to keep information on this website accurate and up to date, but rooms, menus, prices, timings and facilities can change. Please confirm important details with reservations before you travel.",
        ],
      },
      {
        id: "bookings",
        title: "Bookings",
        blocks: [
          "Online room bookings are made through the ResAvenue booking engine. The rate, inclusions and cancellation terms shown there at the time of booking apply to your reservation. Banquet and event bookings are confirmed separately in writing by the hotel.",
          "[To be confirmed by Radiant Vista: any additional booking terms, such as deposits or minimum age.]",
        ],
      },
      {
        id: "links-and-ip",
        title: "Links, images and content",
        blocks: [
          "This website links to third-party services such as WhatsApp, Google Maps and the booking engine; their own terms apply. Text, logos and images on this website belong to Radiant Vista and may not be reused without permission.",
        ],
      },
      {
        id: "law",
        title: "Governing law",
        blocks: ["[To be confirmed by Radiant Vista: governing law and jurisdiction, for example the courts of Hubballi, Karnataka.]"],
      },
    ],
  },

  cancellation: {
    path: "/cancellation-policy/",
    draft: !known(LEGAL_FACTS.cancellationPolicy),
    title: "Cancellation Policy | Radiant Vista Hubballi",
    description:
      "Cancellation and refund policy for room reservations and Gala Vista banquet bookings at Radiant Vista, a business hotel on Gokul Road, Hubballi.",
    og: { image: "/images/radiant-vista-hotel-exterior-night.jpg", alt: "Radiant Vista hotel, Hubballi" },
    breadcrumbs: [HOME, { name: "Cancellation Policy", path: "/cancellation-policy/" }],
    h1: "Cancellation Policy",
    intro: "This page explains how to cancel or change a room or event booking at Radiant Vista in Hubballi.",
    sections: [
      {
        id: "rooms",
        title: "Room reservations",
        blocks: [
          "For bookings made online, the cancellation terms of the rate you chose are shown in the booking engine before you confirm, and they apply to your reservation.",
          "[To be confirmed by Radiant Vista: free-cancellation window, charges for late cancellation and no-shows, and how refunds are paid.]",
        ],
      },
      {
        id: "events",
        title: "Banquet and event bookings",
        blocks: ["[To be confirmed by Radiant Vista: advance payment, cancellation charges by notice period, and date changes.]"],
      },
      {
        id: "how-to-cancel",
        title: "How to cancel or change a booking",
        blocks: [`Call or WhatsApp reservations on ${RES}, or email ${EMAIL} with your booking reference.`],
      },
    ],
  },
};

export const CONTENT_YEAR = BUILD_YEAR;
export const hallCapacityKnown = known(HALL_FACTS.galaVista1.theatre) || known(HALL_FACTS.galaVista2.theatre);
export { num };
