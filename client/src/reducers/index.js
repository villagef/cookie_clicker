import { combineReducers } from "redux";
import counterReducer from "./counterReducer";
import levelReducer from './levelReducer';

export default combineReducers({
  cookies: counterReducer,
  level: levelReducer
});
