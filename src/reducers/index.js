import { combineReducers } from "redux";
import authentication from "./authentication";

const rootReducer = combineReducers({
  auth: authentication
});

export default rootReducer;
