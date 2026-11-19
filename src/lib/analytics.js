// GA4 event helper. Does nothing until the GA4 loader (see seo/head.js) has run, so it is safe
// during server rendering and when no Measurement ID is configured.
export const track = (name, params = {}) => {
  if (typeof window === "undefined" || typeof window.gtag !== "function") return;
  window.gtag("event", name, params);
};
