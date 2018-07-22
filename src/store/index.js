import { createStore, compose, applyMiddleware } from "redux";
import thunk from "redux-thunk";

import { rootReducer } from "./rootReducer";

const devToolsExtension = window && window.__REDUX_DEVTOOLS_EXTENSION__;

const createStoreWithMiddleware = compose(
  applyMiddleware(thunk),
  devToolsExtension ? devToolsExtension() : next => next
)(createStore);

const store = createStoreWithMiddleware(rootReducer);

if (process.env.NODE_ENV !== "production") {
  window.store = store;
}

export { store };
