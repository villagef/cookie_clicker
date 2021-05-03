import { combineReducers } from "redux";
import counterReducer from "./counterReducer";
import levelReducer from "./levelReducer";
import breakpointReducer from "./breakpointReducer";

export default combineReducers({
  cookies: counterReducer,
  level: levelReducer,
  breakpoint: breakpointReducer,
});
