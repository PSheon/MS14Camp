import { GET_INFO,DONE_MISSION,DO_MONEY } from '../actions/types';

export default function (state = null, action) {
    switch (action.type) {
        case GET_INFO:
            return action.payload||'';
        case DONE_MISSION:
            return { ...state.mission, ...action.payload };
        case DO_MONEY:
            return { ...state.money, ...action.payload};
        default:
            return state;
    }
}