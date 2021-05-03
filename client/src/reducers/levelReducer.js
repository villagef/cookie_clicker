import { INCREMENTLEVEL, CLEARLEVEL } from "../actions/index";
const localLevel = sessionStorage.getItem("level");
const value = localLevel ? +localLevel : 1;

export default function levelReducer(state = value, action) {
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
