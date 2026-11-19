import * as React from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  Coffee,
  GlassWater,
  Lock,
  MapPin,
  Navigation,
  PartyPopper,
  Projector,
  Tv,
  Users,
  Utensils,
  Wifi,
  Wind,
} from "lucide-react";
import {
  ABOUT_IMAGE,
  BAR_IMAGES,
  DINING_IMAGES,
  GALLERY_ALL_IMAGES,
  GALLERY_CAROUSEL_IMAGES,
  HALL_IMAGES,
  HERO_SLIDES,
  ROOM_IMAGES,
  VENUE_IMAGES,
} from "../data/images";
import { ANSWER_SUMMARY, HOME_FAQS, NEARBY_PLACES } from "../data/content";
import { ADDRESS_LINE, EMAIL, PHONES, RESAVENUE_URL, WA_MESSAGES, waLink } from "../data/site";
import { Section } from "../components/Section";
import { ImageSlider } from "../components/ImageSlider";
import { WhatsAppIcon } from "../components/icons";
import { Carousel3D } from "../components/Carousel3D";
import { FacilitiesSection } from "../components/FacilitiesSection";
import { ContactSection } from "../components/ContactSection";
import { FaqSection } from "../components/FaqSection";

const EYEBROW = "text-hubli-sunset font-bold tracking-widest uppercase text-sm";
const WA_BUTTON =
  "inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-[#25D366] text-white font-bold rounded-sm hover:bg-[#20bd5a] transition-all shadow-md btn-hover-effect text-sm uppercase tracking-wider";
const OUTLINE_BUTTON =
  "inline-flex items-center justify-center gap-2 px-6 py-3.5 border-2 border-hubli-earth text-hubli-earth font-bold rounded-sm hover:bg-hubli-earth hover:text-white transition-all shadow-sm btn-hover-effect text-sm uppercase tracking-wider group";

