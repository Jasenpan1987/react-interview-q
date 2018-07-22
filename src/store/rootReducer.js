import { combineReducers } from "redux";

export const rootReducer = combineReducers({
  currentContactForm: (name = "foo") => name,
  currentContactId: (id = 1) => id
});
