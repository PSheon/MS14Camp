import { GET_MISSION,DONE_MISSION } from '../actions/types';

export default function (state = null, action) {
    switch (action.type) {
        case GET_MISSION:
            return action.payload||'';
        case DONE_MISSION:
            return { ...state, ...action.payload };
        default:
            return state;
    }
}