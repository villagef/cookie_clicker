import { INCREMENTBREAKPOINT, CLEARBREAKPOINT } from "../actions/index";
const localLevel = sessionStorage.getItem("breakpoint");
const value = localLevel ? +localLevel : 10;

export default function breakpointReducer(state = value, action) {
  switch (action.type) {
    case INCREMENTBREAKPOINT:
      return state * 2;
      break;

    case CLEARBREAKPOINT:
      return (state = 10);
      break;

    default:
      return state;
  }
}
