import * as React from "react";
import { ArrowRight, ChevronLeft, ChevronRight, X } from "lucide-react";
import { GALLERY_ALL_IMAGES } from "../data/images";
import { Breadcrumbs } from "../components/Breadcrumbs";

// DEDICATED GALLERY PAGE COMPONENT
export const GalleryPage = () => {
  const [activeCategory, setActiveCategory] = React.useState("All");
  const [lightboxIdx, setLightboxIdx] = React.useState(null);
  const touchStartX = React.useRef(0);
  const touchEndX = React.useRef(0);
  const categories = [
    {
      key: "All",
      label: "All Photos",
      count: GALLERY_ALL_IMAGES.length,
    },
    {
      key: "Rooms",
      label: "Rooms & Suites",
      count: GALLERY_ALL_IMAGES.filter((i) => i.category === "Rooms").length,
    },
    {
      key: "Dining",
      label: "Dining & Cuisine",
      count: GALLERY_ALL_IMAGES.filter((i) => i.category === "Dining").length,
    },
    {
      key: "Bar",
      label: "Bar & Rooftop",
      count: GALLERY_ALL_IMAGES.filter((i) => i.category === "Bar").length,
    },
    {
      key: "Banquets",
      label: "Banquets & Events",
      count: GALLERY_ALL_IMAGES.filter((i) => i.category === "Banquets").length,
    },
    {
      key: "Facilities",
      label: "Facilities & Property",
      count: GALLERY_ALL_IMAGES.filter((i) => i.category === "Facilities").length,
    },
  ];
  const filteredImages = React.useMemo(() => {
    if (activeCategory === "All") return GALLERY_ALL_IMAGES;
    return GALLERY_ALL_IMAGES.filter((img) => img.category === activeCategory);
  }, [activeCategory]);

  // Lightbox keyboard navigation and scroll lock
  React.useEffect(() => {
    if (lightboxIdx !== null) {
      document.body.style.overflow = "hidden";
      const handleKeyDown = (e) => {
        if (e.key === "Escape") setLightboxIdx(null);
        if (e.key === "ArrowLeft")
          setLightboxIdx((prev) => (prev > 0 ? prev - 1 : filteredImages.length - 1));
        if (e.key === "ArrowRight")
          setLightboxIdx((prev) => (prev < filteredImages.length - 1 ? prev + 1 : 0));
      };
      window.addEventListener("keydown", handleKeyDown);
      return () => {
        window.removeEventListener("keydown", handleKeyDown);
        document.body.style.overflow = "unset";
      };
    } else {
      document.body.style.overflow = "unset";
    }
  }, [lightboxIdx, filteredImages.length]);
  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
    touchEndX.current = e.touches[0].clientX;
  };
  const handleTouchMove = (e) => {
    touchEndX.current = e.touches[0].clientX;
  };
  const handleTouchEnd = () => {
    const diff = touchStartX.current - touchEndX.current;
    if (Math.abs(diff) > 40) {
      if (diff > 0) {
        setLightboxIdx((prev) => (prev < filteredImages.length - 1 ? prev + 1 : 0));
      } else {
        setLightboxIdx((prev) => (prev > 0 ? prev - 1 : filteredImages.length - 1));
      }
    }
  };
  return (
    <main id="main" className="pt-24 bg-hubli-light min-h-screen text-hubli-dark">
      {/* Hero Header Banner */}
      <section className="relative py-16 md:py-24 bg-hubli-dark text-white overflow-hidden">
        <div className="container mx-auto px-4 md:px-6 relative z-10 max-w-4xl text-center">
          <Breadcrumbs />
          <h1 className="text-4xl md:text-6xl font-serif font-bold text-white leading-tight mb-4">
            Explore Radiant Vista — Hotel Photo Gallery
          </h1>
          <p className="text-gray-300 text-base md:text-lg font-light leading-relaxed max-w-2xl mx-auto">
            Discover our serene guest rooms, vibrant Brick and Brew dining, Breeze Point open-air rooftop,
            Gala Vista banquet halls, and modern hospitality amenities in Hubballi.
          </p>
        </div>
      </section>
      {/* Gallery Controls & Grid Section */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4 md:px-6 max-w-7xl">
          <h2 className="text-center text-2xl md:text-3xl font-serif font-bold text-hubli-dark mb-6">
            {"Photos of Rooms, Dining, Rooftop Bar & Banquets"}
          </h2>
          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2.5 md:gap-3 mb-10 md:mb-12">
            {categories.map((cat) => {
              const isActive = activeCategory === cat.key;
              return (
                <button
                  type="button"
                  onClick={() => {
                    setActiveCategory(cat.key);
                    setLightboxIdx(null);
                  }}
                  className={`px-4 py-2 md:px-5 md:py-2.5 rounded-full text-xs md:text-sm font-semibold tracking-wider transition-all duration-300 cursor-pointer border ${isActive ? "bg-hubli-sunset text-white border-hubli-sunset shadow-md -translate-y-0.5" : "bg-white text-gray-700 hover:text-hubli-sunset border-gray-200 hover:border-hubli-sunset/40 hover:bg-amber-50/40"}`}
                  key={cat.key}
                >
                  {cat.label}
                  <span
                    className={`ml-2 text-xs opacity-80 px-1.5 py-0.5 rounded-full ${isActive ? "bg-white/20 text-white" : "bg-gray-100 text-gray-600"}`}
                  >
                    {cat.count}
                  </span>
                </button>
              );
            })}
          </div>
          {/* Total Counter Label */}
          <div className="flex justify-between items-center text-xs md:text-sm text-gray-500 mb-6 px-1">
            <span>
              {"Showing "}
              <strong className="text-hubli-dark">{filteredImages.length}</strong>
              {" photographs"}
            </span>
            <span className="italic text-gray-400 hidden sm:inline">
              Click any image to view in full resolution
            </span>
          </div>
          {/* Responsive Image Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {filteredImages.map((img, idx) => (
              <div
                className="group relative bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-300 border border-gray-100 cursor-pointer card-hover-lift flex flex-col"
                onClick={() => setLightboxIdx(idx)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    setLightboxIdx(idx);
                  }
                }}
                key={img.src}
              >
                <div className="relative w-full aspect-[16/10] overflow-hidden bg-gray-100">
                  <img
                    src={img.src}
                    alt={img.alt}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                  />
                  {/* Subtle dark gradient on hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/25 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between p-5">
                    <div className="self-start">
                      <span className="text-[11px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-white/20 backdrop-blur-md text-white border border-white/20">
                        {img.categoryLabel}
                      </span>
                    </div>
                    <div className="text-white">
                      <p className="font-serif text-lg font-bold leading-snug drop-shadow-sm">{img.title}</p>
                      <p className="text-xs text-white/80 mt-1 font-sans">Click to open full view</p>
                    </div>
                  </div>
                </div>
                <div className="p-4 flex items-center justify-between bg-white border-t border-gray-50">
                  <div className="min-w-0 pr-2">
                    <h3 className="font-serif font-bold text-hubli-dark text-sm md:text-base truncate group-hover:text-hubli-sunset transition-colors">
                      {img.title}
                    </h3>
                    <span className="text-xs text-gray-500 tracking-wide">{img.categoryLabel}</span>
                    {img.caption && <p className="text-xs text-gray-500 mt-1 leading-relaxed">{img.caption}</p>}
                  </div>
                  <span className="text-hubli-sunset opacity-60 group-hover:opacity-100 transition-opacity">
                    <ArrowRight className="w-4 h-4" />
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Internal Links Navigation */}
      <section className="py-12 bg-white border-t border-gray-200">
        <div className="container mx-auto px-4 md:px-6 max-w-4xl text-center">
          <h2 className="text-xl font-serif font-bold text-hubli-dark mb-6">Explore More at Radiant Vista</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <a
              href="/rooms/"
              className="p-4 bg-hubli-light rounded-lg shadow-sm hover:shadow-md transition-shadow font-semibold text-hubli-earth hover:text-hubli-sunset text-sm cursor-pointer"
            >
              {"Rooms & Accommodation"}
            </a>
            <a
              href="/dining/"
              className="p-4 bg-hubli-light rounded-lg shadow-sm hover:shadow-md transition-shadow font-semibold text-hubli-earth hover:text-hubli-sunset text-sm cursor-pointer"
            >
              Brick and Brew Dining
            </a>
            <a
              href="/bar/"
              className="p-4 bg-hubli-light rounded-lg shadow-sm hover:shadow-md transition-shadow font-semibold text-hubli-earth hover:text-hubli-sunset text-sm cursor-pointer"
            >
              Breeze Point Rooftop Bar
            </a>
            <a
              href="/banquets/"
              className="p-4 bg-hubli-light rounded-lg shadow-sm hover:shadow-md transition-shadow font-semibold text-hubli-earth hover:text-hubli-sunset text-sm cursor-pointer"
            >
              Banquets (Gala Vista)
            </a>
          </div>
        </div>
      </section>
      {/* Lightbox Modal for Gallery Page */}
      {lightboxIdx !== null && filteredImages[lightboxIdx] && (
        <div
          className="fixed inset-0 z-[200] bg-black/95 backdrop-blur-md flex items-center justify-center p-4 md:p-8 select-none"
          onClick={(e) => {
            if (e.target === e.currentTarget) setLightboxIdx(null);
          }}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          {/* Close button */}
          <button
            type="button"
            onClick={() => setLightboxIdx(null)}
            className="absolute top-5 right-5 z-[210] p-3 text-white/80 hover:text-white bg-white/10 hover:bg-white/20 rounded-full transition-all cursor-pointer focus:outline-none"
            aria-label="Close lightbox"
          >
            <X className="w-7 h-7" />
          </button>
          {/* Previous button */}
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              setLightboxIdx((prev) => (prev > 0 ? prev - 1 : filteredImages.length - 1));
            }}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-[210] p-3 text-white/80 hover:text-white bg-black/50 hover:bg-black/80 rounded-full backdrop-blur-sm transition-all cursor-pointer focus:outline-none border border-white/10"
            aria-label="Previous image"
          >
            <ChevronLeft className="w-6 h-6 md:w-8 md:h-8" />
          </button>
          {/* Image container */}
          <div
            className="relative max-w-5xl max-h-[85vh] flex flex-col items-center justify-center pointer-events-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={filteredImages[lightboxIdx].src}
              alt={filteredImages[lightboxIdx].alt}
              className="max-h-[76vh] max-w-[90vw] w-auto h-auto object-contain rounded-xl shadow-2xl border border-white/10"
            />
            <div className="mt-4 text-center text-white">
              <p className="text-lg md:text-xl font-serif font-bold text-white">
                {filteredImages[lightboxIdx].title}
              </p>
              <div className="mt-1 text-white/70 text-xs md:text-sm font-medium tracking-wider flex items-center justify-center gap-3">
                <span className="text-hubli-sunset font-semibold">
                  {filteredImages[lightboxIdx].categoryLabel}
                </span>
                <span>•</span>
                <span>{`${lightboxIdx + 1} / ${filteredImages.length}`}</span>
              </div>
            </div>
          </div>
          {/* Next button */}
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              setLightboxIdx((prev) => (prev < filteredImages.length - 1 ? prev + 1 : 0));
            }}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-[210] p-3 text-white/80 hover:text-white bg-black/50 hover:bg-black/80 rounded-full backdrop-blur-sm transition-all cursor-pointer focus:outline-none border border-white/10"
            aria-label="Next image"
          >
            <ChevronRight className="w-6 h-6 md:w-8 md:h-8" />
          </button>
        </div>
      )}
    </main>
  );
};

