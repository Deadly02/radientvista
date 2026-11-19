import * as React from "react";

// Section wrapper with a scroll-reveal entrance.
// The server always renders the content fully visible. After hydration, only sections that
// start below the fold are "armed" (hidden) and then revealed when they scroll into view, so
// the text is in the HTML and readable without JavaScript, and nothing above the fold flickers.
export const Section = ({ children, id, className = "", delay = 0, labelledBy }) => {
  const ref = React.useRef(null);
  const [phase, setPhase] = React.useState("static"); // static | armed | shown

  React.useEffect(() => {
    const el = ref.current;
    if (!el || typeof IntersectionObserver === "undefined") return undefined;
    if (window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches) return undefined;
    if (el.getBoundingClientRect().top < window.innerHeight) return undefined;
    setPhase("armed");
    const io = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          setPhase("shown");
          io.disconnect();
        }
      },
      { rootMargin: "0px 0px -80px 0px" }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <section id={id} aria-labelledby={labelledBy} className={`py-16 md:py-24 ${className} overflow-hidden`}>
      <div
        ref={ref}
        className={`reveal${phase === "armed" ? " reveal-armed" : ""}`}
        style={delay ? { transitionDelay: `${delay}s` } : undefined}
      >
        {children}
      </div>
    </section>
  );
};
