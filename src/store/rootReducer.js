import { combineReducers } from "redux";
import { userListReducer as userlist } from "../reducers/userListReducer";

export const rootReducer = combineReducers({
  userlist,
  currentContactForm: (name = "foo") => name,
  currentContactId: (id = 1) => id
});
