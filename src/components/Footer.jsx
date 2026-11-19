import { Facebook, Instagram } from "lucide-react";
import { YoutubeIcon } from "./icons";
import { ADDRESS_LINE, BUILD_YEAR, PHONES, SOCIAL } from "../data/site";
import { HOTEL_FACTS, known } from "../data/facts";
import { track } from "../lib/analytics";

const QUICK_LINKS = [
  { href: "/", label: "Home" },
  { href: "/rooms/", label: "Rooms & Accommodation" },
  { href: "/dining/", label: "Dining (Brick and Brew)" },
  { href: "/bar/", label: "Rooftop Bar (Breeze Point)" },
  { href: "/banquets/", label: "Banquets (Gala Vista)" },
  { href: "/gallery/", label: "Photo Gallery" },
  { href: "/about/", label: "About Radiant Vista" },
  { href: "/contact/", label: "Contact Us" },
];

const PLAN_LINKS = [
  { href: "/hotel-near-hubballi-airport/", label: "Hotel near Hubballi Airport" },
  { href: "/corporate-stays/", label: "Corporate Stays" },
  { href: "/banquets/weddings/", label: "Weddings at Gala Vista I" },
  { href: "/banquets/conferences/", label: "Conferences at Gala Vista II" },
  { href: "/hubballi-guide/", label: "Hubballi Guide" },
  { href: "/#faq", label: "FAQ" },
];

const LEGAL_LINKS = [
  { href: "/privacy-policy/", label: "Privacy Policy" },
  { href: "/terms/", label: "Terms of Use" },
  { href: "/cancellation-policy/", label: "Cancellation Policy" },
];

// Real Facebook page once supplied (facts.js); the old /share/ link until then.
const FACEBOOK_URL = known(HOTEL_FACTS.facebook) ? HOTEL_FACTS.facebook : SOCIAL.facebook;

const socialClass = "p-2.5 bg-white/5 rounded-full hover:bg-hubli-sunset hover:text-white transition-all btn-hover-effect";

// Footer Component
export const Footer = () => (
  <footer className="bg-[#1a1818] text-gray-400 py-16 border-t border-white/5">
    <div className="container mx-auto px-4 md:px-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
        <div className="space-y-4">
          <h3 className="text-2xl font-serif text-white font-bold">Radiant Vista</h3>
          <p className="text-sm leading-relaxed">
            Business hotel and leisure travel destination on Gokul Road, Akshay Park, Hubballi. Home to Brick and Brew
            restaurant, Breeze Point rooftop bar, and Gala Vista banquet halls.
          </p>
        </div>
        <div>
          <h4 className="text-white font-bold mb-6 uppercase tracking-wider text-sm">Quick Links</h4>
          <ul className="space-y-3 text-sm">
            {QUICK_LINKS.map((link) => (
              <li key={link.href}>
                <a href={link.href} className="hover:text-hubli-sunset transition-colors">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="text-white font-bold mb-6 uppercase tracking-wider text-sm">Plan Your Stay</h4>
          <ul className="space-y-3 text-sm">
            {PLAN_LINKS.map((link) => (
              <li key={link.href}>
                <a href={link.href} className="hover:text-hubli-sunset transition-colors">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="text-white font-bold mb-6 uppercase tracking-wider text-sm">Follow Us</h4>
          <div className="flex space-x-4">
            <a href={FACEBOOK_URL} target="_blank" rel="noopener noreferrer" aria-label="Facebook" className={socialClass}>
              <Facebook className="w-5 h-5" />
            </a>
            <a href={SOCIAL.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram" className={socialClass}>
              <Instagram className="w-5 h-5" />
            </a>
            <a href={SOCIAL.youtube} target="_blank" rel="noopener noreferrer" aria-label="YouTube" className={socialClass}>
              <YoutubeIcon className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
      <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500 gap-2 text-center md:text-left">
        <p>© {BUILD_YEAR} Radiant Vista, Hubballi. All rights reserved.</p>
        <nav aria-label="Legal" className="flex gap-4">
          {LEGAL_LINKS.map((link) => (
            <a key={link.href} href={link.href} className="hover:text-hubli-sunset transition-colors">
              {link.label}
            </a>
          ))}
        </nav>
        <p>
          Designed by{" "}
          <a
            href="https://dishanwebwing.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-hubli-sunset transition-colors font-medium"
          >
            Dishan Web Wings
          </a>
        </p>
        <p>
          {ADDRESS_LINE} ·{" "}
          <a href={`tel:${PHONES.primary.tel}`} onClick={() => track("phone_click", { location: "footer" })} className="hover:text-hubli-sunset">
            {PHONES.primary.display}
          </a>
        </p>
      </div>
    </div>
  </footer>
);
