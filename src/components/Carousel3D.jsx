import * as React from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { imgProps } from "../lib/img";

// 3D Carousel Component
export const Carousel3D = ({ images }) => {
  const [activeIndex, setActiveIndex] = React.useState(0);
  const [isPaused, setIsPaused] = React.useState(false);
  // Server and first client render use the same desktop width; the real width is read after
  // hydration so the markup always matches.
  const [windowWidth, setWindowWidth] = React.useState(1200);
  const [isReducedMotion, setIsReducedMotion] = React.useState(false);
  const touchStartX = React.useRef(0);
  const touchEndX = React.useRef(0);
  React.useEffect(() => {
    setIsReducedMotion(!!(window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches));
    const handleResize = () => setWindowWidth(window.innerWidth);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // 2-second automatic rotation
  React.useEffect(() => {
    if (isPaused || isReducedMotion) return;
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % images.length);
    }, 2000);
    return () => clearInterval(interval);
  }, [isPaused, isReducedMotion, images.length, activeIndex]);
  const isMobile = windowWidth < 640;
  const isTablet = windowWidth >= 640 && windowWidth < 1024;
  const cardWidth = isMobile ? 260 : isTablet ? 360 : 460;
  const cardHeight = isMobile ? 170 : isTablet ? 230 : 295;
  const getCardStyle = (idx) => {
    const N = images.length;
    let offset = (idx - activeIndex) % N;
    if (offset > N / 2) offset -= N;
    if (offset < -N / 2) offset += N;
    const tx1 = isMobile ? 120 : isTablet ? 190 : 270;
    const tx2 = isMobile ? 210 : isTablet ? 350 : 480;
    const tz1 = isMobile ? -95 : -160;
    const tz2 = isMobile ? -190 : -310;
    const tzHidden = -460;
    const baseTransition = isReducedMotion
      ? "none"
      : "transform 650ms cubic-bezier(0.25, 1, 0.5, 1), opacity 650ms ease, filter 650ms ease, box-shadow 650ms ease";
    if (offset === 0) {
      return {
        transform: "translate(-50%, -50%) translateX(0px) translateZ(0px) rotateY(0deg) scale(1)",
        zIndex: 30,
        opacity: 1,
        filter: "brightness(1)",
        pointerEvents: "auto",
        cursor: "default",
        boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.9), 0 0 35px rgba(217, 119, 6, 0.2)",
        borderColor: "rgba(255, 255, 255, 0.2)",
        transition: baseTransition,
      };
    } else if (offset === 1) {
      return {
        transform: `translate(-50%, -50%) translateX(${tx1}px) translateZ(${tz1}px) rotateY(-36deg) scale(0.82)`,
        zIndex: 20,
        opacity: 0.82,
        filter: "brightness(0.72)",
        pointerEvents: "auto",
        cursor: "pointer",
        boxShadow: "0 15px 30px -10px rgba(0, 0, 0, 0.8)",
        borderColor: "rgba(255, 255, 255, 0.08)",
        transition: baseTransition,
      };
    } else if (offset === -1) {
      return {
        transform: `translate(-50%, -50%) translateX(-${tx1}px) translateZ(${tz1}px) rotateY(36deg) scale(0.82)`,
        zIndex: 20,
        opacity: 0.82,
        filter: "brightness(0.72)",
        pointerEvents: "auto",
        cursor: "pointer",
        boxShadow: "0 15px 30px -10px rgba(0, 0, 0, 0.8)",
        borderColor: "rgba(255, 255, 255, 0.08)",
        transition: baseTransition,
      };
    } else if (offset === 2) {
      return {
        transform: `translate(-50%, -50%) translateX(${tx2}px) translateZ(${tz2}px) rotateY(-50deg) scale(0.66)`,
        zIndex: 10,
        opacity: isMobile ? 0.25 : 0.45,
        filter: "brightness(0.5)",
        pointerEvents: "auto",
        cursor: "pointer",
        boxShadow: "0 10px 20px -10px rgba(0, 0, 0, 0.7)",
        borderColor: "rgba(255, 255, 255, 0.04)",
        transition: baseTransition,
      };
    } else if (offset === -2) {
      return {
        transform: `translate(-50%, -50%) translateX(-${tx2}px) translateZ(${tz2}px) rotateY(50deg) scale(0.66)`,
        zIndex: 10,
        opacity: isMobile ? 0.25 : 0.45,
        filter: "brightness(0.5)",
        pointerEvents: "auto",
        cursor: "pointer",
        boxShadow: "0 10px 20px -10px rgba(0, 0, 0, 0.7)",
        borderColor: "rgba(255, 255, 255, 0.04)",
        transition: baseTransition,
      };
    } else {
      return {
        transform: `translate(-50%, -50%) translateX(0px) translateZ(${tzHidden}px) scale(0.5)`,
        zIndex: 1,
        opacity: 0,
        filter: "brightness(0.2)",
        pointerEvents: "none",
        cursor: "default",
        boxShadow: "none",
        borderColor: "transparent",
        transition: baseTransition,
      };
    }
  };
  const handleTouchStart = (e) => {
    setIsPaused(true);
    touchStartX.current = e.touches[0].clientX;
    touchEndX.current = e.touches[0].clientX;
  };
  const handleTouchMove = (e) => {
    touchEndX.current = e.touches[0].clientX;
  };
  const handleTouchEnd = () => {
    setIsPaused(false);
    const diff = touchStartX.current - touchEndX.current;
    if (Math.abs(diff) > 40) {
      if (diff > 0) {
        setActiveIndex((prev) => (prev + 1) % images.length);
      } else {
        setActiveIndex((prev) => (prev - 1 + images.length) % images.length);
      }
    }
  };
  return (
    <div
      className="relative w-full max-w-6xl mx-auto flex flex-col items-center select-none"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* 3D Perspective Stage */}
      <div
        className="relative w-full overflow-hidden flex items-center justify-center"
        style={{
          height: isMobile ? "320px" : isTablet ? "390px" : "450px",
          perspective: isMobile ? "850px" : "1100px",
          perspectiveOrigin: "center center",
        }}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        <div
          className="relative w-full h-full"
          style={{
            transformStyle: "preserve-3d",
          }}
        >
          {images.map((item, idx) => {
            const style = getCardStyle(idx);
            return (
              <div
                onClick={() => {
                  if (idx !== activeIndex) setActiveIndex(idx);
                }}
                style={{
                  ...style,
                  width: `${cardWidth}px`,
                  height: `${cardHeight}px`,
                  position: "absolute",
                  left: "50%",
                  top: "50%",
                  transformOrigin: "center center",
                  borderRadius: "1rem",
                  overflow: "hidden",
                  borderWidth: "1px",
                  borderStyle: "solid",
                }}
                key={item.id || idx}
              >
                <img
                  {...imgProps(item.src, "(min-width: 1024px) 460px, (min-width: 640px) 360px, 260px")}
                  alt={item.alt}
                  className="w-full h-full object-cover select-none pointer-events-none rounded-2xl"
                  draggable={false}
                  loading="lazy"
                  decoding="async"
                />
              </div>
            );
          })}
          {/* Prev & Next Chevrons on stage edges */}
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              setActiveIndex((prev) => (prev - 1 + images.length) % images.length);
            }}
            className="absolute left-2 md:left-6 top-1/2 -translate-y-1/2 z-40 p-2.5 md:p-3 rounded-full bg-white/10 hover:bg-white/20 text-white/80 hover:text-white backdrop-blur-md transition-all cursor-pointer focus:outline-none border border-white/10 shadow-lg"
            aria-label="Previous slide"
          >
            <ChevronLeft className="w-5 h-5 md:w-6 md:h-6" />
          </button>
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              setActiveIndex((prev) => (prev + 1) % images.length);
            }}
            className="absolute right-2 md:right-6 top-1/2 -translate-y-1/2 z-40 p-2.5 md:p-3 rounded-full bg-white/10 hover:bg-white/20 text-white/80 hover:text-white backdrop-blur-md transition-all cursor-pointer focus:outline-none border border-white/10 shadow-lg"
            aria-label="Next slide"
          >
            <ChevronRight className="w-5 h-5 md:w-6 md:h-6" />
          </button>
        </div>
      </div>
      {/* Subtle indicator dots below stage */}
      <div className="flex items-center mt-4 md:mt-5 z-30">
        {images.map((_, dotIdx) => (
          // 24px tap target around the same small dot.
          <button
            type="button"
            onClick={() => setActiveIndex(dotIdx)}
            aria-label={`Go to slide ${dotIdx + 1}`}
            className="h-6 min-w-6 px-[5px] flex items-center justify-center focus:outline-none cursor-pointer group"
            key={dotIdx}
          >
            <span
              className={`block transition-all duration-300 ${dotIdx === activeIndex ? "w-7 h-2 bg-hubli-sunset rounded-full shadow-md" : "w-2 h-2 bg-white/30 group-hover:bg-white/60 rounded-full"}`}
            />
          </button>
        ))}
      </div>
    </div>
  );
};

