import { INCREMENTLEVEL, CLEARLEVEL } from "../actions/index";

export default function levelReducer(state = 1, action) {
  switch (action.type) {
    case INCREMENTLEVEL:
      return (state += 1);
      break;
    case CLEARLEVEL:
      return (state = 1);
      break;

    default:
      return state;
  }
}
