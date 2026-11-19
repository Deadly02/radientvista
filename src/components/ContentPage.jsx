import { FactTable, LinkButton, PageHero, RelatedLinks, RichText, WhatsAppButton } from "./blocks";
import { FaqSection } from "./FaqSection";
import { ContactForm } from "./ContactForm";
import { NapList } from "./ContactSection";
import { HowToReach, MapEmbed } from "./location";
import { imgProps } from "../lib/img";

const Block = ({ block }) => {
  if (typeof block === "string") {
    return (
      <p className="text-gray-700 leading-relaxed">
        <RichText text={block} />
      </p>
    );
  }
  if (block.h3) return <h3 className="text-xl font-serif font-bold text-hubli-dark pt-2">{block.h3}</h3>;
  if (block.list) {
    const Tag = block.ordered ? "ol" : "ul";
    return (
      <Tag className={`${block.ordered ? "list-decimal" : "list-disc"} pl-6 space-y-2 text-gray-700`}>
        {block.list.map((item, i) => (
          <li key={i}>
            <RichText text={item} />
          </li>
        ))}
      </Tag>
    );
  }
  if (block.table) return <FactTable {...block.table} />;
  if (block.images) {
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {block.images.map((im) => (
          <img
            key={im.src}
            {...imgProps(im.src, "(min-width: 768px) 448px, 100vw")}
            alt={im.alt}
            loading="lazy"
            decoding="async"
            className="w-full h-64 object-cover rounded-xl shadow-md"
          />
        ))}
      </div>
    );
  }
  if (block.buttons) {
    return (
      <div className="flex flex-col sm:flex-row gap-4 pt-2">
        {block.buttons.map((b) =>
          b.whatsapp ? (
            <WhatsAppButton key={b.href} href={b.href}>
              {b.label}
            </WhatsAppButton>
          ) : (
            <LinkButton key={b.href} href={b.href} external={b.external}>
              {b.label}
            </LinkButton>
          )
        )}
      </div>
    );
  }
  if (block.nap) return <NapList dark={false} />;
  if (block.howToReach) return <HowToReach />;
  if (block.map) {
    return (
      <div className="h-[360px] rounded-xl overflow-hidden shadow-md">
        <MapEmbed />
      </div>
    );
  }
  if (block.form) {
    return (
      <div className="bg-white rounded-xl p-6 md:p-8 shadow-md border border-gray-100">
        <ContactForm idPrefix={block.form} source={block.form} />
      </div>
    );
  }
  if (block.note) {
    return <p className="text-sm text-gray-500 italic">{block.note}</p>;
  }
  return null;
};

// Renders a page described as data (src/content/pages.js).
export const ContentPage = ({ page }) => (
  <main id="main" className="pt-20 bg-hubli-light min-h-screen text-hubli-dark">
    {page.draft && (
      <p className="bg-amber-100 text-amber-900 text-sm text-center px-4 py-3 border-b border-amber-200">
        Draft for approval by Radiant Vista. This page is not indexed by search engines until it is approved.
      </p>
    )}
    <PageHero eyebrow={page.eyebrow} title={page.h1} intro={page.intro} />
    {page.sections.map((sec, i) => (
      <section
        key={sec.id}
        id={sec.id}
        aria-labelledby={`${sec.id}-title`}
        className={`py-12 md:py-16 ${i % 2 === 0 ? "bg-white" : "bg-hubli-light"}`}
      >
        <div className="container mx-auto px-4 md:px-6 max-w-4xl space-y-5">
          <h2 id={`${sec.id}-title`} className="text-3xl md:text-4xl font-serif text-hubli-green font-bold">
            {sec.title}
          </h2>
          {sec.blocks.map((b, j) => (
            <Block key={j} block={b} />
          ))}
        </div>
      </section>
    ))}
    {page.faqs && <FaqSection faqs={page.faqs} title={page.faqTitle || "Frequently Asked Questions"} className="bg-white" />}
    {page.related && <RelatedLinks links={page.related} />}
  </main>
);
