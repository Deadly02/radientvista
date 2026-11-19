import * as React from "react";
import { useRoute } from "../lib/route";

// Visible breadcrumb trail, read from the same route.breadcrumbs that feeds the BreadcrumbList JSON-LD.
export const Breadcrumbs = ({
  className = "text-xs tracking-widest uppercase text-hubli-sand mb-4 flex justify-center items-center gap-2",
  linkClassName = "hover:text-white transition-colors",
}) => {
  const route = useRoute();
  const items = route && route.breadcrumbs;
  if (!items) return null;
  return (
    <nav aria-label="Breadcrumb" className={className}>
      {items.map((item, i) => {
        const last = i === items.length - 1;
        return (
          <React.Fragment key={item.path}>
            {i > 0 && <span aria-hidden="true">/</span>}
            {last ? (
              <span className="text-hubli-sunset font-semibold" aria-current="page">
                {item.name}
              </span>
            ) : (
              <a href={item.path} className={linkClassName}>
                {item.name}
              </a>
            )}
          </React.Fragment>
        );
      })}
    </nav>
  );
};
