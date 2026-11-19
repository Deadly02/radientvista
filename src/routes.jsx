// The one route config. build.mjs writes every <head> and body from this list,
// and the client hydrates the matching component. Do not write head tags anywhere else.
import { HomePage } from "./pages/HomePage";
import { RoomsPage } from "./pages/RoomsPage";
import { DiningPage } from "./pages/DiningPage";
import { BarPage } from "./pages/BarPage";
import { BanquetsPage } from "./pages/BanquetsPage";
import { GalleryPage } from "./pages/GalleryPage";
import { NotFoundPage } from "./pages/NotFoundPage";
import { ContentPage } from "./components/ContentPage";
import { PAGES } from "./content/pages";
import { GALLERY_ALL_IMAGES, HERO_SLIDES } from "./data/images";
import { BANQUET_FAQS, BAR_FAQS, DINING_FAQS, HOME_FAQS, NEARBY_PLACES, ROOMS, ROOMS_FAQS } from "./data/content";
import { SITE_URL } from "./data/site";
import { stableImage } from "./lib/img";
import {
  BAR_ID,
  HALL_IDS,
  RESTAURANT_ID,
  VENUE_ID,
  barNode,
  faqNode,
  hotelNode,
  hotelRoomNode,
  restaurantNode,
  touristAttractionNode,
  venueNodes,
  webPageNode,
  websiteNode,
} from "./seo/schema";

const HOME = { name: "Home", path: "/" };
const withFaq = (route, faqs) => (faqs ? [faqNode({ route, faqs })] : []);

const CORE_ROUTES = [
  {
    path: "/",
    outFile: "index.html",
    component: HomePage,
    title: "Radiant Vista | Business Hotel in Hubballi, Gokul Road",
    description:
      "Stay at Radiant Vista on Gokul Road, Hubballi. Enjoy premium rooms, Brick and Brew dining, Breeze Point rooftop bar, and Gala Vista banquet venues.",
    og: { type: "website", image: "/images/radiant-vista-hotel-exterior-night.jpg", alt: "Radiant Vista hotel in Hubballi at night" },
    twitter: { imageAlt: "Radiant Vista hotel in Hubballi" },
    preloadImage: { src: HERO_SLIDES[0].image, sizes: "100vw" },
    sitemap: { changefreq: "weekly", priority: "1.0" },
    schema: (route) => [
      hotelNode(),
      restaurantNode(),
      barNode(),
      ...venueNodes(),
      websiteNode(),
      webPageNode({ route, name: "Radiant Vista | Business Hotel in Hubballi", speakable: ["#answer-summary", "#nearby-places", "#faq"] }),
      ...withFaq(route, HOME_FAQS),
    ],
  },
  {
    path: "/rooms/",
    outFile: "rooms/index.html",
    component: RoomsPage,
    title: "Rooms & Suites in Hubballi | Hotel Radiant Vista",
    description:
      "Compare the Classic Room, Premium Room and Suite at Radiant Vista, Hubballi. Every room has individual AC, a 42-inch Smart TV, high-speed Wi-Fi and a work desk.",
    og: { type: "website", image: "/images/classic-room-bed-radiant-vista.webp", alt: "Classic Room at Radiant Vista, Hubballi" },
    twitter: { imageAlt: "Hotel rooms at Radiant Vista, Hubballi" },
    breadcrumbs: [HOME, { name: "Rooms & Suites", path: "/rooms/" }],
    sitemap: { changefreq: "weekly", priority: "0.9" },
    schema: (route) => [
      hotelNode(),
      webPageNode({ route, type: "CollectionPage" }),
      ...ROOMS.map(hotelRoomNode),
      ...withFaq(route, ROOMS_FAQS),
    ],
  },
  {
    path: "/dining/",
    outFile: "dining/index.html",
    component: DiningPage,
    title: "Brick and Brew Restaurant Hubballi | Radiant Vista",
    description:
      "Brick and Brew at Radiant Vista, Hubballi, serves nostalgic Indian favourites with a modern twist, from butter chicken to gourmet momos and home-style dal.",
    og: { type: "restaurant.restaurant", image: "/images/brick-and-brew-woven-lantern-dining.webp", alt: "Brick and Brew restaurant at Radiant Vista, Hubballi" },
    twitter: { imageAlt: "Brick and Brew restaurant in Hubballi" },
    breadcrumbs: [HOME, { name: "Brick and Brew Dining", path: "/dining/" }],
    sitemap: { changefreq: "monthly", priority: "0.8" },
    schema: (route) => [hotelNode(), restaurantNode(), webPageNode({ route, about: RESTAURANT_ID }), ...withFaq(route, DINING_FAQS)],
  },
  {
    path: "/bar/",
    outFile: "bar/index.html",
    component: BarPage,
    title: "Breeze Point Rooftop Bar Hubballi | Radiant Vista",
    description:
      "Breeze Point is the open-roof rooftop bar and restaurant at Radiant Vista, Hubballi, with curated cocktails, savoury bites and evening views over the city.",
    og: { type: "restaurant.restaurant", image: "/images/breeze-point-open-air-rooftop-terrace.webp", alt: "Breeze Point rooftop terrace at Radiant Vista, Hubballi" },
    twitter: { imageAlt: "Breeze Point rooftop bar in Hubballi" },
    breadcrumbs: [HOME, { name: "Breeze Point Rooftop Bar", path: "/bar/" }],
    sitemap: { changefreq: "monthly", priority: "0.8" },
    schema: (route) => [hotelNode(), barNode(), webPageNode({ route, about: BAR_ID }), ...withFaq(route, BAR_FAQS)],
  },
  {
    path: "/banquets/",
    outFile: "banquets/index.html",
    component: BanquetsPage,
    title: "Gala Vista Banquet Halls Hubballi | Radiant Vista",
    description:
      "Gala Vista banquet halls at Radiant Vista, Hubballi: Gala Vista I for weddings and receptions, Gala Vista II for conferences, with on-site catering.",
    og: { type: "website", image: "/images/gala-vista-banquet-hall-stage.webp", alt: "Gala Vista banquet hall at Radiant Vista, Hubballi" },
    twitter: { imageAlt: "Gala Vista banquet halls in Hubballi" },
    breadcrumbs: [HOME, { name: "Gala Vista Banquets", path: "/banquets/" }],
    sitemap: { changefreq: "monthly", priority: "0.8" },
    schema: (route) => [hotelNode(), ...venueNodes(), webPageNode({ route, about: VENUE_ID }), ...withFaq(route, BANQUET_FAQS)],
  },
  {
    path: "/gallery/",
    outFile: "gallery/index.html",
    component: GalleryPage,
    title: "Photo Gallery | Hotel Radiant Vista Hubballi",
    description:
      "View photos of Radiant Vista, Hubballi. Explore our designer rooms, Brick and Brew dining, Breeze Point rooftop bar, and Gala Vista banquet venues.",
    og: { type: "website", image: "/images/hotel-facade-night-radiant-vista-hubballi.webp", alt: "Radiant Vista hotel facade at night, Hubballi" },
    twitter: { imageAlt: "Radiant Vista hotel photo gallery" },
    breadcrumbs: [HOME, { name: "Photo Gallery", path: "/gallery/" }],
    sitemap: { changefreq: "monthly", priority: "0.7" },
    schema: (route) => [
      hotelNode(),
      webPageNode({ route }),
      {
        "@type": "ImageGallery",
        "@id": `${SITE_URL}/gallery/#gallery`,
        name: "Radiant Vista photo gallery",
        url: `${SITE_URL}/gallery/`,
        about: { "@id": `${SITE_URL}/#hotel` },
        image: GALLERY_ALL_IMAGES.map((im) => ({
          "@type": "ImageObject",
          contentUrl: SITE_URL + stableImage(im.src),
          name: im.title,
          caption: im.caption || im.alt,
        })),
      },
    ],
  },
];

