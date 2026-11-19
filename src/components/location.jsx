import { DISTANCES, HOTEL_FACTS, distanceText, known } from "../data/facts";

// Fallback until the Google Business Profile embed URL is supplied (facts.js: HOTEL_FACTS.mapEmbedUrl).
const FALLBACK_MAP =
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3847.461623192068!2d75.1158!3d15.3524!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTXCsDIxJzA4LjYiTiA3NcKwMDYnNTYuOSJF!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin";

export const MapEmbed = ({ className = "" }) => (
  <iframe
    title="Map: Radiant Vista on Gokul Road, Hubballi"
    src={known(HOTEL_FACTS.mapEmbedUrl) ? HOTEL_FACTS.mapEmbedUrl : FALLBACK_MAP}
    width="600"
    height="450"
    className={`w-full h-full border-0 grayscale-[0.2] ${className}`}
    allowFullScreen={true}
    loading="lazy"
    referrerPolicy="no-referrer-when-downgrade"
  />
);

const ROUTES_IN = [
  {
    key: "airport",
    from: "From Hubballi Airport",
    how: "Leave the airport on Gokul Road. Radiant Vista is on the same road in Akshay Park, so there is no need to cross the city centre.",
  },
  {
    key: "railway",
    from: "From Hubballi Junction railway station",
    how: "Take a taxi or auto-rickshaw towards Gokul Road and ask for Akshay Park. Share your train time with reservations if you would like help with transport.",
  },
  {
    key: "busStand",
    from: "From the Hubballi new bus stand",
    how: "Take a taxi or auto-rickshaw along Gokul Road to Akshay Park; the hotel is on the main road.",
  },
];

// Ordered "How to reach" list. Distances and drive times appear once confirmed in facts.js.
export const HowToReach = ({ dark = false }) => (
  <ol className={`space-y-4 list-decimal pl-5 ${dark ? "text-gray-300" : "text-gray-700"}`}>
    {ROUTES_IN.map((r) => {
      const d = distanceText(DISTANCES[r.key]);
      return (
        <li key={r.key} className="pl-1">
          <strong className={dark ? "text-white" : "text-hubli-dark"}>{r.from}</strong>
          {d ? `: ${d}.` : "."} {r.how}
        </li>
      );
    })}
  </ol>
);
