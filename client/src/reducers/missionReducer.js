import { GET_MISSION } from '../actions/types';

export default function (state = null, action) {
    switch (action.type) {
        case GET_MISSION:
            console.log(action.payload);
            return {...state,...action.payload};
        default:
            return state;
    }
}