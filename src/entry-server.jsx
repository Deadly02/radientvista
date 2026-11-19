import * as React from "react";
import { renderToString } from "react-dom/server";
import { App } from "./App";
import { ROUTES } from "./routes";
import { renderHead, routeGraph } from "./seo/head";
import { cspHeaderValue } from "./seo/csp";
import { SITE_URL } from "./data/site";

export { ROUTES, renderHead, routeGraph, cspHeaderValue, SITE_URL };

export const renderBody = (route) => renderToString(<App route={route} />);
