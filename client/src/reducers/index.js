import { combineReducers } from "redux";
import counterReducer from "./counterReducer";
import levelReducer from "./levelReducer";
import breakpointReducer from "./breakpointReducer";
import booleanReducer from "./booleanReducer";

export default combineReducers({
  cookies: counterReducer,
  level: levelReducer,
  breakpoint: breakpointReducer,
  boolean: booleanReducer
});