// Content pages from src/content/pages.js
const contentRoute = (page, extraSchema = () => []) => ({
  path: page.path,
  outFile: `${page.path.replace(/^\//, "")}index.html`,
  component: () => <ContentPage page={page} />,
  title: page.title,
  description: page.description,
  noindex: !!page.draft,
  og: { type: "website", image: page.og.image, alt: page.og.alt },
  twitter: { imageAlt: page.og.alt },
  breadcrumbs: page.breadcrumbs,
  sitemap: page.draft ? null : { changefreq: "monthly", priority: "0.7" },
  schema: (route) => [
    hotelNode(),
    webPageNode({ route, type: page.schemaType || "WebPage" }),
    ...extraSchema(route),
    ...withFaq(route, page.faqs),
  ],
});

const venueById = (id) => () => venueNodes().filter((n) => n["@id"] === HALL_IDS[id] || n["@id"] === VENUE_ID);

const CONTENT_ROUTES = [
  contentRoute(PAGES.about),
  contentRoute(PAGES.contact),
  contentRoute(PAGES.airport),
  contentRoute(PAGES.corporate),
  contentRoute(PAGES.weddings, venueById("galaVista1")),
  contentRoute(PAGES.conferences, venueById("galaVista2")),
  contentRoute(PAGES.guide, () => {
    const places = NEARBY_PLACES.filter((p) => !["airport", "railway"].includes(p.key));
    return [
      {
        "@type": "ItemList",
        "@id": `${SITE_URL}/hubballi-guide/#places`,
        name: "Places to visit in Hubballi",
        itemListElement: places.map((p, i) => ({ "@type": "ListItem", position: i + 1, item: touristAttractionNode(p, i) })),
      },
    ];
  }),
  contentRoute(PAGES.privacy),
  contentRoute(PAGES.terms),
  contentRoute(PAGES.cancellation),
];

const NOT_FOUND = {
  path: "/404/",
  outFile: "404.html",
  component: NotFoundPage,
  noindex: true,
  title: "Page Not Found | Radiant Vista Hubballi",
  description:
    "The page you were looking for does not exist. Explore rooms, dining, the rooftop bar and banquet halls at Radiant Vista, Gokul Road, Hubballi.",
  og: { type: "website", image: "/images/radiant-vista-hotel-exterior-night.jpg", alt: "Radiant Vista hotel in Hubballi" },
  twitter: { imageAlt: "Radiant Vista hotel in Hubballi" },
  sitemap: null,
  schema: () => [],
};

export const ROUTES = [...CORE_ROUTES, ...CONTENT_ROUTES, NOT_FOUND];

export const findRoute = (path) => ROUTES.find((r) => r.path === path) || NOT_FOUND;
