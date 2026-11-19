import { ArrowRight } from "lucide-react";
import { PHONES } from "../data/site";

const LINKS = [
  { href: "/", label: "Home" },
  { href: "/rooms/", label: "Rooms & Suites" },
  { href: "/dining/", label: "Brick and Brew Dining" },
  { href: "/bar/", label: "Breeze Point Rooftop Bar" },
  { href: "/banquets/", label: "Gala Vista Banquets" },
  { href: "/gallery/", label: "Photo Gallery" },
];

// Branded 404 (dist/404.html, served by Apache with status 404 and noindex).
export const NotFoundPage = () => (
  <main id="main" className="pt-24 bg-hubli-light min-h-screen text-hubli-dark">
    <section className="py-20 md:py-28 bg-hubli-dark text-white">
      <div className="container mx-auto px-4 md:px-6 max-w-3xl text-center">
        <span className="text-hubli-sunset font-bold tracking-widest uppercase text-xs">Error 404</span>
        <h1 className="text-4xl md:text-6xl font-serif font-bold leading-tight mt-2 mb-6">Page not found</h1>
        <p className="text-gray-300 text-lg font-light leading-relaxed">
          The page you were looking for does not exist or has moved. Use the links below to find rooms, dining and event
          spaces at Radiant Vista, Gokul Road, Hubballi.
        </p>
      </div>
    </section>
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 md:px-6 max-w-4xl text-center">
        <h2 className="text-2xl font-serif font-bold text-hubli-dark mb-6">Popular pages</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="p-4 bg-hubli-light rounded-lg shadow-sm hover:shadow-md transition-shadow font-semibold text-hubli-earth hover:text-hubli-sunset text-sm inline-flex items-center justify-center gap-2"
            >
              {link.label}
              <ArrowRight className="w-4 h-4" />
            </a>
          ))}
        </div>
        <p className="text-gray-600 mt-10 text-sm">
          Need help? Call reservations on{" "}
          <a href={`tel:${PHONES.reservations.tel}`} className="text-hubli-earth font-semibold hover:underline">
            {PHONES.reservations.display}
          </a>
          .
        </p>
      </div>
    </section>
  </main>
);
