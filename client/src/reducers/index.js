import { combineReducers } from "redux";
import counterReducer from "./counterReducer";
import levelReducer from "./levelReducer";
import breakpointReducer from "./breakpointReducer";
import popperReducer from "./popperReducer";
import intervalReducer from "./intervalReducer";
import totalReducer from "./totalReducer";

export default combineReducers({
  cookies: counterReducer,
  level: levelReducer,
  breakpoint: breakpointReducer,
  boolean: popperReducer,
  interval: intervalReducer,
  total: totalReducer,
});
