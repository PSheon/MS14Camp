import { SET_USER ,GET_USER,INIT_USER,FIND_GOD} from '../actions/types';

const initialState = {
    name: '勇者',
    email: 'sayan@maomii.com',
    isGod:false,
    alMightyOnes:false,
    room:-1,
    gender:'',
    teamId:''
}

export default function (state = initialState , action) {
    switch (action.type) {
        case SET_USER:
            return { ...state, ...action.payload };
        // case GET_USER:
        //     return {...state,...action.payload};
        case INIT_USER:
            return { ...state, ...action.payload };
        case FIND_GOD:
            return { ...state, ...action.payload };
        default:
            return state;
    }
}