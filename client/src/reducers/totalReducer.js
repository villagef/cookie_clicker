import { INCREMENTTOTAL, CLEARTOTAL } from "../actions/index";

const localTotal = sessionStorage.getItem("total");
const value = localTotal ? +localTotal : 0;

export default function totalReducer(state = value, action) {
  switch (action.type) {
    case INCREMENTTOTAL:
      return (state += 1);
      break;

    case CLEARTOTAL:
      return (state = 0);
      break;

    default:
      return state;
  }
}
