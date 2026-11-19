import { PartyPopper } from "lucide-react";
import { WA_PHONE } from "../data/site";
import { ImageSlider } from "../components/ImageSlider";
import { BAR_IMAGES } from "../data/images";
import { WhatsAppIcon } from "../components/icons";
import { Breadcrumbs } from "../components/Breadcrumbs";
import { FaqSection } from "../components/FaqSection";
import { BAR_FAQS } from "../data/content";

// DEDICATED BAR PAGE COMPONENT (/bar/)
export const BarPage = () => {
  const barMsg =
    "Hello Radiant Vista Hotel, I would like to enquire about Breeze Point Rooftop Bar and Restaurant. Please share the available details. Thank you.";
  const waBarUrl = `https://wa.me/${WA_PHONE}?text=${encodeURIComponent(barMsg)}`;
  return (
    <main id="main" className="pt-24 bg-hubli-light min-h-screen text-hubli-dark">
      {/* Hero Banner */}
      <section className="relative py-20 md:py-28 bg-hubli-dark text-white overflow-hidden">
        <div className="container mx-auto px-4 md:px-6 relative z-10 max-w-4xl text-center">
          <Breadcrumbs />
          <h1 className="text-4xl md:text-6xl font-serif font-bold text-white leading-tight mb-6">
            Breeze Point — Rooftop Bar and Restaurant in Hubballi
          </h1>
          <p id="answer-summary" className="text-gray-300 text-lg md:text-xl font-light leading-relaxed max-w-2xl mx-auto">
            Breeze Point is the open-roof rooftop bar and restaurant at Radiant Vista in Hubballi (Hubli), serving curated
            cocktails and savoury dishes with views over the city.
</p>
        </div>
      </section>
      {/* Story & Ambience Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6 max-w-5xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <span className="text-hubli-sunset font-bold tracking-widest uppercase text-xs">
                {"Rooftop Dining & Drinks"}
              </span>
              <h2 id="unwind-with-skyline-views-cozy-ambiance" className="text-3xl md:text-4xl font-serif text-hubli-dark font-bold leading-tight">
                {"Unwind with Skyline Views & Cozy Ambiance"}
              </h2>
              <p className="text-gray-600 leading-relaxed text-lg">
                Unwind with stunning views and a cozy ambiance at our Rooftop Bar and Restaurant. From our
                barman creating classic curated cocktails to savoury bites, each dish is thoughtfully crafted
                to elevate your experience.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Whether you're here to relax, socialize, or host a gathering, we offer a space where memories
                are made. Its distinct spaces let you enjoy a romantic dinner date at the same time as your
                friends gear up for a night of partying.
              </p>
              <div className="space-y-3 pt-2">
                <div className="flex items-center gap-3 text-gray-700">
                  <PartyPopper className="w-5 h-5 text-hubli-sunset" />
                  <span className="font-semibold">Open-roof scenic skyline ambiance</span>
                </div>
                <div className="flex items-center gap-3 text-gray-700">
                  <PartyPopper className="w-5 h-5 text-hubli-sunset" />
                  <span className="font-semibold">Distinct zones for romantic dates and social parties</span>
                </div>
                <div className="flex items-center gap-3 text-gray-700">
                  <PartyPopper className="w-5 h-5 text-hubli-sunset" />
                  <span className="font-semibold">
                    Rotating selection of savoury meals and curated drinks
                  </span>
                </div>
              </div>
            </div>
            <div className="space-y-4">
              <ImageSlider sizes="(min-width: 1024px) 50vw, 100vw"
                images={BAR_IMAGES}
                alt="Breeze Point rooftop restaurant and bar at Radiant Vista in Hubballi"
                className="rounded-xl shadow-xl h-[380px]"
              />
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-hubli-dark text-white rounded-xl p-4 flex flex-col justify-center text-center shadow-md">
                  <span className="text-hubli-sunset text-xs uppercase font-bold tracking-widest">
                    Atmosphere
                  </span>
                  <span className="font-serif text-lg font-bold mt-1">Open Skyline</span>
                </div>
                <div className="bg-hubli-earth text-white rounded-xl p-4 flex flex-col justify-center text-center shadow-md">
                  <span className="text-amber-200 text-xs uppercase font-bold tracking-widest">
                    Experience
                  </span>
                  <span className="font-serif text-lg font-bold mt-1">{"Cocktails & Dining"}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Prominent WhatsApp Enquiry CTA */}
      <section className="py-16 bg-neutral-900 text-white text-center">
        <div className="container mx-auto px-4 md:px-6 max-w-3xl">
          <span className="text-hubli-sunset font-bold tracking-widest uppercase text-xs">
            {"Reservations & Enquiries"}
          </span>
          <h2 id="enquire-about-breeze-point-rooftop-bar" className="text-3xl md:text-4xl font-serif font-bold mt-2 mb-4">
            Enquire About Breeze Point Rooftop Bar
          </h2>
          <p className="text-gray-300 mb-8 max-w-xl mx-auto text-sm md:text-base">
            Connect directly with our hotel team on WhatsApp for table enquiries, timings, and rooftop
            bookings.
          </p>
          <a
            href={waBarUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 bg-[#25D366] text-white font-bold rounded-sm hover:bg-[#20bd5a] transition-all shadow-lg btn-hover-effect text-sm uppercase tracking-wider"
          >
            <WhatsAppIcon className="w-5 h-5" />
            Enquire on WhatsApp (+91 91871 95517)
          </a>
        </div>
      </section>
      <FaqSection faqs={BAR_FAQS} title="Breeze Point FAQ" />
      {/* Internal Links */}
      <section className="py-12 bg-white border-t border-gray-200">
        <div className="container mx-auto px-4 md:px-6 max-w-4xl text-center">
          <h2 id="explore-more-at-radiant-vista" className="text-xl font-serif font-bold text-hubli-dark mb-6">Explore More at Radiant Vista</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <a
              href="/dining/"
              className="p-4 bg-hubli-light rounded-lg shadow-sm hover:shadow-md transition-shadow font-semibold text-hubli-earth hover:text-hubli-sunset text-sm"
            >
              Brick and Brew Dining
            </a>
            <a
              href="/banquets/"
              className="p-4 bg-hubli-light rounded-lg shadow-sm hover:shadow-md transition-shadow font-semibold text-hubli-earth hover:text-hubli-sunset text-sm"
            >
              Gala Vista Banquets
            </a>
            <a
              href="/rooms/"
              className="p-4 bg-hubli-light rounded-lg shadow-sm hover:shadow-md transition-shadow font-semibold text-hubli-earth hover:text-hubli-sunset text-sm"
            >
              {"Rooms & Accommodation"}
            </a>
            <a
              href="/contact/"
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

