import * as React from "react";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { FloatingWhatsApp } from "./components/FloatingWhatsApp";
import { RouteContext } from "./lib/route";

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
        <Header currentPath={route.path} />
        <Page />
        <Footer />
        <FloatingWhatsApp />
      </div>
    </RouteContext.Provider>
  );
}
