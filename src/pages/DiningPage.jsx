import { WA_PHONE } from "../data/site";
import { ImageSlider } from "../components/ImageSlider";
import { DINING_IMAGES, VENUE_IMAGES } from "../data/images";
import { WhatsAppIcon } from "../components/icons";
import { Breadcrumbs } from "../components/Breadcrumbs";
import { imgProps } from "../lib/img";

// DEDICATED DINING PAGE COMPONENT (/dining/)
export const DiningPage = () => {
  const diningMsg =
    "Hello Radiant Vista Hotel, I would like to enquire about dining at Brick and Brew. Please share the available details. Thank you.";
  const waDiningUrl = `https://wa.me/${WA_PHONE}?text=${encodeURIComponent(diningMsg)}`;
  return (
    <main id="main" className="pt-24 bg-hubli-light min-h-screen text-hubli-dark">
      {/* Hero Banner */}
      <section className="relative py-20 md:py-28 bg-hubli-dark text-white overflow-hidden">
        <div className="container mx-auto px-4 md:px-6 relative z-10 max-w-4xl text-center">
          <Breadcrumbs />
          <h1 className="text-4xl md:text-6xl font-serif font-bold text-white leading-tight mb-6">
            Brick and Brew — Vibrant Dining Restaurant in Hubballi
          </h1>
          <p className="text-gray-300 text-lg md:text-xl font-light leading-relaxed max-w-2xl mx-auto">
            Nostalgic flavours served with a bold, modern edge at Radiant Vista on Gokul Road, Hubballi.
          </p>
        </div>
      </section>
      {/* Story & Concept Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6 max-w-5xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <span className="text-hubli-sunset font-bold tracking-widest uppercase text-xs">
                Restaurant in Hubballi
              </span>
              <h2 className="text-3xl md:text-4xl font-serif text-hubli-dark font-bold leading-tight">
                Premium Nostalgia with a Modern Twist
              </h2>
              <p className="text-gray-600 leading-relaxed text-lg">
                Ever craved butter chicken that looks like a masterpiece? Or momo with a dimsum twist? Welcome
                to Brick and Brew—where every dish is a throwback to your favourite food memories, but with a
                bold, modern edge.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Walk in and you’re hit with retro Bollywood beats, earthy vibes, pomegranate motifs (that’s
                our OG inspo!), and maybe even a flaming cocktail. Born from a love for comforting food and
                the cultural quirks we all grew up with, Brick and Brew blends the flavours of the past with
                the style and spirit of today’s India.
              </p>
              <p className="text-gray-600 font-semibold italic border-l-4 border-hubli-sunset pl-4 py-1">
                Think your nani’s dal but with five-star plating twist. This is not just another restaurant;
                it's a feeling like no other. 'It’s India but cooler, sassier, and way more Instagrammable.'
              </p>
            </div>
            <div className="space-y-4">
              <ImageSlider sizes="(min-width: 1024px) 50vw, 100vw"
                images={DINING_IMAGES}
                alt="Brick and Brew restaurant dining at Radiant Vista in Hubballi"
                className="rounded-xl shadow-xl h-[380px]"
              />
              <div className="grid grid-cols-2 gap-4">
                <div className="rounded-xl overflow-hidden shadow-md h-32 bg-hubli-dark flex items-center justify-center p-4">
                  <img
                    {...imgProps(VENUE_IMAGES.brickAndBrew, "200px")}
                    alt="Brick and Brew logo emblem"
                    className="max-h-full max-w-full w-auto h-auto object-contain"
                    loading="lazy"
                    decoding="async"
                  />
                </div>
                <div className="bg-hubli-earth rounded-xl flex items-center justify-center p-4 text-white text-center italic font-serif text-sm shadow-md">
                  "Where cherished memories meet modern culinary craft."
                </div>
              </div>
            </div>
          </div>
          {/* Verified Dining Highlights Grid */}
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 rounded-lg bg-hubli-light border border-gray-100 card-hover-lift">
              <h3 className="font-serif text-xl font-bold text-hubli-green mb-2">Retro Bollywood Beats</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Energetic musical ambiance celebrating classic tunes alongside earthy decor and welcoming
                hospitality.
              </p>
            </div>
            <div className="p-6 rounded-lg bg-hubli-light border border-gray-100 card-hover-lift">
              <h3 className="font-serif text-xl font-bold text-hubli-green mb-2">Five-Star Plating</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Familiar Indian culinary favourites reimagined with artistic presentation and contemporary
                craftsmanship.
              </p>
            </div>
            <div className="p-6 rounded-lg bg-hubli-light border border-gray-100 card-hover-lift">
              <h3 className="font-serif text-xl font-bold text-hubli-green mb-2">Gokul Road Hubballi</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Conveniently located in Akshay Park inside Radiant Vista hotel, perfect for dining in
                Hubballi.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* Prominent WhatsApp Enquiry CTA */}
      <section className="py-16 bg-neutral-900 text-white text-center">
        <div className="container mx-auto px-4 md:px-6 max-w-3xl">
          <span className="text-hubli-sunset font-bold tracking-widest uppercase text-xs">
            {"Table & Dining Enquiries"}
          </span>
          <h2 className="text-3xl md:text-4xl font-serif font-bold mt-2 mb-4">
            Enquire About Dining at Brick and Brew
          </h2>
          <p className="text-gray-300 mb-8 max-w-xl mx-auto text-sm md:text-base">
            Connect directly with our dining team on WhatsApp to enquire about table availability, timings,
            and menus.
          </p>
          <a
            href={waDiningUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 bg-[#25D366] text-white font-bold rounded-sm hover:bg-[#20bd5a] transition-all shadow-lg btn-hover-effect text-sm uppercase tracking-wider"
          >
            <WhatsAppIcon className="w-5 h-5" />
            Enquire on WhatsApp (+91 91871 95517)
          </a>
        </div>
      </section>
      {/* Internal Links */}
      <section className="py-12 bg-white border-t border-gray-200">
        <div className="container mx-auto px-4 md:px-6 max-w-4xl text-center">
          <h2 className="text-xl font-serif font-bold text-hubli-dark mb-6">Explore More at Radiant Vista</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <a
              href="/bar/"
              className="p-4 bg-hubli-light rounded-lg shadow-sm hover:shadow-md transition-shadow font-semibold text-hubli-earth hover:text-hubli-sunset text-sm"
            >
              Breeze Point Rooftop Bar
            </a>
            <a
              href="/rooms/"
              className="p-4 bg-hubli-light rounded-lg shadow-sm hover:shadow-md transition-shadow font-semibold text-hubli-earth hover:text-hubli-sunset text-sm"
            >
              {"Rooms & Accommodation"}
            </a>
            <a
              href="/banquets/"
              className="p-4 bg-hubli-light rounded-lg shadow-sm hover:shadow-md transition-shadow font-semibold text-hubli-earth hover:text-hubli-sunset text-sm"
            >
              Gala Vista Banquets
            </a>
            <a
              href="/#contact"
              className="p-4 bg-hubli-light rounded-lg shadow-sm hover:shadow-md transition-shadow font-semibold text-hubli-earth hover:text-hubli-sunset text-sm"
            >
              Hotel Contact
            </a>
          </div>
        </div>
      </section>
    </main>
  );
};

