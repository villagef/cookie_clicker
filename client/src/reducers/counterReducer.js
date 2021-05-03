import { INCREMENTCOOKIES, CLEARCOOKIES } from "../actions/index";

export default function counterReducer(state = 0, action) {
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
