import { createStore, compose, applyMiddleware } from "redux";
import thunk from "redux-thunk";

import { rootReducer } from "./rootReducer";

const devToolsExtension = window && window.__REDUX_DEVTOOLS_EXTENSION__;

const createStoreWithMiddleware = compose(
  applyMiddleware(thunk),
  devToolsExtension ? devToolsExtension() : next => next
)(createStore);

const buildStore = (initState = {}) =>
  createStoreWithMiddleware(rootReducer, initState);

export { buildStore };
