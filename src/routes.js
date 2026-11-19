// The one route config. build.mjs writes every <head> and body from this list,
// and the client hydrates the matching component. Do not write head tags anywhere else.
import { HomePage } from "./pages/HomePage";
import { RoomsPage } from "./pages/RoomsPage";
import { DiningPage } from "./pages/DiningPage";
import { BarPage } from "./pages/BarPage";
import { BanquetsPage } from "./pages/BanquetsPage";
import { GalleryPage } from "./pages/GalleryPage";
import { NotFoundPage } from "./pages/NotFoundPage";
import { HERO_SLIDES } from "./data/images";
import { ANSWER_SUMMARY, HOME_FAQS, ROOMS_FAQS } from "./data/content";
import { SITE_URL } from "./data/site";
import {
  barNode,
  faqNode,
  hotelNode,
  hotelRoomNode,
  hotelStubNode,
  restaurantNode,
  venueNode,
  webPageNode,
  websiteNode,
} from "./seo/schema";

const HOME = { name: "Home", path: "/" };

export const ROUTES = [
  {
    path: "/",
    outFile: "index.html",
    component: HomePage,
    title: "Radiant Vista | Business Hotel in Hubballi, Gokul Road",
    description:
      "Stay at Radiant Vista on Gokul Road, Hubballi. Enjoy premium rooms, Brick and Brew dining, Breeze Point rooftop bar, and Gala Vista banquet venues.",
    og: {
      type: "website",
      image: "/images/abt1.jpg",
      width: 1200,
      height: 630,
      alt: "Radiant Vista Hotel in Hubballi, Karnataka",
    },
    twitter: { imageAlt: "Radiant Vista Hotel in Hubballi" },
    preloadImage: HERO_SLIDES[0].image,
    sitemap: { changefreq: "daily", priority: "1.0" },
    schema: () => [
      hotelNode(),
      restaurantNode({
        id: `${SITE_URL}/#brick-and-brew`,
        alternateName: ["Brick and Brew Hubballi", "Brick and Brew Hubli", "Brick and Brew Restaurant", "Brick and Brew Radiant Vista"],
        description:
          "Brick and Brew is the dining restaurant at Radiant Vista on Gokul Road, Akshay Park, Hubballi, serving nostalgic food favourites with a modern twist for hotel guests and visitors.",
      }),
      barNode({
        id: `${SITE_URL}/#breeze-point`,
        type: "BarOrPub",
        description:
          "Breeze Point is the rooftop bar and restaurant at Radiant Vista on Gokul Road, Akshay Park, Hubballi, offering an open-roof ambience, curated cocktails, savoury dishes, and panoramic city views.",
      }),
      venueNode({
        id: `${SITE_URL}/#gala-vista`,
        logo: true,
        alternateName: [
          "Gala Vista Hubballi",
          "Gala Vista Hubli",
          "Gala Vista Banquet Hall",
          "Gala Vista Event Venue",
          "Gala Vista Conference Venue",
          "Gala Vista at Radiant Vista",
        ],
        description:
          "Gala Vista is the premier banquet and event venue at Radiant Vista on Gokul Road, Hubballi, featuring Gala Vista I (Grand Banquet Hall) and Gala Vista II (Conference & Event Space) for weddings, receptions, corporate conferences, and business meetings.",
      }),
      websiteNode(),
      webPageNode({
        path: "/",
        name: "Radiant Vista | Business Hotel in Hubballi (Hubli)",
        description: ANSWER_SUMMARY,
        speakable: ["#answer-summary", "#nearby-places", "#faq"],
      }),
      faqNode({ path: "/", faqs: HOME_FAQS }),
    ],
  },
  {
    path: "/rooms/",
    outFile: "rooms/index.html",
    component: RoomsPage,
    title: "Rooms & Suites in Hubballi | Hotel Radiant Vista",
    description:
      "Book luxury Classic, Premium, and Suite rooms at Radiant Vista, Hubballi. Includes individual AC, 42-inch Smart TVs, high-speed Wi-Fi, and room service.",
    og: {
      type: "website",
      image: "/images/classic1_result.webp",
      width: 1200,
      height: 630,
      alt: "Classic Room accommodation at Radiant Vista in Hubballi",
    },
    twitter: { imageAlt: "Hotel rooms at Radiant Vista Hubballi" },
    breadcrumbs: [HOME, { name: "Rooms & Suites", path: "/rooms/" }],
    sitemap: { changefreq: "weekly", priority: "0.9" },
    schema: () => [
      hotelStubNode({ alternateName: ["Hotel Radiant Vista", "Radiant Vista Hubballi", "Radiant Vista Hubli"], email: true }),
      webPageNode({
        type: "ItemPage",
        path: "/rooms/",
        name: "Hotel Rooms & Suites in Hubballi (Hubli) | Radiant Vista Accommodation",
        description:
          "Rooms and suites at Radiant Vista on Gokul Road, Akshay Park, Hubballi. Features Classic Room, Premium Room, and luxury Suite accommodation.",
      }),
      hotelRoomNode({
        name: "Classic Room",
        description:
          "Designer room equipped with individually controlled air conditioning, 42-inch Smart TV, hot water kettle, work desk, and high-speed Wi-Fi.",
        image: "/images/classic1_result.webp",
        maxOccupancy: 2,
        bed: { numberOfBeds: 1, typeOfBed: "Double Bed" },
        features: ["Individually Controlled AC", "42-inch Smart TV", "Hot Water Kettle", "High-Speed Wi-Fi"],
      }),
      hotelRoomNode({
        name: "Premium Room",
        description:
          "Spacious accommodation featuring premium interiors, mini fridge, executive work desk, safe deposit locker, individually controlled air conditioning, and 42-inch Smart TV.",
        image: "/images/premium_result.webp",
        maxOccupancy: 2,
        features: ["Mini Fridge", "Safe Deposit Locker", "Executive Work Desk", "Individually Controlled AC", "42-inch Smart TV"],
      }),
      hotelRoomNode({
        name: "Suite",
        description:
          "Expansive luxury living space with separate lounge area, designer interiors, satellite cable television, mini fridge, safe deposit locker, and business amenities.",
        image: "/images/suite1_result.webp",
        maxOccupancy: 3,
        features: ["Separate Lounge Area", "Designer Interiors", "Satellite Television", "Mini Fridge & Safe Locker"],
      }),
      faqNode({ path: "/rooms/", faqs: ROOMS_FAQS }),
    ],
  },
  {
    path: "/dining/",
    outFile: "dining/index.html",
    component: DiningPage,
    title: "Brick and Brew Restaurant Hubballi | Radiant Vista",
    description:
      "Dine at Brick and Brew, Radiant Vista, Hubballi. Savor regional Indian cuisine, continental dishes, and chef specials in a cozy retro dining setting.",
    og: {
      type: "restaurant.restaurant",
      image: "/images/brick.png",
      width: 1200,
      height: 630,
      alt: "Brick and Brew restaurant at Radiant Vista in Hubballi",
    },
    twitter: { imageAlt: "Brick and Brew restaurant in Hubballi" },
    breadcrumbs: [HOME, { name: "Brick and Brew Dining", path: "/dining/" }],
    sitemap: { changefreq: "weekly", priority: "0.8" },
    schema: () => [
      hotelStubNode(),
      restaurantNode({
        id: `${SITE_URL}/dining/#restaurant`,
        alternateName: ["Brick and Brew Hubballi", "Brick and Brew Hubli", "Brick and Brew Restaurant", "Brick and Brew Radiant Vista"],
        description:
          "Brick and Brew is the distinctive in-house dining restaurant at Radiant Vista on Gokul Road, Akshay Park, Hubballi, serving nostalgic food favourites with a bold modern edge in an energetic retro Bollywood atmosphere.",
      }),
      webPageNode({
        type: "ItemPage",
        path: "/dining/",
        name: "Brick and Brew Restaurant in Hubballi | Dining at Radiant Vista",
        description:
          "Dining at Brick and Brew restaurant on Gokul Road, Akshay Park, Hubballi. Features retro Bollywood beats, nostalgic flavours, and WhatsApp table enquiries.",
        about: `${SITE_URL}/dining/#restaurant`,
      }),
    ],
  },
  {
    path: "/bar/",
    outFile: "bar/index.html",
    component: BarPage,
    title: "Breeze Point Rooftop Bar Hubballi | Radiant Vista",
    description:
      "Unwind at Breeze Point Rooftop Bar & Restaurant in Hubballi. Enjoy panoramic city views, handcrafted cocktails, mocktails, and open-air skyline dining.",
    og: {
      type: "restaurant.restaurant",
      image: "/images/g6_result.webp",
      width: 1200,
      height: 630,
      alt: "Breeze Point rooftop bar at Radiant Vista in Hubballi",
    },
    twitter: { imageAlt: "Breeze Point rooftop bar in Hubballi" },
    breadcrumbs: [HOME, { name: "Breeze Point Rooftop Bar", path: "/bar/" }],
    sitemap: { changefreq: "weekly", priority: "0.8" },
    schema: () => [
      hotelStubNode(),
      barNode({
        id: `${SITE_URL}/bar/#bar`,
        type: ["BarOrPub", "Restaurant"],
        description:
          "Breeze Point is the rooftop bar and restaurant at Radiant Vista on Gokul Road, Akshay Park, Hubballi, featuring an open-roof ambiance, classic curated cocktails, savoury dishes, and panoramic skyline views.",
      }),
      webPageNode({
        type: "ItemPage",
        path: "/bar/",
        name: "Breeze Point Rooftop Bar & Restaurant in Hubballi | Radiant Vista",
        description:
          "Breeze Point rooftop bar and restaurant at Radiant Vista, Hubballi. Features open-roof dining, skyline views, and WhatsApp table enquiries.",
        about: `${SITE_URL}/bar/#bar`,
      }),
    ],
  },
  {
    path: "/banquets/",
    outFile: "banquets/index.html",
    component: BanquetsPage,
    title: "Gala Vista Banquet Halls Hubballi | Radiant Vista",
    description:
      "Host weddings, conferences, and corporate events at Gala Vista, Hubballi. Modern audiovisual tech, custom catering, and dedicated event support.",
    og: {
      type: "website",
      image: "/images/g3_result.webp",
      width: 1200,
      height: 630,
      alt: "Gala Vista banquet hall at Radiant Vista in Hubballi",
    },
    twitter: { imageAlt: "Gala Vista banquet halls in Hubballi" },
    breadcrumbs: [HOME, { name: "Gala Vista Banquets", path: "/banquets/" }],
    sitemap: { changefreq: "weekly", priority: "0.8" },
    schema: () => [
      hotelStubNode(),
      venueNode({
        id: `${SITE_URL}/banquets/#venue`,
        alternateName: ["Gala Vista Hubballi", "Gala Vista Hubli", "Gala Vista Banquets", "Gala Vista Banquet Hall", "Gala Vista Conference Venue"],
        description:
          "Gala Vista is the premier banquet and conference venue at Radiant Vista on Gokul Road, Hubballi, featuring Gala Vista I (Grand Banquet Hall) and Gala Vista II (Conference & Event Space) for weddings, marriage receptions, corporate seminars, and conferences.",
      }),
      webPageNode({
        type: "ItemPage",
        path: "/banquets/",
        name: "Gala Vista Banquet Halls & Conference Venues in Hubballi | Radiant Vista",
        description:
          "Gala Vista banquet and conference venue at Radiant Vista, Hubballi. Features Gala Vista I and Gala Vista II with WhatsApp event enquiries.",
        about: `${SITE_URL}/banquets/#venue`,
      }),
    ],
  },
  {
    path: "/gallery/",
    outFile: "gallery/index.html",
    component: GalleryPage,
    title: "Photo Gallery | Hotel Radiant Vista Hubballi",
    description:
      "View photos of Radiant Vista, Hubballi. Explore our designer rooms, Brick and Brew dining, Breeze Point rooftop bar, and Gala Vista banquet venues.",
    og: {
      type: "website",
      image: "/images/gallery/abt_result.webp",
      width: 1200,
      height: 800,
      alt: "Radiant Vista hotel exterior facade in Hubballi",
    },
    twitter: { imageAlt: "Radiant Vista Hotel photo gallery" },
    breadcrumbs: [HOME, { name: "Photo Gallery", path: "/gallery/" }],
    sitemap: { changefreq: "weekly", priority: "0.8" },
    schema: () => [
      hotelStubNode(),
      {
        "@type": "ImageGallery",
        "@id": `${SITE_URL}/gallery/#gallery`,
        name: "Radiant Vista Hotel Photo Gallery",
        url: `${SITE_URL}/gallery/`,
        description:
          "Comprehensive photograph collection of Radiant Vista hotel in Hubballi, showcasing rooms, restaurant, rooftop restobar, and banquet facilities.",
        provider: { "@id": `${SITE_URL}/#hotel` },
      },
    ],
  },
  {
    path: "/404/",
    outFile: "404.html",
    component: NotFoundPage,
    noindex: true,
    title: "Page Not Found | Radiant Vista Hubballi",
    description:
      "The page you were looking for does not exist. Explore rooms, dining, the rooftop bar and banquet halls at Radiant Vista, Gokul Road, Hubballi.",
    og: { type: "website", image: "/images/abt1.jpg", width: 1200, height: 630, alt: "Radiant Vista Hotel in Hubballi, Karnataka" },
    twitter: { imageAlt: "Radiant Vista Hotel in Hubballi" },
    schema: () => [],
  },
];

export const findRoute = (path) => ROUTES.find((r) => r.path === path) || ROUTES.find((r) => r.path === "/404/");
