import * as React from "react";
import { renderToString } from "react-dom/server";
import { App } from "./App";
import { ROUTES } from "./routes";
import { renderHead, routeGraph } from "./seo/head";

export { ROUTES, renderHead, routeGraph };

export const renderBody = (route) => renderToString(<App route={route} />);
