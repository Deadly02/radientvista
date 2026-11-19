// Content-Security-Policy written into dist/.htaccess by build.mjs.
// Add a host here (not in .htaccess) when a new third-party service is introduced.
export const CSP = {
  "default-src": ["'self'"],
  "script-src": ["'self'", "'unsafe-inline'"],
  "style-src": ["'self'", "'unsafe-inline'", "https://fonts.googleapis.com"],
  "font-src": ["'self'", "https://fonts.gstatic.com", "data:"],
  "img-src": [
    "'self'",
    "data:",
    "https://hotelradiantvista.com",
    "https://www.transparenttextures.com",
    "https://*.googleapis.com",
    "https://*.gstatic.com",
  ],
  "frame-src": ["'self'", "https://www.google.com", "https://bookings.resavenue.com"],
  "connect-src": ["'self'", "https://bookings.resavenue.com"],
  "form-action": ["'self'"],
  "base-uri": ["'self'"],
  "object-src": ["'none'"],
};

export const cspHeaderValue = () =>
  Object.entries(CSP)
    .map(([k, v]) => `${k} ${v.join(" ")}`)
    .join("; ");
