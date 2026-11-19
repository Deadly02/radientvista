import * as React from "react";
import { hydrateRoot } from "react-dom/client";
import { App } from "./App";
import { findRoute } from "./routes";
import { installClickTracking } from "./lib/click-tracking";

installClickTracking();

const rootEl = document.getElementById("root");
// The server writes the route key, so the client renders exactly what the server rendered,
// even for 404.html served at an arbitrary URL.
const route = { ...findRoute(rootEl.dataset.route), lastmod: rootEl.dataset.lastmod };

hydrateRoot(rootEl, <App route={route} />, {
  onRecoverableError(error, info) {
    // Surfaced by the build-time parity check (scripts/check-parity.mjs).
    console.error("[hydration]", error && error.message, info && info.componentStack ? info.componentStack : "");
  },
});
