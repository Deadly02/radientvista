// Copy shared by visible components, JSON-LD and llms.txt. Edit text here, never in two places.
// Facts that are not confirmed yet come from facts.js and are only mentioned once known.
import { ADDRESS_LINE, EMAIL, PHONES } from "./site";
import { BAR_FACTS, DISTANCES, HALL_FACTS, HOTEL_FACTS, ROOM_FACTS, distanceText, known } from "./facts";
import { ROOM_IMAGES, HALL_IMAGES } from "./images";

const RES = PHONES.reservations.display;
const FRONT = PHONES.primary.display;
const airport = distanceText(DISTANCES.airport);

// One-sentence definition used at the top of the home page and as the Hotel description.
export const HOTEL_DESCRIPTION =
  `Radiant Vista is a business hotel on Gokul Road in Hubballi, Karnataka, ${airport ? `${airport} from Hubballi Airport` : "close to Hubballi Airport"}, ` +
  "with three room types, the Brick and Brew restaurant, the Breeze Point rooftop bar and the Gala Vista banquet halls.";
export const ANSWER_SUMMARY = HOTEL_DESCRIPTION;

// ---------------------------------------------------------------- rooms
export const ROOMS = [
  {
    id: "classic",
    title: "Classic Room",
    subtitle: "Comfortable executive accommodation",
    images: ROOM_IMAGES.classic,
    alt: "Classic room at Radiant Vista hotel in Hubballi",
    description:
      "A designer room with individually controlled air conditioning, a 42-inch Smart TV, a hot water kettle, a work desk and high-speed Wi-Fi.",
    longDescription:
      "The Classic Room suits business travellers and short stays. It has individually controlled air conditioning, a 42-inch Smart TV, high-speed Wi-Fi, a hot water kettle and a work desk. Plush bedding and a quiet setting make it easy to rest after a long day.",
    amenityNames: ["Individually controlled AC", '42" Smart TV', "Hot water kettle", "High-speed Wi-Fi", "Work desk", "CCTV-secured premises"],
  },
  {
    id: "premium",
    title: "Premium Room",
    subtitle: "More space and extra comforts",
    images: ROOM_IMAGES.premium,
    alt: "Premium room at Radiant Vista business hotel in Hubballi",
    description:
      "A larger room with premium interiors, a mini fridge, an executive work desk, a safe deposit locker and a 42-inch Smart TV.",
    longDescription:
      "The Premium Room offers more space and upgraded interiors for corporate guests and longer stays. Along with air conditioning and a 42-inch Smart TV, it adds an executive work desk, a safe deposit locker and a private mini fridge.",
    amenityNames: ["Mini fridge", "Safe deposit locker", "Executive work desk", "Individually controlled AC", '42" Smart TV', "Hot water kettle"],
  },
  {
    id: "suite",
    title: "Suite",
    subtitle: "Separate lounge and the most space",
    images: ROOM_IMAGES.suite,
    alt: "Suite with separate lounge at Radiant Vista hotel in Hubballi",
    description:
      "Our largest accommodation, with a separate lounge, designer interiors, satellite television, a mini fridge and a safe deposit locker.",
    longDescription:
      "The Suite is our largest accommodation. A separate lounge gives you room to meet or unwind away from the bedroom. It has designer interiors, satellite television, a mini fridge, a safe deposit locker and full business amenities.",
    amenityNames: ["Separate living area & lounge", "Designer interiors", "Satellite television", "Mini fridge", "Safe deposit locker", "Individually controlled AC"],
  },
];
export const roomFacts = (id) => ROOM_FACTS[id] || {};

// ---------------------------------------------------------------- banquet halls
export const HALLS = [
  {
    id: "galaVista1",
    name: "Gala Vista I",
    label: "Grand Banquet Hall",
    bestFor: "Weddings, receptions, engagements, family celebrations",
    images: HALL_IMAGES,
    path: "/banquets/weddings/",
  },
  {
    id: "galaVista2",
    name: "Gala Vista II",
    label: "Conference & Event Space",
    bestFor: "Conferences, seminars, training, board meetings, presentations",
    images: HALL_IMAGES,
    path: "/banquets/conferences/",
  },
];
export const hallFacts = (id) => HALL_FACTS[id] || {};

