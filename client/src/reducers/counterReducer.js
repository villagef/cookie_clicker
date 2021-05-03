import {
  INCREMENTCOOKIES,
  DECREMENTCOOKIES,
  CLEARCOOKIES,
} from "../actions/index";

const localCookies = sessionStorage.getItem("cookies");
const initValue = localCookies ? +localCookies : 0;

export default function counterReducer(state = initValue, action) {
  const localPrice = sessionStorage.getItem("price");
  const price = localPrice && localPrice <= state ? +localPrice : 0;
  sessionStorage.removeItem("price");

  switch (action.type) {
    case INCREMENTCOOKIES:
      return (state += 1);
      break;

    case DECREMENTCOOKIES:
      return (state -= price);
      break;

    case CLEARCOOKIES:
      return (state = 0);
      break;

    default:
      return state;
  }
}
