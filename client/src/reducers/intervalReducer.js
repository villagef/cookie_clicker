import { SETTRUE, SETFALSE } from '../actions/index';

export default function intervalReducer (state = false, action) {
    switch(action.type) {
        case SETTRUE:
            return (state = true);
        break;

        case SETFALSE:
            return (state = false);
        break;

        default:
            return state;
    }
}