// ---------------------------------------------------------------- nearby places
export const NEARBY_PLACES = [
  {
    key: "inorbit",
    name: "Inorbit Mall Hubballi",
    description: "The city's main mall for shopping, dining and family entertainment, a short drive from the hotel.",
  },
  {
    key: "airport",
    name: "Hubballi Airport",
    description: "The domestic airport sits on the same Gokul Road corridor as the hotel, which makes airport transfers easy.",
  },
  {
    key: "railway",
    name: "Hubballi Junction",
    description: "The main railway station of the South Western Railway zone, with trains to Bengaluru, Mumbai, Goa and beyond.",
  },
  {
    key: "unkal",
    name: "Unkal Lake",
    description: "A 110-year-old lake with parkland, boating and a large statue of Swami Vivekananda. Popular at sunset.",
  },
  {
    key: "chandramouleshwara",
    name: "Chandramouleshwara Temple",
    description: "An 11th-century Western Chalukya temple known for its detailed black stone carvings.",
  },
  {
    key: "nrupatunga",
    name: "Nrupatunga Betta",
    description: "A hilltop viewpoint with wide views over Hubballi-Dharwad, best visited at sunrise or sunset.",
  },
  {
    key: "siddharoodha",
    name: "Siddharoodha Math",
    description: "A historic spiritual centre and ashram dedicated to Sri Siddharoodha Swami, visited by devotees from across the region.",
  },
  {
    key: "glassHouse",
    name: "Indira Gandhi Glass House Garden",
    description: "A public garden with a glass house modelled on London's Crystal Palace. It hosts the city's flower shows.",
  },
];
export const placeDistance = (key) => distanceText(DISTANCES[key]);

// ---------------------------------------------------------------- FAQs
// Answers stay within roughly 40-60 words. They only state facts that are confirmed.

const checkinAnswer = () =>
  known(HOTEL_FACTS.checkinTime) && known(HOTEL_FACTS.checkoutTime)
    ? `Check-in is from ${HOTEL_FACTS.checkinTime} and check-out is by ${HOTEL_FACTS.checkoutTime}. If you are arriving early or leaving late, tell the reservations team when you book. Call or WhatsApp ${RES} and they will confirm what is possible for your dates.`
    : `Check-in and check-out times are confirmed with your booking. If you are arriving early or leaving late, tell the reservations team when you book. Call or WhatsApp ${RES} and they will confirm what is possible for your dates.`;

export const HOME_FAQS = [
  {
    q: "Where is Radiant Vista located?",
    a: `Radiant Vista is at ${ADDRESS_LINE}. The hotel is on Gokul Road, the same corridor as Hubballi Airport, and close to Inorbit Mall. Hubballi Junction railway station and the city centre are an easy drive away.`,
  },
  {
    q: "Is Hubballi the same city as Hubli?",
    a: "Yes. Hubballi is the official Kannada name and Hubli is the older English spelling of the same city in northern Karnataka. Together with Dharwad it forms the twin city of Hubballi-Dharwad, the second-largest urban area in the state after Bengaluru.",
  },
  {
    q: "Does Radiant Vista have a restaurant?",
    a: "Yes. Brick and Brew is the hotel's restaurant. It serves nostalgic Indian favourites with a modern twist, such as butter chicken, momos with a dim sum touch and home-style dal, in a lively setting with retro Bollywood music. Hotel guests and visitors are both welcome.",
  },
  {
    q: "Is there a rooftop bar at Radiant Vista?",
    a: "Yes. Breeze Point is the hotel's open-roof rooftop bar and restaurant. It serves curated cocktails and savoury dishes with views over Hubballi. Separate areas make it suitable for a quiet dinner for two or a night out with friends. Enquire on WhatsApp to reserve a table.",
  },
  {
    q: "Can I book a banquet hall for a wedding or a corporate event?",
    a: `Yes. Gala Vista has two halls. Gala Vista I is a grand banquet hall for weddings and receptions. Gala Vista II is a conference and event space for seminars and meetings. Call ${FRONT} or email ${EMAIL} to check dates and packages.`,
  },
  {
    q: "What room types does Radiant Vista offer?",
    a: "There are three room types: the Classic Room, the Premium Room and the Suite. Every room has individually controlled air conditioning, a 42-inch Smart TV and high-speed Wi-Fi. Premium Rooms and Suites add a mini fridge and a safe deposit locker, and the Suite has a separate lounge.",
  },
  {
    q: "Is Radiant Vista a good choice for business travellers?",
    a: "Yes. It is a business hotel close to the airport, with a business center, work desks in every room, high-speed Wi-Fi and a 24-hour front desk. Gala Vista II hosts meetings and training sessions, and the travel desk can help with local transport.",
  },
  {
    q: "How do I book a room or reserve a table?",
    a: `Book a room online through our booking engine, or call reservations on ${RES}. You can also WhatsApp the same number, call the front desk on ${FRONT} or email ${EMAIL}. For Brick and Brew or Breeze Point, a WhatsApp message is the quickest way to reserve.`,
  },
];

