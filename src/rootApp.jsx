import React from "react";
import { Provider } from "react-redux";

import { buildStore } from "./store/index";

let store;

export const RootApp = ({ children, initState = {} }) => {
  store = buildStore(initState);
  if (process.env.NODE_ENV !== "production") {
    window.store = store;
  }

  return <Provider store={store}>{children}</Provider>;
};

export { store };
