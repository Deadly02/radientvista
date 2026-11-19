import { Section } from "./Section";

// Visible FAQ. Pass the same array that the route's FAQPage JSON-LD is built from
// (src/data/content.js), so the two can never differ.
export const FaqSection = ({ faqs, title, eyebrow = "Frequently Asked Questions", className = "bg-white" }) => (
  <Section id="faq" labelledBy="faq-title" className={className}>
    <div className="container mx-auto px-4 md:px-6 max-w-3xl">
      <div className="text-center mb-12">
        <span className="text-hubli-sunset font-bold tracking-widest uppercase text-xs">{eyebrow}</span>
        <h2 id="faq-title" className="text-3xl md:text-4xl font-serif text-hubli-dark font-bold mt-2">
          {title}
        </h2>
      </div>
      <div className="space-y-6">
        {faqs.map(({ q, a }) => (
          <div className="p-6 rounded-lg bg-hubli-light border border-gray-100" key={q}>
            <h3 className="font-serif text-xl font-bold text-hubli-dark mb-2">{q}</h3>
            <p className="text-gray-600 leading-relaxed text-sm">{a}</p>
          </div>
        ))}
      </div>
    </div>
  </Section>
);