export const ROOMS_FAQS = [
  {
    q: "What room types are available at Radiant Vista?",
    a: "Radiant Vista has three room types: the Classic Room, the Premium Room and the Suite. All rooms have individually controlled air conditioning, a 42-inch Smart TV and high-speed Wi-Fi. The Suite adds a separate lounge, which is useful for families and guests who need to meet in private.",
  },
  {
    q: "What amenities are included in every room?",
    a: "Every room has individually controlled air conditioning, a 42-inch Smart TV, a hot water kettle, high-speed Wi-Fi and a work desk, and the whole building is CCTV-secured. Premium Rooms and Suites also include a mini fridge and a safe deposit locker for your valuables.",
  },
  { q: "What are the check-in and check-out times?", a: checkinAnswer() },
  {
    q: "What ID do I need at check-in?",
    a: known(HOTEL_FACTS.idPolicy)
      ? String(HOTEL_FACTS.idPolicy)
      : `Please bring a valid government-issued photo ID for every adult guest, such as an Aadhaar card, passport, driving licence or voter ID. Foreign nationals need a passport and visa. If you are unsure whether a document will be accepted, ask reservations on ${RES} before you travel.`,
  },
  {
    q: "Is parking available at the hotel?",
    a: "Yes. Radiant Vista has secure basement parking for guests, and the premises are monitored by CCTV around the clock. If you are coming with several cars for an event or a group booking, let the front desk know in advance so the team can plan parking for you.",
  },
  {
    q: "Can I get a GST invoice for a corporate stay?",
    a: known(HOTEL_FACTS.gstInvoices)
      ? String(HOTEL_FACTS.gstInvoices)
      : `If you need a GST invoice for a business stay, tell the reservations team when you book and share your company name, billing address and GSTIN. Call or WhatsApp ${RES}, or email ${EMAIL}, so the details are on file before you check in.`,
  },
  {
    q: "How do I book a room at Radiant Vista?",
    a: `The quickest way is our online booking engine, which shows live availability and rates. You can also call or WhatsApp reservations on ${RES}, call the front desk on ${FRONT}, or email ${EMAIL}. The team can help with group, corporate and long-stay bookings.`,
  },
];

export const DINING_FAQS = [
  {
    q: "What kind of food does Brick and Brew serve?",
    a: "Brick and Brew serves Indian comfort food with a modern twist. Think butter chicken plated like a work of art, momos with a gourmet dim sum touch and home-style dal finished with five-star presentation. The mood is set by retro Bollywood music, earthy decor and pomegranate motifs.",
  },
  {
    q: "Can visitors who are not staying at the hotel eat at Brick and Brew?",
    a: "Yes. Brick and Brew welcomes both hotel guests and visitors from around Hubballi. It works well for a family meal, a business lunch or dinner with friends. For larger groups, send a WhatsApp message in advance so the team can arrange a table that seats everyone together.",
  },
  {
    q: "How do I reserve a table at Brick and Brew?",
    a: `Send a WhatsApp message to ${RES} with your date, time and number of guests, and the team will confirm your table. You can also call the front desk on ${FRONT}. Reserving ahead is a good idea for weekends and for groups.`,
  },
  {
    q: "What are Brick and Brew's opening hours?",
    a: `Opening hours can change on holidays and for private events, so please check before you visit. Call ${FRONT} or send a WhatsApp message to ${RES} and the team will confirm today's timings, along with any set menus or special evenings.`,
  },
  {
    q: "Is Brick and Brew suitable for group dinners?",
    a: "Yes. The restaurant has long tables for family get-togethers and group dinners, as well as cosy booths for smaller parties. For birthdays, office dinners or larger gatherings, contact the team in advance. Gala Vista banquet halls are also available in the same hotel for bigger events.",
  },
];

export const BAR_FAQS = [
  {
    q: "What is Breeze Point?",
    a: "Breeze Point is the rooftop bar and restaurant at Radiant Vista in Hubballi. It has an open-roof terrace with views over the city, curated cocktails made by our bar team and a rotating menu of savoury bites and meals. It suits both a quiet date and a night out with friends.",
  },
  {
    q: "Does Breeze Point serve alcohol?",
    a: "Yes. Breeze Point is a bar as well as a restaurant, and our barman creates classic curated cocktails alongside a selection of spirits. In Karnataka the legal drinking age is 21, so please carry a photo ID. Ask the bar team for a drink to suit the dishes you order.",
  },
  {
    q: "What are Breeze Point's timings?",
    a: `Breeze Point is an evening venue, and timings can change for events and holidays. Call ${FRONT} or send a WhatsApp message to ${RES} to confirm today's hours and reserve a table, especially on weekends when the rooftop fills up quickly.`,
  },
  {
    q: "Can I host a private party at Breeze Point?",
    a: `Yes. The rooftop has separate spaces, so it works well for birthdays, team evenings and small celebrations. Share your date, group size and food and drink preferences on WhatsApp at ${RES}. For larger events, the Gala Vista banquet halls are in the same building.`,
  },
  {
    q: "Is food served at Breeze Point?",
    a: "Yes. Alongside the bar, Breeze Point serves savoury bites and a rotating selection of meals, so you can make a full dinner of it. If you want a sit-down dinner with a wider menu, Brick and Brew restaurant is in the same hotel.",
  },
];

