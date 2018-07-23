import { combineReducers } from "redux";
import { userListReducer as userlist } from "../reducers/userListReducer";
import { userFormReducer as userform } from "../reducers/userFormReducer";

export const rootReducer = combineReducers({
  userlist,
  userform
});
