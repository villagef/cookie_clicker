import { INCREMENTCOOKIES, CLEARCOOKIES } from "../actions/index";

const localCookies = sessionStorage.getItem("cookies");
const value = localCookies ? +localCookies : 0;

export default function counterReducer(state = value, action) {
  switch (action.type) {
    case INCREMENTCOOKIES:
      return (state += 1);
      break;

    case CLEARCOOKIES:
      return (state = 0);
      break;

    default:
      return state;
  }
}
