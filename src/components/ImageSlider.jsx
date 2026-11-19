import * as React from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

// Reusable Automatic Image Slider Component (3000ms rotation, responsive, accessible)
export const ImageSlider = ({ images = [], alt = "Radiant Vista", className = "", autoPlayInterval = 3000 }) => {
  const [curr, setCurr] = React.useState(0);
  const [isPaused, setIsPaused] = React.useState(false);
  React.useEffect(() => {
    if (!images || images.length <= 1 || isPaused) return;
    const mediaQuery =
      typeof window !== "undefined" && window.matchMedia
        ? window.matchMedia("(prefers-reduced-motion: reduce)")
        : null;
    if (mediaQuery && mediaQuery.matches) return;
    const timer = setInterval(() => {
      setCurr((prev) => (prev + 1) % images.length);
    }, autoPlayInterval);
    return () => clearInterval(timer);
  }, [images.length, isPaused, autoPlayInterval]);
  if (!images || images.length === 0) return null;
  const next = (e) => {
    if (e && e.stopPropagation) e.stopPropagation();
    setCurr((prev) => (prev + 1) % images.length);
  };
  const prev = (e) => {
    if (e && e.stopPropagation) e.stopPropagation();
    setCurr((prev) => (prev - 1 + images.length) % images.length);
  };
  return (
    <div
      className={`relative overflow-hidden group select-none ${className}`}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onTouchStart={() => setIsPaused(true)}
      onTouchEnd={() => setIsPaused(false)}
    >
      {images.map((imgSrc, idx) => (
        <img
          src={imgSrc}
          alt={`${alt} - photo ${idx + 1}`}
          loading={idx === 0 ? "eager" : "lazy"}
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ease-in-out ${idx === curr ? "opacity-100 z-10 scale-100" : "opacity-0 z-0 pointer-events-none"}`}
          key={`${imgSrc}-${idx}`}
        />
      ))}
      {images.length > 1 && (
        <button
          type="button"
          onClick={prev}
          className="absolute left-2.5 top-1/2 -translate-y-1/2 z-20 p-2 rounded-full bg-black/40 hover:bg-black/75 text-white backdrop-blur-sm transition-all opacity-0 group-hover:opacity-100 focus:opacity-100 shadow-md cursor-pointer"
          aria-label="Previous image"
        >
          <ChevronLeft className="w-4 h-4 md:w-5 md:h-5" />
        </button>
      )}
      {images.length > 1 && (
        <button
          type="button"
          onClick={next}
          className="absolute right-2.5 top-1/2 -translate-y-1/2 z-20 p-2 rounded-full bg-black/40 hover:bg-black/75 text-white backdrop-blur-sm transition-all opacity-0 group-hover:opacity-100 focus:opacity-100 shadow-md cursor-pointer"
          aria-label="Next image"
        >
          <ChevronRight className="w-4 h-4 md:w-5 md:h-5" />
        </button>
      )}
      {images.length > 1 && (
        <div className="absolute bottom-3 left-1/2 -translate-x-1/2 z-20 flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-black/40 backdrop-blur-sm">
          {images.map((_, dotIdx) => (
            <button
              type="button"
              onClick={(e) => {
                if (e && e.stopPropagation) e.stopPropagation();
                setCurr(dotIdx);
              }}
              className={`h-1.5 rounded-full transition-all duration-300 ${dotIdx === curr ? "w-5 bg-hubli-sunset" : "w-1.5 bg-white/70 hover:bg-white"}`}
              aria-label={`Go to slide ${dotIdx + 1}`}
              key={dotIdx}
            />
          ))}
        </div>
      )}
      {images.length > 1 && (
        <span className="absolute top-3 right-3 z-20 px-2 py-0.5 rounded text-[11px] font-semibold bg-black/50 text-white/90 backdrop-blur-sm tracking-wider">
          {`${curr + 1}`}
          {` / ${images.length}`}
        </span>
      )}
    </div>
  );
};

