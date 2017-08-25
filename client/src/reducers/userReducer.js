import { SET_USER } from '../actions/types';

const initialState = {
    name: '傻眼貓咪',
    email: 'sayan@maomii.com'
}

export default function (state = initialState , action) {
    switch (action.type) {
        case SET_USER:
            return action.payload;
        default:
            return state;
    }
}