const capacityAnswer = () => {
  const g1 = HALL_FACTS.galaVista1;
  const g2 = HALL_FACTS.galaVista2;
  if (known(g1.theatre) && known(g2.theatre)) {
    return `Gala Vista I seats up to ${g1.theatre} guests theatre-style and Gala Vista II seats up to ${g2.theatre}. Capacity depends on the layout you choose, such as theatre, round tables or a floating crowd. Share your guest count and the team will suggest the right hall and setup.`;
  }
  return `Capacity depends on the hall and the layout you choose, such as theatre seating, round tables or a floating crowd. Share your expected guest count and event type on WhatsApp at ${RES} and the events team will suggest the right hall and setup for you.`;
};
const priceAnswer = () =>
  known(HALL_FACTS.perPlateFromINR)
    ? `Banquet menus start from ₹${HALL_FACTS.perPlateFromINR} per plate plus taxes. The final price depends on the menu, guest count, hall and date. Share your requirements on WhatsApp at ${RES} for a detailed quote.`
    : `Packages and per-plate prices depend on the menu, guest count, hall, date and any decor or equipment you need. Share these details on WhatsApp at ${RES} or email ${EMAIL}, and the events team will send a detailed quote for your event.`;

export const BANQUET_FAQS = [
  {
    q: "What banquet halls does Gala Vista have?",
    a: "Gala Vista has two halls inside Radiant Vista. Gala Vista I is a grand banquet hall for weddings, receptions and family celebrations. Gala Vista II is a conference and event space for seminars, training sessions and corporate meetings. Both are supported by the hotel's catering and events team.",
  },
  { q: "How many guests can the Gala Vista halls hold?", a: capacityAnswer() },
  { q: "What do banquet packages cost per plate?", a: priceAnswer() },
  {
    q: "Is catering available for events?",
    a: "Yes. Gala Vista events are supported by on-site catering and banquet management, so food, service and coordination come from one team. Share your preferred cuisine and menu style when you enquire, and the team will suggest options that suit your guests and budget.",
  },
  {
    q: "Is there parking and Wi-Fi for events?",
    a: "Yes. Guests can use the hotel's secure basement parking, and Gala Vista II has high-speed Wi-Fi and presentation connectivity for conferences. If you expect many cars or need specific equipment, tell the events team when you book so everything is ready on the day.",
  },
  {
    q: "How do I enquire about a date?",
    a: `Use the event planner on this page to choose your event type and date, then send it straight to WhatsApp. You can also message ${RES}, call ${FRONT} or email ${EMAIL}. The team will confirm availability and send package details.`,
  },
];

export const AIRPORT_FAQS = [
  {
    q: "How far is Radiant Vista from Hubballi Airport?",
    a: airport
      ? `Radiant Vista is ${airport} from Hubballi Airport. Both are on Gokul Road, so the drive is simple with no need to cross the city centre. Allow extra time at peak hours, and tell reservations your flight details if you would like help with transport.`
      : `Radiant Vista and Hubballi Airport are both on Gokul Road, so the drive is simple and avoids the city centre. Allow extra time at peak hours. Share your flight details with reservations on ${RES} and the team will advise on the quickest way to reach the hotel.`,
  },
  {
    q: "Can the hotel arrange an airport pickup?",
    a: known(HOTEL_FACTS.airportPickup)
      ? String(HOTEL_FACTS.airportPickup)
      : `The hotel's travel desk helps guests with transport around the city. Send your flight number and arrival time to reservations on ${RES} at least a day before you travel, and the team will tell you what pickup options are available and what they cost.`,
  },
  { q: "Can I check in early after a morning flight?", a: checkinAnswer() },
];

export const CORPORATE_FAQS = [
  {
    q: "Does Radiant Vista offer corporate rates?",
    a: `Companies that send guests regularly can ask about corporate and long-stay rates. Email ${EMAIL} or call reservations on ${RES} with your company name, the number of room nights you expect and your usual travel dates, and the team will get back to you.`,
  },
  ROOMS_FAQS[5],
  {
    q: "Are there meeting rooms at the hotel?",
    a: "Yes. Gala Vista II is a conference and event space for seminars, training sessions, presentations and board meetings, with high-speed Wi-Fi and presentation connectivity. The hotel also has a business center for work between meetings, and on-site catering is available for working lunches and tea breaks.",
  },
];

// Small helper used by fact-dependent sentences in components.
export const BAR_MIN_AGE_KNOWN = known(BAR_FACTS.minimumAge);
