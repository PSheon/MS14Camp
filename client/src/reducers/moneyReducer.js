import { GET_MONEY, GET_ERR} from '../actions/types';



export default function (state = 0, action) {
    switch (action.type) {
        case GET_MONEY:
            return action.payload || '';
        default:
            return state;
    }
}