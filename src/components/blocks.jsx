import * as React from "react";
import { ArrowRight } from "lucide-react";
import { Breadcrumbs } from "./Breadcrumbs";
import { WhatsAppIcon } from "./icons";
import { isTodo, known } from "../data/facts";
import { useRoute } from "../lib/route";
import { formatDate } from "../lib/dates";

// Minimal inline markup for copy kept in data files: [label](href) and **bold**.
export const RichText = ({ text }) => {
  const parts = [];
  const re = /\[([^\]]+)\]\(([^)]+)\)|\*\*([^*]+)\*\*/g;
  let last = 0;
  let m;
  let i = 0;
  while ((m = re.exec(text))) {
    if (m.index > last) parts.push(text.slice(last, m.index));
    if (m[1]) {
      const external = /^https?:/.test(m[2]);
      parts.push(
        <a
          key={i++}
          href={m[2]}
          className="text-hubli-earth font-semibold underline decoration-hubli-sunset/40 underline-offset-2 hover:text-hubli-sunset"
          {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
        >
          {m[1]}
        </a>
      );
    } else parts.push(<strong key={i++}>{m[3]}</strong>);
    last = re.lastIndex;
  }
  if (last < text.length) parts.push(text.slice(last));
  return <>{parts}</>;
};

// Dark page banner with breadcrumbs, the page's single <h1> and its one-sentence definition.
export const PageHero = ({ eyebrow, title, intro }) => (
  <section className="relative py-16 md:py-24 bg-hubli-dark text-white overflow-hidden">
    <div className="container mx-auto px-4 md:px-6 relative z-10 max-w-4xl text-center">
      <Breadcrumbs />
      {eyebrow && <p className="text-hubli-sunset font-bold tracking-widest uppercase text-xs mb-2">{eyebrow}</p>}
      <h1 className="text-4xl md:text-5xl font-serif font-bold text-white leading-tight mb-6">{title}</h1>
      {intro && (
        <p id="answer-summary" className="text-gray-300 text-lg md:text-xl font-light leading-relaxed max-w-3xl mx-auto">
          <RichText text={intro} />
        </p>
      )}
    </div>
  </section>
);

// Table that only shows a column when at least one row has a confirmed value for it.
// Unknown cells in a shown column read "On request".
export const FactTable = ({ caption, columns, rows, className = "" }) => {
  const visible = columns.filter((c) => c.always || rows.some((r) => known(r[c.key])));
  const cell = (c, r) => {
    const v = r[c.key];
    if (isTodo(v) || v === undefined || v === null || v === "") return "On request";
    return c.format ? c.format(v, r) : v;
  };
  return (
    <div className={`overflow-x-auto rounded-xl border border-gray-200 bg-white shadow-sm ${className}`}>
      <table className="w-full text-left text-sm">
        {caption && <caption className="text-left px-4 pt-4 pb-2 text-xs uppercase tracking-widest text-gray-500">{caption}</caption>}
        <thead className="bg-hubli-light text-hubli-dark">
          <tr>
            {visible.map((c) => (
              <th key={c.key} scope="col" className="px-4 py-3 font-semibold">
                {c.label}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((r, i) => (
            <tr key={i} className="border-t border-gray-100 align-top">
              {visible.map((c, j) =>
                j === 0 ? (
                  <th key={c.key} scope="row" className="px-4 py-3 font-semibold text-hubli-dark">
                    {cell(c, r)}
                  </th>
                ) : (
                  <td key={c.key} className="px-4 py-3 text-gray-600">
                    {cell(c, r)}
                  </td>
                )
              )}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export const WhatsAppButton = ({ href, children = "Enquire on WhatsApp" }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-[#25D366] text-white font-bold rounded-sm hover:bg-[#20bd5a] transition-all shadow-md btn-hover-effect text-sm uppercase tracking-wider"
  >
    <WhatsAppIcon className="w-5 h-5" />
    {children}
  </a>
);

export const LinkButton = ({ href, children, external }) => (
  <a
    href={href}
    {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
    className="inline-flex items-center justify-center gap-2 px-6 py-3.5 border-2 border-hubli-earth text-hubli-earth font-bold rounded-sm hover:bg-hubli-earth hover:text-white transition-all shadow-sm btn-hover-effect text-sm uppercase tracking-wider group"
  >
    {children}
    <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform duration-300" />
  </a>
);

// Internal links at the bottom of pages.
export const RelatedLinks = ({ title = "Explore More at Radiant Vista", links }) => (
  <section className="py-12 bg-white border-t border-gray-200">
    <div className="container mx-auto px-4 md:px-6 max-w-5xl text-center">
      <h2 id="explore-more" className="text-xl font-serif font-bold text-hubli-dark mb-6">
        {title}
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {links.map((l) => (
          <a
            key={l.href}
            href={l.href}
            className="p-4 bg-hubli-light rounded-lg shadow-sm hover:shadow-md transition-shadow font-semibold text-hubli-earth hover:text-hubli-sunset text-sm"
          >
            {l.label}
          </a>
        ))}
      </div>
    </div>
  </section>
);

// "Last updated" line. The date is the build date on which the page content last changed.
export const LastUpdated = () => {
  const route = useRoute();
  if (!route || !route.lastmod || route.noindex) return null;
  return (
    <p className="text-center text-xs text-gray-500 py-4 bg-hubli-light">
      Last updated:{" "}
      <time data-lastmod="" dateTime={route.lastmod}>
        {formatDate(route.lastmod)}
      </time>
    </p>
  );
};
