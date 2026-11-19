import {
  ArrowRight,
  Briefcase,
  Coffee,
  Lock,
  Projector,
  ShieldCheck,
  Tv,
  Users,
  Utensils,
  Wifi,
  Wind,
} from "lucide-react";
import { RESAVENUE_URL, WA_PHONE } from "../data/site";
import { ROOM_COVER_IMAGES, ROOM_IMAGES } from "../data/images";
import { ImageSlider } from "../components/ImageSlider";
import { WhatsAppIcon } from "../components/icons";
import { FacilitiesSection } from "../components/FacilitiesSection";
import { Breadcrumbs } from "../components/Breadcrumbs";
import { FaqSection } from "../components/FaqSection";
import { ROOMS_FAQS } from "../data/content";

// DEDICATED ROOMS PAGE COMPONENT (/rooms/)
export const RoomsPage = () => {
  const roomEnquiryMsg =
    "Hello Radiant Vista Hotel, I would like to enquire about room reservations and accommodation at Radiant Vista. Please share the available details. Thank you.";
  const waRoomUrl = `https://wa.me/${WA_PHONE}?text=${encodeURIComponent(roomEnquiryMsg)}`;
  const detailedRooms = [
    {
      id: "classic",
      title: "Classic Room",
      subtitle: "Comfortable Executive Accommodation",
      image: ROOM_COVER_IMAGES.classic,
      images: ROOM_IMAGES.classic,
      description:
        "Our Classic Rooms are thoughtfully appointed designer sanctuaries equipped with individually controlled air conditioning, a 42-inch Smart TV, high-speed Wi-Fi, and a hot water kettle. Designed for both business travelers seeking functionality and leisure guests wanting peace, each Classic Room offers plush bedding and a relaxing ambience on Gokul Road.",
      amenities: [
        {
          label: "Individually Controlled AC",
          icon: <Wind className="w-4 h-4 text-hubli-sunset" />,
        },
        {
          label: '42" Smart TV',
          icon: <Tv className="w-4 h-4 text-hubli-sunset" />,
        },
        {
          label: "Hot Water Kettle",
          icon: <Coffee className="w-4 h-4 text-hubli-sunset" />,
        },
        {
          label: "High-Speed Wi-Fi",
          icon: <Wifi className="w-4 h-4 text-hubli-sunset" />,
        },
        {
          label: "CCTV Secure Premises",
          icon: <ShieldCheck className="w-4 h-4 text-hubli-sunset" />,
        },
        {
          label: "Work Desk Space",
          icon: <Briefcase className="w-4 h-4 text-hubli-sunset" />,
        },
      ],
    },
    {
      id: "premium",
      title: "Premium Room",
      subtitle: "Spacious Comfort with Enhanced Features",
      image: ROOM_COVER_IMAGES.premium,
      images: ROOM_IMAGES.premium,
      description:
        "The Premium Rooms at Radiant Vista offer extra square footage, sophisticated interiors, and upgraded conveniences for corporate executives and extended stays. Each room features an executive work desk, safe deposit locker, private mini fridge, individually controlled air conditioning, and a 42-inch Smart TV to keep you refreshed and productive in Hubballi.",
      amenities: [
        {
          label: "Private Mini Fridge",
          icon: <Utensils className="w-4 h-4 text-hubli-sunset" />,
        },
        {
          label: "Safe Deposit Locker",
          icon: <Lock className="w-4 h-4 text-hubli-sunset" />,
        },
        {
          label: "Executive Work Desk",
          icon: <Briefcase className="w-4 h-4 text-hubli-sunset" />,
        },
        {
          label: "Individually Controlled AC",
          icon: <Wind className="w-4 h-4 text-hubli-sunset" />,
        },
        {
          label: '42" Smart TV',
          icon: <Tv className="w-4 h-4 text-hubli-sunset" />,
        },
        {
          label: "Hot Water Kettle",
          icon: <Coffee className="w-4 h-4 text-hubli-sunset" />,
        },
      ],
    },
    {
      id: "suite",
      title: "Suite",
      subtitle: "Expansive Luxury & Private Lounge",
      image: ROOM_COVER_IMAGES.suite,
      images: ROOM_IMAGES.suite,
      description:
        "Radiant Vista Suites represent our premier hospitality tier, designed for travelers who appreciate refined grandeur and ample space. Featuring an expansive separate lounge area, satellite cable entertainment, upscale designer interiors, safe locker, mini fridge, and complete business amenities, our Suites elevate your stay in Hubballi to an art form.",
      amenities: [
        {
          label: "Expansive Living Area & Lounge",
          icon: <Users className="w-4 h-4 text-hubli-sunset" />,
        },
        {
          label: "Designer Interiors & Decor",
          icon: <Projector className="w-4 h-4 text-hubli-sunset" />,
        },
        {
          label: "Satellite Television",
          icon: <Tv className="w-4 h-4 text-hubli-sunset" />,
        },
        {
          label: "Private Mini Fridge",
          icon: <Utensils className="w-4 h-4 text-hubli-sunset" />,
        },
        {
          label: "Safe Deposit Locker",
          icon: <Lock className="w-4 h-4 text-hubli-sunset" />,
        },
        {
          label: "Individually Controlled AC",
          icon: <Wind className="w-4 h-4 text-hubli-sunset" />,
        },
      ],
    },
  ];
  return (
    <main id="main" className="pt-20 bg-hubli-light min-h-screen text-hubli-dark">
      {/* Introduction (Retained White Content Section directly below header) */}
      <section className="pt-12 pb-12 md:pt-16 md:pb-16 bg-white border-b border-gray-100">
        <div className="container mx-auto px-4 md:px-6 max-w-4xl text-center">
          <Breadcrumbs className="text-xs tracking-widest uppercase text-gray-500 mb-4 flex justify-center items-center gap-2" linkClassName="hover:text-hubli-sunset transition-colors" />
          <span className="text-hubli-sunset font-bold tracking-widest uppercase text-xs">Stay with Us</span>
          <h1 className="text-3xl md:text-4xl font-serif text-hubli-green font-bold mt-2 mb-6">
            Hotel Rooms and Suites in Hubballi
          </h1>
          <p className="text-gray-600 leading-relaxed text-base md:text-lg mb-4">
            Whether you are visiting Hubli for corporate conferences, business presentations, or leisurely
            family exploration, Radiant Vista provides hotel rooms in Hubballi built around modern traveler
            expectations. Positioned conveniently on Gokul Road in Akshay Park near Hubballi Airport, our
            business hotel in Hubballi guarantees seamless connectivity and tranquil rest.
          </p>
          <p className="text-gray-600 leading-relaxed text-base md:text-lg">
            From our well-appointed Classic Room to our spacious Premium Room and expansive Suite rooms in
            Hubballi, all accommodations feature individually controlled air conditioning, 42-inch Smart TVs,
            high-speed Wi-Fi, and 24/7 CCTV-monitored secure premises.
          </p>
        </div>
      </section>
      {/* Detailed Room Showcases */}
      <section className="py-16 md:py-24 container mx-auto px-4 md:px-6">
        <div className="space-y-16">
          {detailedRooms.map((room, idx) => (
            <div
              id={room.id}
              className={`grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-center bg-white rounded-2xl p-6 md:p-10 shadow-lg border border-gray-100 card-hover-lift ${idx % 2 === 1 ? "lg:grid-flow-dense" : ""}`}
              key={room.id}
            >
              <ImageSlider sizes="(min-width: 1024px) 50vw, 100vw"
                images={room.images}
                alt={`${room.title} accommodation at Radiant Vista hotel in Hubballi`}
                className={`rounded-xl overflow-hidden shadow-md h-[320px] md:h-[400px] ${idx % 2 === 1 ? "lg:col-start-2" : ""}`}
              />
              <div className="space-y-6">
                <div>
                  <span className="text-hubli-sunset font-bold uppercase tracking-widest text-xs">
                    {room.subtitle}
                  </span>
                  <h2 className="text-3xl md:text-4xl font-serif text-hubli-dark font-bold mt-1">
                    {room.title}
                  </h2>
                </div>
                <p className="text-gray-600 leading-relaxed">{room.description}</p>
                <div>
                  <h3 className="text-xs font-bold uppercase tracking-wider text-hubli-green mb-3">
                    Verified In-Room Amenities
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {room.amenities.map((a, aIdx) => (
                      <div
                        className="flex items-center gap-2.5 bg-hubli-light px-3 py-2 rounded-md text-xs font-medium text-gray-700"
                        key={aIdx}
                      >
                        {a.icon}
                        <span>{a.label}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="flex flex-col sm:flex-row gap-4 pt-4 border-t border-gray-100">
                  <a
                    href={RESAVENUE_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-3.5 bg-hubli-earth text-white font-bold rounded-sm hover:bg-hubli-dark transition-all text-center text-xs uppercase tracking-wider shadow-md btn-hover-effect flex items-center justify-center gap-2 group"
                  >
                    Book Now
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </a>
                  <a
                    href={`https://wa.me/${WA_PHONE}?text=${encodeURIComponent(`Hello Radiant Vista Hotel, I would like to enquire about ${room.title} accommodation. Please share details.`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-3.5 border border-[#25D366] text-[#128C7E] font-bold rounded-sm hover:bg-[#25D366] hover:text-white transition-all text-center text-xs uppercase tracking-wider btn-hover-effect flex items-center justify-center gap-2"
                  >
                    <WhatsAppIcon className="w-4 h-4" />
                    Enquire on WhatsApp
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
      {/* WhatsApp Assistance Banner */}
      <section className="py-12 bg-white border-y border-gray-100">
        <div className="container mx-auto px-4 md:px-6 max-w-4xl text-center">
          <h2 className="text-2xl font-serif text-hubli-green font-bold mb-2">
            Need Personalised Booking Assistance?
          </h2>
          <p className="text-gray-600 mb-6 text-sm md:text-base">
            Our dedicated reservations team is available to assist you with room enquiries, corporate
            bookings, and stay details.
          </p>
          <a
            href={waRoomUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-3.5 bg-[#25D366] text-white font-bold rounded-sm hover:bg-[#20bd5a] transition-all shadow-md btn-hover-effect uppercase tracking-wider text-xs"
          >
            <WhatsAppIcon className="w-5 h-5" />
            Enquire on WhatsApp (+91 91871 95517)
          </a>
        </div>
      </section>
      {/* Hotel Facilities Grid */}
      <FacilitiesSection />
      {/* Rooms FAQ: same array as the FAQPage JSON-LD on this route */}
      <FaqSection faqs={ROOMS_FAQS} title="Rooms & Accommodation FAQ" />
      {/* Internal Links / Explore other sections */}
      <section className="py-12 bg-hubli-light border-t border-gray-200">
        <div className="container mx-auto px-4 md:px-6 max-w-4xl text-center">
          <h2 className="text-xl font-serif font-bold text-hubli-dark mb-6">Explore Other Hotel Services</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <a
              href="/dining/"
              className="p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow font-semibold text-hubli-earth hover:text-hubli-sunset text-sm"
            >
              Brick and Brew Dining
            </a>
            <a
              href="/bar/"
              className="p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow font-semibold text-hubli-earth hover:text-hubli-sunset text-sm"
            >
              Breeze Point Rooftop Bar
            </a>
            <a
              href="/banquets/"
              className="p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow font-semibold text-hubli-earth hover:text-hubli-sunset text-sm"
            >
              Gala Vista Banquets
            </a>
            <a
              href="/#contact"
              className="p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow font-semibold text-hubli-earth hover:text-hubli-sunset text-sm"
            >
              Contact Hotel
            </a>
          </div>
        </div>
      </section>
    </main>
  );
};

