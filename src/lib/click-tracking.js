import { track } from "./analytics";

// Which venue a WhatsApp link is about, read from its prefilled message.
const venueFromMessage = (text) => {
  if (/brick and brew/i.test(text)) return "dining";
  if (/breeze point/i.test(text)) return "bar";
  if (/gala vista|banquet/i.test(text)) return "banquets";
  if (/room|accommodation|book a room/i.test(text)) return "rooms";
  return "general";
};

// One delegated listener tracks every outbound action on the site:
// book_now_click (ResAvenue), whatsapp_click (+ venue), phone_click, email_click.
export function installClickTracking() {
  document.addEventListener(
    "click",
    (event) => {
      const a = event.target instanceof Element ? event.target.closest("a[href]") : null;
      if (!a) return;
      const href = a.getAttribute("href") || "";
      const page = window.location.pathname;
      if (href.includes("bookings.resavenue.com")) track("book_now_click", { page, link_text: a.textContent.trim().slice(0, 60) });
      else if (href.startsWith("https://wa.me/")) {
        let text = "";
        try {
          text = new URL(href).searchParams.get("text") || "";
        } catch {
          text = "";
        }
        track("whatsapp_click", { page, venue: venueFromMessage(text) });
      } else if (href.startsWith("tel:")) track("phone_click", { page, number: href.slice(4) });
      else if (href.startsWith("mailto:")) track("email_click", { page });
    },
    { capture: true }
  );
}
