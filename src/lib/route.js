import * as React from "react";

export const RouteContext = React.createContext(null);
export const useRoute = () => React.useContext(RouteContext);
