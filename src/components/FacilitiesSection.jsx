import { Briefcase, Car, Headphones, Projector, ShieldCheck, Utensils } from "lucide-react";
import { Section } from "./Section";

// Facilities Section (home and /rooms/)
export const FACILITIES = [
  { id: 1, title: "Travel Desk", detail: "Travel desk & city transportation assistance", icon: Car },
  { id: 2, title: "Business Center", detail: "Fully equipped business center for corporate guests", icon: Briefcase },
  { id: 3, title: "Basement Parking", detail: "Secure basement parking with convenient access", icon: Car },
  { id: 4, title: "Secure Premises (CCTV)", detail: "24/7 security with CCTV surveillance across premises", icon: ShieldCheck },
  { id: 5, title: "Multiple Dining Options", detail: "Brick and Brew & Breeze Point rooftop bar", icon: Utensils },
  { id: 6, title: "Banqueting & Conferencing", detail: "Gala Vista I & Gala Vista II event halls", icon: Projector },
  { id: 7, title: "24/7 Front Desk", detail: "24-hour front desk and hotel hospitality services", icon: Headphones },
];

export const FacilitiesSection = () => (
  <Section id="facilities" className="bg-hubli-light text-hubli-dark">
    <div className="container mx-auto px-4 md:px-6">
      <div className="flex flex-col md:flex-row items-start md:items-end justify-between mb-12">
        <div className="max-w-xl">
          <span className="text-hubli-sunset font-bold tracking-widest uppercase text-sm">Services</span>
          <h2 id="facilities-title" className="text-4xl font-serif font-bold mt-2">
            {"Hotel Facilities & Guest Services"}
          </h2>
          <p className="text-gray-600 mt-4">
            Facilities and amenities at Radiant Vista ensure a seamless stay for business and leisure guests. From secure
            basement parking to a fully equipped business center, we have it all.
          </p>
        </div>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {FACILITIES.map(({ id, title, detail, icon: Icon }) => (
          <div
            className="bg-white p-8 rounded-lg shadow-sm border border-gray-100 card-hover-lift group cursor-default"
            key={id}
          >
            <div className="text-hubli-sunset mb-4 group-hover:scale-110 transition-transform duration-300">
              <Icon className="w-8 h-8" />
            </div>
            <h3 className="text-lg font-semibold tracking-wide">{title}</h3>
            <p className="text-sm text-gray-500 mt-1">{detail}</p>
          </div>
        ))}
      </div>
    </div>
  </Section>
);
