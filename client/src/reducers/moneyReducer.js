import { GET_MONEY } from '../actions/types';

export default function (state = 0, action) {
    switch (action.type) {
        case GET_MONEY:
            console.log(action.payload);
            return action.payload || '';
        default:
            return state;
    }
}