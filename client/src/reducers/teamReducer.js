import { GET_INFO,DONE_MISSION } from '../actions/types';

export default function (state = null, action) {
    switch (action.type) {
        case GET_INFO:
            return action.payload||'';
        case DONE_MISSION:
            return { ...state.mission, ...action.payload };
        default:
            return state;
    }
}