// Hero Slider. Slide 1 is rendered on the server with no entrance start state; the single
// page <h1> sits above the rotating captions, which are plain paragraphs.
export const HeroSlider = () => {
  const [curr, setCurr] = React.useState(0);
  const [rotated, setRotated] = React.useState(false);
  const go = (fn) => {
    setRotated(true);
    setCurr(fn);
  };
  React.useEffect(() => {
    if (window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches) return undefined;
    const timer = setInterval(() => go((prev) => (prev + 1) % HERO_SLIDES.length), 3000);
    return () => clearInterval(timer);
  }, []);
  const next = () => go((prev) => (prev + 1) % HERO_SLIDES.length);
  const prev = () => go((prev) => (prev - 1 + HERO_SLIDES.length) % HERO_SLIDES.length);
  const slide = HERO_SLIDES[curr];
  const enter = (delay) => ({
    initial: rotated ? { y: 30, opacity: 0 } : false,
    animate: { y: 0, opacity: 1 },
    transition: { duration: 0.8, delay },
  });
  return (
    <section id="home" aria-labelledby="page-title" className="relative h-screen w-full overflow-hidden bg-hubli-dark">
      <AnimatePresence mode="wait" initial={false}>
        <motion.div
          key={curr}
          initial={{ opacity: 0, scale: 1.08 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.2 }}
          className="absolute inset-0"
        >
          <div className="absolute inset-0 bg-black/45 z-10" />
          <img
            src={slide.image}
            alt={slide.alt || slide.title}
            className="w-full h-full object-cover"
            loading="eager"
            fetchPriority={curr === 0 ? "high" : "auto"}
          />
        </motion.div>
      </AnimatePresence>
      <div className="absolute inset-0 z-20 flex items-center justify-center text-center px-4">
        <div className="max-w-4xl space-y-6">
          <h1 id="page-title" className="text-hubli-sunset font-bold tracking-[0.2em] uppercase text-sm md:text-base drop-shadow">
            Radiant Vista – Business Hotel in Hubballi
          </h1>
          <motion.p
            key={`title-${curr}`}
            {...enter(0.2)}
            className="text-4xl md:text-6xl lg:text-7xl font-serif text-white font-bold leading-tight drop-shadow-lg"
          >
            {slide.title}
          </motion.p>
          <motion.p key={`sub-${curr}`} {...enter(0.4)} className="text-lg md:text-2xl text-gray-200 font-light">
            {slide.subtitle}
          </motion.p>
          <motion.div key={`btn-${curr}`} {...enter(0.6)} className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
            <a
              href={RESAVENUE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-hubli-sunset text-white font-bold rounded-sm hover:bg-orange-700 transition-all shadow-lg flex items-center justify-center gap-2 group btn-hover-effect uppercase tracking-wider text-sm"
            >
              Book Now
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1.5 transition-transform duration-300" />
            </a>
          </motion.div>
        </div>
      </div>
      <button
        type="button"
        onClick={prev}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-30 p-2.5 rounded-full bg-black/30 hover:bg-black/60 text-white backdrop-blur-sm transition-all hidden md:block cursor-pointer"
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-7 h-7" />
      </button>
      <button
        type="button"
        onClick={next}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-30 p-2.5 rounded-full bg-black/30 hover:bg-black/60 text-white backdrop-blur-sm transition-all hidden md:block cursor-pointer"
        aria-label="Next slide"
      >
        <ChevronRight className="w-7 h-7" />
      </button>
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-30 flex items-center gap-2">
        {HERO_SLIDES.map((_, idx) => (
          <button
            type="button"
            onClick={() => go(() => idx)}
            className={`h-2 rounded-full transition-all duration-300 ${idx === curr ? "w-8 bg-hubli-sunset" : "w-2 bg-white/60 hover:bg-white"}`}
            aria-label={`Go to slide ${idx + 1}`}
            key={idx}
          />
        ))}
      </div>
    </section>
  );
};

// About Us Section (holds the answer-style summary used by the WebPage JSON-LD)
export const AboutSection = () => (
  <Section id="about" labelledBy="about-title" className="bg-hubli-light">
    <div className="container mx-auto px-4 md:px-6">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        <div className="space-y-6">
          <span className={EYEBROW}>About Us</span>
          <h2 id="about-title" className="text-4xl md:text-5xl font-serif text-hubli-green font-bold leading-tight">
            About Radiant Vista – <span className="italic text-hubli-earth">Business Hotel in Hubballi</span>
          </h2>
          <p id="answer-summary" className="text-gray-700 leading-relaxed text-lg">
            {ANSWER_SUMMARY}
          </p>
          <p className="text-gray-600 leading-relaxed text-lg">
            Radiant Vista is a modern business hotel and leisure travel destination situated on Gokul Road in Akshay
            Park, Hubballi (Hubli), Karnataka. Designed for corporate executives, families, and leisure travelers seeking
            quality accommodation in Hubballi, the hotel offers a seamless blend of professional excellence and relaxed
            hospitality.
          </p>
          <p className="text-gray-600 leading-relaxed text-lg">
            Centrally positioned near Hubballi Airport, major transport terminals, and commercial centers, Radiant Vista
            provides guests with designer hotel rooms, multiple dining venues including{" "}
            <a href="#dining" className="text-hubli-earth font-semibold hover:underline">
              Brick and Brew restaurant
            </a>{" "}
            and{" "}
            <a href="#breeze-point" className="text-hubli-earth font-semibold hover:underline">
              Breeze Point rooftop bar
            </a>
            , versatile banqueting and conference facilities at{" "}
            <a href="#gala-vista" className="text-hubli-earth font-semibold hover:underline">
              Gala Vista
            </a>
            , and attentive round-the-clock service. Whether visiting Hubli for corporate meetings or exploring the
            heritage of Karnataka, Radiant Vista is one of the premier places to stay in Hubballi.
          </p>
          <div className="grid grid-cols-2 gap-6 pt-4">
            <div className="border-l-4 border-hubli-sunset pl-4">
              <h3 className="font-bold text-xl text-hubli-dark">Premium Stay</h3>
              <p className="text-sm text-gray-500">Designer rooms with modern amenities.</p>
            </div>
            <div className="border-l-4 border-hubli-sunset pl-4">
              <h3 className="font-bold text-xl text-hubli-dark">{"Dining & Events"}</h3>
              <p className="text-sm text-gray-500">{"Multiple dining options & Banqueting."}</p>
            </div>
          </div>
        </div>
        <div className="relative img-hover-zoom rounded-lg overflow-hidden group shadow-2xl">
          <div className="absolute -inset-4 bg-hubli-earth/10 rounded-lg -z-10 rotate-3" />
          <img
            src={ABOUT_IMAGE}
            alt="Radiant Vista hotel on Gokul Road in Hubballi"
            className="rounded-lg w-full h-[400px] md:h-[500px] object-cover object-[25%_center] transition-transform duration-500 group-hover:scale-105"
            loading="lazy"
          />
        </div>
      </div>
    </div>
  </Section>
);

// Rooms shown on the home page
export const HOME_ROOMS = [
  {
    id: "classic",
    title: "Classic Room",
    alt: "Classic room accommodation at Radiant Vista hotel in Hubballi",
    images: ROOM_IMAGES.classic,
    description:
      "Designer room equipped with individually controlled air conditioning, 42-inch Smart TV, hot water kettle, work desk, and contemporary bathroom amenities.",
  },
  {
    id: "premium",
    title: "Premium Room",
    alt: "Premium room at Radiant Vista business hotel in Hubballi",
    images: ROOM_IMAGES.premium,
    description:
      "Spacious accommodation in Hubballi featuring premium interiors, mini fridge, executive work desk, safe deposit locker, and refined comforts.",
  },
  {
    id: "suite",
    title: "Suite",
    alt: "Luxury suite accommodation at Radiant Vista hotel in Hubballi",
    images: ROOM_IMAGES.suite,
    description:
      "Expansive living space with designer interiors, separate lounge area, satellite television, premium guest amenities, and upscale business comfort.",
  },
];

// Rooms Preview Section on Homepage
export const RoomsPreview = () => (
  <Section id="rooms" labelledBy="rooms-title" className="bg-white">
    <div className="container mx-auto px-4 md:px-6">
      <div className="text-center mb-16 max-w-2xl mx-auto">
        <span className={EYEBROW}>Accommodation</span>
        <h2 id="rooms-title" className="text-4xl font-serif text-hubli-green font-bold mt-2">
          {"Rooms & Suites – Hotel Rooms in Hubballi"}
        </h2>
        <p className="text-gray-600 mt-4">
          Looking for comfortable hotel rooms in Hubballi? Radiant Vista offers well-appointed rooms and suites in
          Hubballi tailored for restful stays and business productivity. All rooms feature individually controlled air
          conditioning, 42-inch Smart TVs, hot water kettle, and secure premises with CCTV surveillance.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {HOME_ROOMS.map((room) => (
          <div
            className="group bg-hubli-light rounded-lg overflow-hidden shadow-md card-hover-lift transition-all duration-300"
            key={room.id}
          >
            <ImageSlider images={room.images} alt={room.alt} className="h-64" />
            <div className="p-6">
              <h3 className="text-xl font-serif font-bold text-hubli-dark mb-2">{room.title}</h3>
              <p className="text-gray-500 text-sm mb-4">{room.description}</p>
              <div className="flex gap-3 mb-6 text-gray-400 flex-wrap">
                <div title="AC">
                  <Wind className="w-4 h-4" />
                </div>
                <div title="Smart TV">
                  <Tv className="w-4 h-4" />
                </div>
                <div title="WiFi">
                  <Wifi className="w-4 h-4" />
                </div>
                <div title="Safe">
                  <Lock className="w-4 h-4" />
                </div>
                <div title="Kettle">
                  <Coffee className="w-4 h-4" />
                </div>
              </div>
              <a
                href={RESAVENUE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 border border-hubli-earth text-hubli-earth font-semibold uppercase text-xs tracking-wider hover:bg-hubli-earth hover:text-white transition-colors block text-center btn-hover-effect rounded-sm"
              >
                Book Now
              </a>
            </div>
          </div>
        ))}
      </div>
      <p className="text-gray-600 text-center max-w-3xl mx-auto mt-12">
        Whether visiting Hubli for business conferences, short transit stays, or family trips, our accommodation in
        Hubballi provides complete convenience on Gokul Road in Akshay Park.
      </p>
      <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
        <a
          href="/rooms/"
          className="inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-hubli-earth text-white font-bold rounded-sm hover:bg-hubli-green transition-all shadow-md hover:shadow-lg group btn-hover-effect tracking-wide uppercase text-sm"
        >
          View All Rooms
          <ArrowRight className="w-5 h-5 group-hover:translate-x-1.5 transition-transform duration-300" />
        </a>
        <a href={waLink(WA_MESSAGES.rooms)} target="_blank" rel="noopener noreferrer" className={WA_BUTTON}>
          <WhatsAppIcon className="w-5 h-5" />
          Enquire on WhatsApp
        </a>
      </div>
    </div>
  </Section>
);

// Dining Preview Section on Homepage
export const DiningPreview = () => (
  <Section id="dining" labelledBy="dining-title" className="bg-neutral-50">
    <div className="container mx-auto px-4 md:px-6">
      <div className="text-center mb-16">
        <span className={EYEBROW}>Culinary Experience</span>
        <h2 id="dining-title" className="text-4xl md:text-5xl font-serif text-hubli-green font-bold mt-2">
          Dining – Brick and Brew Restaurant in Hubballi
        </h2>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="order-2 lg:order-1">
          <ImageSlider
            images={DINING_IMAGES}
            alt="Brick and Brew restaurant dining at Radiant Vista in Hubballi"
            className="rounded-lg shadow-xl mb-4 h-[380px]"
          />
          <div className="grid grid-cols-2 gap-4">
            <div className="rounded-lg overflow-hidden shadow-md h-36 bg-hubli-dark flex items-center justify-center p-4">
              <img
                src={VENUE_IMAGES.brickAndBrew}
                alt="Brick and Brew logo emblem"
                className="max-h-full max-w-full object-contain"
                loading="lazy"
              />
            </div>
            <div className="bg-hubli-earth rounded-lg flex items-center justify-center p-4 text-white text-center italic font-serif text-sm shadow-md">
              "It’s India but cooler, sassier, and way more Instagrammable."
            </div>
          </div>
        </div>
        <div className="order-1 lg:order-2 space-y-6">
          <div className="flex items-center gap-3">
            <Utensils className="text-hubli-sunset w-6 h-6" />
            <h3 className="text-3xl font-serif font-bold text-hubli-dark">Brick and Brew</h3>
          </div>
          <p className="text-gray-600 leading-relaxed italic font-serif text-lg">"Premium Nostalgia"</p>
          <p className="text-gray-600 leading-relaxed">
            Brick and Brew is the distinctive in-house restaurant at Radiant Vista on Gokul Road, Akshay Park, Hubballi.
            Celebrating nostalgic food favourites served with a bold, modern edge, Brick and Brew offers a memorable
            dining experience in Hubballi for resident hotel guests and local food enthusiasts alike.
          </p>
          <p className="text-gray-600 leading-relaxed">
            Walk in and you’re hit with retro Bollywood beats, earthy vibes, and comforting food favourites served with a
            bold, modern twist. Born from a love for nostalgic flavours, Brick and Brew blends the cherished tastes of the
            past with the style and spirit of today’s India.
          </p>
          <p className="text-gray-600 leading-relaxed">
            Think butter chicken that looks like a masterpiece, momos with a gourmet dimsum twist, and nani’s dal served
            with five-star plating elegance.
          </p>
          <p className="text-gray-600 leading-relaxed">
            Whether you are searching for a restaurant on Gokul Road Hubballi, a casual dining spot near Akshay Park, a
            quality hotel restaurant near Inorbit Mall Hubballi, or places to eat in Hubballi with family and colleagues,
            Brick and Brew delivers extraordinary flavours and vibrant hospitality.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <a href={waLink(WA_MESSAGES.dining)} target="_blank" rel="noopener noreferrer" className={WA_BUTTON}>
              <WhatsAppIcon className="w-5 h-5" />
              Enquire on WhatsApp
            </a>
            <a href="/dining/" className={OUTLINE_BUTTON}>
              View Dining Details
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform duration-300" />
            </a>
          </div>
        </div>
      </div>
    </div>
  </Section>
);

// Bar Preview Section on Homepage
export const BarPreview = () => (
  <Section id="breeze-point" labelledBy="breeze-point-title" className="bg-white">
    <div className="container mx-auto px-4 md:px-6">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <div className="flex items-center gap-3">
            <GlassWater className="text-hubli-sunset w-6 h-6" />
            <h2 id="breeze-point-title" className="text-3xl font-serif font-bold text-hubli-dark">
              {"Breeze Point – Rooftop Bar & Restaurant in Hubballi"}
            </h2>
          </div>
          <p className="text-gray-500 uppercase tracking-wide text-sm font-semibold">{"Rooftop Restaurant & Bar"}</p>
          <p className="text-gray-600 leading-relaxed">
            Breeze Point is the premier rooftop bar and restaurant at Radiant Vista on Gokul Road, Akshay Park, Hubballi.
            Designed with an open-roof ambience that captures refreshing evening breezes and scenic views of the Hubballi
            skyline, Breeze Point offers a relaxed setting for evening dining, social meetups, and drinks.
          </p>
          <p className="text-gray-600 leading-relaxed">
            Unwind with stunning views and a cozy ambiance at our Rooftop Bar and Restaurant. From our barman creating
            classic curated cocktails to savoury bites, each dish is thoughtfully crafted to elevate your experience.
          </p>
          <p className="text-gray-600 leading-relaxed">
            Whether you're here to relax, socialize, or host a gathering, we offer a space where memories are made. Its
            distinct spaces let you enjoy a romantic dinner date at the same time as your friends gear up for a night of
            partying.
          </p>
          <ul className="space-y-2 text-gray-700 pt-2">
            <li className="flex items-center gap-2">
              <PartyPopper className="w-4 h-4 text-hubli-sunset" /> Open-roof scenic ambience
            </li>
            <li className="flex items-center gap-2">
              <PartyPopper className="w-4 h-4 text-hubli-sunset" /> {"Distinct spaces for dates & parties"}
            </li>
            <li className="flex items-center gap-2">
              <PartyPopper className="w-4 h-4 text-hubli-sunset" /> {"Rotating selection of meals & curated drinks"}
            </li>
          </ul>
          <p className="text-gray-600 leading-relaxed">
            Guests looking for a rooftop bar on Gokul Road Hubballi, a rooftop lounge near Akshay Park, or an open-air
            restaurant and bar near Inorbit Mall Hubballi and Hubballi Airport can enjoy distinctive rooftop dining and
            drinks at Breeze Point.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <a href={waLink(WA_MESSAGES.bar)} target="_blank" rel="noopener noreferrer" className={WA_BUTTON}>
              <WhatsAppIcon className="w-5 h-5" />
              Enquire on WhatsApp
            </a>
            <a href="/bar/" className={OUTLINE_BUTTON}>
              View Bar Details
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform duration-300" />
            </a>
          </div>
        </div>
        <ImageSlider
          images={BAR_IMAGES}
          alt="Breeze Point rooftop restaurant and bar at Radiant Vista in Hubballi"
          className="rounded-lg shadow-xl h-[450px]"
        />
      </div>
    </div>
  </Section>
);

// Gala Vista Banquets Preview on Homepage
export const GalaVistaPreview = () => (
  <Section id="gala-vista" labelledBy="gala-vista-title" className="bg-hubli-dark text-white">
    <div className="container mx-auto px-4 md:px-6">
      <div className="text-center mb-16">
        <span className={EYEBROW}>Event Spaces</span>
        <h2 id="gala-vista-title" className="text-4xl md:text-5xl font-serif font-bold mt-2">
          {"Gala Vista – Banquet Halls & Event Venue in Hubballi"}
        </h2>
      </div>
      <div className="bg-white/5 border border-white/10 rounded-2xl p-8 md:p-12 overflow-hidden">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <Projector className="text-hubli-sunset w-8 h-8" />
              <h3 className="text-3xl font-serif font-bold">{"Banqueting & Conferencing at Radiant Vista"}</h3>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Gala Vista is the premier event and banquet venue at Radiant Vista on Gokul Road, Hubballi. Designed to
              accommodate intimate business meetings and grand personal celebrations with equal grace, Gala Vista provides
              two dedicated event spaces equipped for high-profile gatherings:
            </p>
            <div className="space-y-4 mb-8">
              <div className="flex items-center gap-4 bg-white/5 p-4 rounded-lg border border-white/5 card-hover-lift">
                <Users className="text-hubli-sunset w-6 h-6 flex-shrink-0" />
                <div>
                  <h4 className="font-bold text-lg">Gala Vista I — Grand Banquet Hall</h4>
                  <p className="text-sm text-gray-400">
                    A spacious banquet hall in Hubballi tailored for weddings, marriage receptions, engagement parties,
                    family celebrations, and festive banquets. Featuring sophisticated decor and attentive hospitality,
                    Gala Vista I is an ideal wedding venue in Hubballi and celebration venue on Gokul Road.
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-4 bg-white/5 p-4 rounded-lg border border-white/5 card-hover-lift">
                <Users className="text-hubli-sunset w-6 h-6 flex-shrink-0" />
                <div>
                  <h4 className="font-bold text-lg">{"Gala Vista II — Conference & Event Space"}</h4>
                  <p className="text-sm text-gray-400">
                    A versatile corporate event venue in Hubballi designed for business meetings, corporate conferences,
                    executive seminars, presentations, and corporate dinners. Gala Vista II offers modern conference
                    facilities near Akshay Park and Hubballi Airport for local and visiting business organizations.
                  </p>
                </div>
              </div>
            </div>
            <p className="text-gray-300 mb-8 leading-relaxed">
              Whether planning a wedding reception on Gokul Road Hubballi, a corporate conference venue near Akshay Park,
              or a function hall near Inorbit Mall Hubballi, Gala Vista provides professional venue coordination and
              customized event arrangements.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href={waLink(WA_MESSAGES.banquets)} target="_blank" rel="noopener noreferrer" className={WA_BUTTON}>
                <WhatsAppIcon className="w-5 h-5" />
                Enquire on WhatsApp
              </a>
              <a
                href="/banquets/"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 border-2 border-hubli-sunset text-hubli-sunset font-bold rounded-sm hover:bg-hubli-sunset hover:text-white transition-all shadow-sm btn-hover-effect text-sm uppercase tracking-wider group"
              >
                View Banquet Details
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform duration-300" />
              </a>
            </div>
          </div>
          <div className="relative h-[320px] md:h-[450px] w-full rounded-xl overflow-hidden shadow-2xl">
            <ImageSlider images={HALL_IMAGES} alt="Gala Vista banquet hall at Radiant Vista in Hubballi" className="w-full h-full" />
            <div className="absolute inset-0 bg-gradient-to-t from-hubli-dark/85 via-black/20 to-transparent flex items-end justify-center p-8 text-center pointer-events-none z-20">
              <div>
                <p className="text-2xl font-serif italic mb-1 text-white">"Gala Vista"</p>
                <p className="text-white/80 text-xs tracking-widest uppercase">Where celebrations meet grandeur</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Section>
);

// Nearby Places (speakable #nearby-places)
export const NearbyPlacesSection = () => (
  <Section id="nearby-places" labelledBy="nearby-places-title" className="bg-white">
    <div className="container mx-auto px-4 md:px-6">
      <div className="text-center mb-12 max-w-3xl mx-auto">
        <span className={EYEBROW}>Explore Hubballi</span>
        <h2 id="nearby-places-title" className="text-4xl md:text-5xl font-serif text-hubli-green font-bold mt-2">
          {"Nearby Places & Attractions in Hubballi"}
        </h2>
        <p className="text-gray-600 mt-4 leading-relaxed">
          Radiant Vista is centrally located on Gokul Road in Akshay Park, Hubballi, providing convenient access to
          shopping, transport terminals, leisure destinations, and important attractions around the city:
        </p>
      </div>
      <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
        {NEARBY_PLACES.map((place) => (
          <li
            className="bg-hubli-light rounded-lg p-6 border border-gray-100 shadow-sm card-hover-lift transition-all"
            key={place.name}
          >
            <h3 className="font-serif text-xl font-bold text-hubli-dark mb-2">{place.name}</h3>
            <p className="text-gray-600 text-sm leading-relaxed">{place.description}</p>
          </li>
        ))}
      </ul>
      <p className="text-gray-600 leading-relaxed text-center max-w-4xl mx-auto mt-10 text-sm">
        Guests searching for a <strong>hotel on Gokul Road Hubballi</strong>, accommodation near{" "}
        <strong>Akshay Park</strong>, a <strong>business hotel near Hubballi Airport</strong>, or places to stay near{" "}
        <strong>Hubballi Junction</strong> enjoy premier accessibility and hospitality at Radiant Vista.
      </p>
    </div>
  </Section>
);

// Gallery Section on Homepage (Dark Stage, 3D Carousel, Explore Button)
export const GallerySection = () => (
  <Section
    id="gallery"
    labelledBy="gallery-title"
    className="relative bg-black text-white pt-24 md:pt-32 pb-20 md:pb-28 overflow-hidden select-none scroll-mt-16"
  >
    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-neutral-900/60 via-black to-black pointer-events-none" />
    <div className="container mx-auto px-4 md:px-6 relative z-10">
      <div className="text-center mb-10 md:mb-14">
        <span className="text-hubli-sunset font-bold tracking-widest uppercase text-xs md:text-sm">Gallery</span>
        <h2 id="gallery-title" className="text-3xl md:text-5xl font-serif text-white font-bold mt-2 tracking-wide">
          Photo Gallery — Capturing Moments
        </h2>
        <p className="text-gray-400 text-sm md:text-base font-light max-w-xl mx-auto mt-3">
          Experience our 3D visual showcase and full photograph collection of Radiant Vista, including comfortable guest
          rooms, Brick and Brew restaurant, Breeze Point rooftop restobar, and Gala Vista banquets.
        </p>
        <p className="text-gray-400 text-sm md:text-base font-light max-w-xl mx-auto mt-2">
          An interactive three-dimensional glimpse into the warmth, grandeur, and hospitality of Radiant Vista.
        </p>
      </div>
      <Carousel3D images={GALLERY_CAROUSEL_IMAGES} />
      <div className="text-center mt-10 md:mt-14">
        <a
          href="/gallery/"
          className="inline-flex items-center space-x-2.5 px-8 py-3.5 bg-hubli-sunset hover:bg-hubli-earth text-white font-semibold text-sm uppercase tracking-wider rounded-sm transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-0.5 group cursor-pointer"
        >
          <span>{`Explore Full Photo Gallery (${GALLERY_ALL_IMAGES.length} Photographs)`}</span>
          <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
        </a>
      </div>
    </div>
  </Section>
);

// Location Section
export const LocationSection = () => (
  <Section id="location" labelledBy="location-title" className="bg-white">
    <div className="container mx-auto px-4 md:px-6">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 bg-hubli-light rounded-2xl overflow-hidden shadow-xl">
        <div className="h-[400px] lg:h-auto w-full relative">
          <iframe
            title="Radiant Vista Location on Gokul Road Hubballi"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3847.461623192068!2d75.1158!3d15.3524!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTXCsDIxJzA4LjYiTiA3NcKwMDYnNTYuOSJF!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
            width="100%"
            height="100%"
            style={{ border: 0, filter: "grayscale(0.2)" }}
            allowFullScreen={true}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
        <div className="p-8 lg:p-16 flex flex-col justify-center">
          <div className="flex items-center gap-3 text-hubli-sunset mb-4">
            <MapPin className="w-6 h-6" />
            <span className="uppercase tracking-widest font-bold text-sm">Getting Here</span>
          </div>
          <h2 id="location-title" className="text-3xl md:text-4xl font-serif text-hubli-dark font-bold mb-6">
            {"Location & Accessibility – Gokul Road, Hubballi"}
          </h2>
          <address className="not-italic text-gray-700 mb-6 leading-relaxed">
            <strong>Radiant Vista</strong>, {ADDRESS_LINE}, India
            <br />
            Phone:{" "}
            <a href={`tel:${PHONES.primary.tel}`} className="text-hubli-earth font-semibold hover:underline">
              {PHONES.primary.display}
            </a>
            <br />
            Email:{" "}
            <a href={`mailto:${EMAIL}`} className="text-hubli-earth font-semibold hover:underline break-all">
              {EMAIL}
            </a>
          </address>
          <p className="text-gray-600 mb-8 leading-relaxed">
            We are conveniently located in the prime commercial corridor of Akshay Park on Gokul Road, just minutes from
            Hubli Airport and major transport hubs. Experience unparalleled accessibility in Hubballi.
          </p>
          <ul className="space-y-4 text-gray-700">
            {[
              "Near Hubli Airport (Gokul Road)",
              "Located in Akshay Park Commercial Hub",
              "Convenient access to Industrial Areas & Transport Hubs",
            ].map((item) => (
              <li className="flex items-center gap-4" key={item}>
                <div className="bg-white p-2 rounded-full shadow-sm text-hubli-earth">
                  <Navigation className="w-5 h-5" />
                </div>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  </Section>
);

export const HomePage = () => (
  <main id="main">
    <HeroSlider />
    <AboutSection />
    <RoomsPreview />
    <DiningPreview />
    <BarPreview />
    <GalaVistaPreview />
    <FacilitiesSection />
    <NearbyPlacesSection />
    <GallerySection />
    <LocationSection />
    <ContactSection />
    <FaqSection faqs={HOME_FAQS} title="Frequently Asked Questions About Radiant Vista Hubballi" />
  </main>
);
