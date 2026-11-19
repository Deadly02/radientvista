import * as React from "react";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { FloatingWhatsApp } from "./components/FloatingWhatsApp";
import { RouteContext } from "./lib/route";
import { LastUpdated } from "./components/blocks";

// Same tree on the server (renderToString) and the client (hydrateRoot).
// Pages are separate HTML files, so navigation is plain <a href> links.
export function App({ route }) {
  const Page = route.component;
  React.useEffect(() => {
    window.__RV_HYDRATED__ = true;
  }, []);
  return (
    <RouteContext.Provider value={route}>
      <div className="font-sans antialiased text-gray-800 bg-hubli-light selection:bg-hubli-sunset selection:text-white min-h-screen flex flex-col justify-between">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-[300] focus:bg-white focus:text-hubli-earth focus:font-semibold focus:px-4 focus:py-2 focus:rounded focus:shadow-lg"
        >
          Skip to content
        </a>
        <Header currentPath={route.path} />
        <Page />
        <LastUpdated />
        <Footer />
        <FloatingWhatsApp />
      </div>
    </RouteContext.Provider>
  );
}
