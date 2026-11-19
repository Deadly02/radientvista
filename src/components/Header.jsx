import * as React from "react";
import { Menu, X } from "lucide-react";
import { NAV_ITEMS, PHONES, RESAVENUE_URL } from "../data/site";

// Main Navigation Component
export const Header = ({ currentPath }) => {
  const [menuOpen, setMenuOpen] = React.useState(false);
  const [scrolled, setScrolled] = React.useState(false);
  React.useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  React.useEffect(() => {
    if (menuOpen) {
      const prevOverflow = document.body.style.overflow;
      const prevTouchAction = document.body.style.touchAction;
      document.body.style.overflow = "hidden";
      document.body.style.touchAction = "none";
      return () => {
        document.body.style.overflow = prevOverflow;
        document.body.style.touchAction = prevTouchAction;
      };
    }
  }, [menuOpen]);

  // Close mobile menu on resize to desktop (>= 1024px)
  React.useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024 && menuOpen) {
        setMenuOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [menuOpen]);

  // Close mobile menu on Escape key
  React.useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape" && menuOpen) {
        setMenuOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [menuOpen]);
  const isDesktopDark = scrolled || currentPath !== "/";
  // Plain links: each page is its own pre-rendered HTML file; hash links scroll natively.
  const handleLinkClick = () => setMenuOpen(false);
  const isItemActive = (item) => {
    if (item.hash) {
      return currentPath === "/" && item.label === "Home";
    }
    return currentPath === item.href;
  };
  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${isDesktopDark ? "bg-white shadow-md border-b border-gray-100 py-0 lg:py-3.5" : "bg-white shadow-sm border-b border-gray-100 lg:border-none lg:bg-gradient-to-b lg:from-black/75 lg:to-transparent lg:shadow-none py-0 lg:py-5"}`}
    >
      {/* Header Top Bar */}
      <div className="container mx-auto px-4 sm:px-6 flex justify-between items-center h-16 lg:h-auto relative z-50">
        {/* Brand / Logo */}
        <a
          href="/"
          onClick={handleLinkClick}
          className="flex flex-col justify-center min-w-0 pr-3 cursor-pointer group select-none"
        >
          <span
            className={`font-serif text-xl sm:text-2xl lg:text-2xl xl:text-3xl font-bold tracking-wide transition-colors leading-tight truncate ${isDesktopDark ? "text-hubli-green" : "text-hubli-green lg:text-white"}`}
          >
            Radiant Vista
          </span>
          <span
            className={`text-[9px] sm:text-[10px] md:text-xs tracking-[0.22em] uppercase font-semibold transition-colors leading-normal truncate ${isDesktopDark ? "text-hubli-earth" : "text-hubli-earth lg:text-hubli-sunset"}`}
          >
            {"Hotel & Leisure"}
          </span>
        </a>
        {/* Desktop Navigation Links */}
        <nav aria-label="Main" className="hidden lg:flex items-center space-x-3.5 xl:space-x-5">
          {NAV_ITEMS.map((item) => {
            const active = isItemActive(item);
            return (
              <a
                href={item.hash && currentPath !== "/" ? `/${item.hash}` : item.hash || item.href}
                onClick={handleLinkClick}
                className={`text-xs xl:text-sm font-semibold uppercase tracking-wider transition-colors relative py-1 nav-link-effect ${active ? "text-hubli-sunset font-bold active" : isDesktopDark ? "text-hubli-dark hover:text-hubli-sunset" : "text-white/90 hover:text-white"}`}
                key={item.label}
              >
                {item.label}
              </a>
            );
          })}
          {/* Desktop Book Now CTA */}
          <a
            href={RESAVENUE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className={`px-4 py-2 xl:px-5 xl:py-2.5 rounded-sm text-xs xl:text-sm font-semibold uppercase tracking-wider transition-all duration-300 btn-hover-effect ${isDesktopDark ? "bg-hubli-earth text-white hover:bg-hubli-dark shadow-sm" : "bg-white text-hubli-earth hover:bg-hubli-sand shadow-md"}`}
          >
            Book Now
          </a>
        </nav>
        {/* Mobile Hamburger / Close Button */}
        <button
          type="button"
          className="lg:hidden flex-shrink-0 w-10 h-10 flex items-center justify-center rounded-md text-hubli-dark hover:bg-gray-100 active:bg-gray-200 transition-colors focus:outline-none cursor-pointer"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={menuOpen}
        >
          {menuOpen ? (
            <X className="w-6 h-6 text-hubli-dark" />
          ) : (
            <Menu className="w-6 h-6 text-hubli-dark" />
          )}
        </button>
      </div>
      {/* Dedicated Mobile Navigation Panel */}
      {menuOpen && (
        <div
          className="lg:hidden fixed inset-x-0 top-16 bottom-0 z-50 bg-[#fafaf9] flex flex-col justify-between overflow-y-auto overflow-x-hidden border-t border-gray-200/80 shadow-2xl"
          style={{
            height: "calc(100dvh - 64px)",
          }}
        >
          {/* Links List */}
          <nav
            aria-label="Mobile Navigation Links"
            className="flex flex-col py-2 divide-y divide-gray-100/80"
          >
            {NAV_ITEMS.map((item) => {
              const active = isItemActive(item);
              return (
                <a
                  href={item.hash && currentPath !== "/" ? `/${item.hash}` : item.hash || item.href}
                  onClick={handleLinkClick}
                  className={`flex items-center justify-between px-6 py-3.5 transition-colors cursor-pointer ${active ? "bg-amber-50/80 text-hubli-sunset font-bold border-l-4 border-hubli-sunset pl-5" : "text-hubli-dark hover:text-hubli-sunset hover:bg-white active:bg-gray-100"}`}
                  key={item.label}
                >
                  <span
                    className={`font-serif text-base sm:text-lg tracking-wide ${active ? "font-bold text-hubli-sunset" : "font-semibold text-hubli-dark"}`}
                  >
                    {item.label}
                  </span>
                  <span
                    className={`text-xs font-sans uppercase tracking-wider ${active ? "text-hubli-sunset font-bold" : "text-gray-300"}`}
                  >
                    →
                  </span>
                </a>
              );
            })}
          </nav>
          {/* Dedicated Book Your Stay Section Below All Links */}
          <div className="p-6 pt-4 pb-10 bg-white border-t border-gray-200/80 mt-auto">
            <a
              href={RESAVENUE_URL}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMenuOpen(false)}
              className="w-full flex items-center justify-center gap-2 py-3.5 px-6 bg-hubli-earth hover:bg-hubli-dark text-white rounded-sm text-sm sm:text-base font-semibold uppercase tracking-wider shadow-md hover:shadow-lg active:scale-[0.99] transition-all"
            >
              Book Your Stay
            </a>
            <div className="mt-4 text-center text-xs text-gray-500 flex items-center justify-center gap-1.5 flex-wrap">
              <span>Need assistance? Call</span>
              <a href={`tel:${PHONES.reservations.tel}`} className="text-hubli-earth font-semibold hover:underline">
                {PHONES.reservations.display}
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

