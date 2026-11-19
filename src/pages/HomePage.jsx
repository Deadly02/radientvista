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
import { ANSWER_SUMMARY, HOME_FAQS, NEARBY_PLACES, ROOMS, placeDistance } from "../data/content";
import { HowToReach, MapEmbed } from "../components/location";
import { ADDRESS_LINE, EMAIL, PHONES, RESAVENUE_URL, WA_MESSAGES, waLink } from "../data/site";
import { Section } from "../components/Section";
import { ImageSlider } from "../components/ImageSlider";
import { WhatsAppIcon } from "../components/icons";
import { Carousel3D } from "../components/Carousel3D";
import { FacilitiesSection } from "../components/FacilitiesSection";
import { ContactSection } from "../components/ContactSection";
import { FaqSection } from "../components/FaqSection";
import { imgProps } from "../lib/img";

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
            {...imgProps(slide.image, "100vw")}
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
            The hotel is designed for corporate travellers, families and anyone in the city for a celebration. It brings
            the efficiency of a business hotel together with the warmth of a place to relax.
</p>
          <p className="text-gray-600 leading-relaxed text-lg">
            You will find designer rooms, two places to eat and drink, the{" "}
            <a href="#dining" className="text-hubli-earth font-semibold hover:underline">
              Brick and Brew restaurant
            </a>{" "}
            and the{" "}
            <a href="#breeze-point" className="text-hubli-earth font-semibold hover:underline">
              Breeze Point rooftop bar
            </a>
            , and the{" "}
            <a href="#gala-vista" className="text-hubli-earth font-semibold hover:underline">
              Gala Vista
            </a>{" "}
            halls for banquets and conferences. The front desk is open around the clock.
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
            {...imgProps(ABOUT_IMAGE, "(min-width: 1024px) 50vw, 100vw")}
            alt="Radiant Vista hotel on Gokul Road in Hubballi"
            className="rounded-lg w-full h-[400px] md:h-[500px] object-cover object-[25%_center] transition-transform duration-500 group-hover:scale-105"
            loading="lazy"
            decoding="async"
          />
        </div>
      </div>
    </div>
  </Section>
);

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
          Choose from three room types, each set up for a good night's sleep and a productive day. Every room has
          individually controlled air conditioning, a 42-inch Smart TV, a hot water kettle and high-speed Wi-Fi, and the
          building is secured by CCTV.
</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {ROOMS.map((room) => (
          <div
            className="group bg-hubli-light rounded-lg overflow-hidden shadow-md card-hover-lift transition-all duration-300"
            key={room.id}
          >
            <ImageSlider images={room.images} alt={room.alt} className="h-64" sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw" />
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
        Whether you are in town for a conference, a one-night stopover or a family trip, the hotel's location on Gokul
        Road keeps the airport and the city within easy reach.
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
            sizes="(min-width: 1024px) 50vw, 100vw"
          />
          <div className="grid grid-cols-2 gap-4">
            <div className="rounded-lg overflow-hidden shadow-md h-36 bg-hubli-dark flex items-center justify-center p-4">
              <img
                {...imgProps(VENUE_IMAGES.brickAndBrew, "200px")}
                alt="Brick and Brew logo emblem"
                className="max-h-full max-w-full w-auto h-auto object-contain"
                loading="lazy"
                decoding="async"
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
            Brick and Brew is the hotel's in-house restaurant. It serves nostalgic Indian favourites with a bold, modern
            edge, for hotel guests and local food lovers alike.
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
            It is an easy choice for a family meal, a business lunch or dinner with colleagues, a short drive from Inorbit
            Mall.
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
            Breeze Point is the hotel's rooftop bar and restaurant. The open roof catches the evening breeze and looks out
            over the city, which makes it a relaxed spot for dinner, drinks and catching up with friends.
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
          sizes="(min-width: 1024px) 50vw, 100vw"
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
              Gala Vista is the hotel's events venue. It handles intimate business meetings and large celebrations with
              equal care, across two dedicated halls:
</p>
            <div className="space-y-4 mb-8">
              <div className="flex items-center gap-4 bg-white/5 p-4 rounded-lg border border-white/5 card-hover-lift">
                <Users className="text-hubli-sunset w-6 h-6 flex-shrink-0" />
                <div>
                  <h4 className="font-bold text-lg">
                    <a href="/banquets/weddings/" className="hover:text-hubli-sunset transition-colors">
                      Gala Vista I — Grand Banquet Hall
                    </a>
                  </h4>
                  <p className="text-sm text-gray-400">
                    A spacious banquet hall for weddings, receptions, engagements and family celebrations, with elegant
                    decor and attentive service.
</p>
                </div>
              </div>
              <div className="flex items-center gap-4 bg-white/5 p-4 rounded-lg border border-white/5 card-hover-lift">
                <Users className="text-hubli-sunset w-6 h-6 flex-shrink-0" />
                <div>
                  <h4 className="font-bold text-lg">
                    <a href="/banquets/conferences/" className="hover:text-hubli-sunset transition-colors">
                      {"Gala Vista II — Conference & Event Space"}
                    </a>
                  </h4>
                  <p className="text-sm text-gray-400">
                    A conference and event space for business meetings, seminars, presentations and corporate dinners,
                    with high-speed Wi-Fi and presentation connectivity.
</p>
                </div>
              </div>
            </div>
            <p className="text-gray-300 mb-8 leading-relaxed">
              Both halls are supported by on-site catering and an events team who look after the arrangements from start to
              finish.
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
            <ImageSlider images={HALL_IMAGES} alt="Gala Vista banquet hall at Radiant Vista in Hubballi" className="w-full h-full" sizes="(min-width: 768px) 50vw, 100vw" />
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
          The hotel's location on Gokul Road puts shopping, transport and the city's best-known sights within easy reach:
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
            {placeDistance(place.key) && <p className="text-hubli-earth text-xs font-semibold mt-2">{placeDistance(place.key)}</p>}
          </li>
        ))}
      </ul>
      <p className="text-gray-600 leading-relaxed text-center max-w-4xl mx-auto mt-10 text-sm">
        For opening times, tips and more places to visit, see our{" "}
        <a href="/hubballi-guide/" className="text-hubli-earth font-semibold hover:underline">
          Hubballi guide
        </a>
        .
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
          <MapEmbed className="absolute inset-0" />
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
            The hotel is in Akshay Park on Gokul Road, the main road to Hubballi Airport. Here is how to reach us:
</p>
          <HowToReach />
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
