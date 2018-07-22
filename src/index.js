import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./components/App";
import { getUsers } from "./actions/userListActions";

import { RootApp, store } from "./rootApp";

ReactDOM.render(
  <RootApp>
    <App />
  </RootApp>,
  document.getElementById("root")
);
store.dispatch(getUsers());
