import { MAKE_ROOM,DEL_ROOM,QUERY_ROOM,QUERY_USER,DEL_USER,ADD_MONEY,DEL_MONEY,QUERY_MONEY,QUERY_TEAM,DEL_TEAM,INIT_TEAM} from '../actions/types';

const INIT_STATE={
    user:null,
    money:null,
    mission:null,
    room:null,
    team:null
}

export default function (state = 0, action) {
    switch (action.type) {
        case MAKE_ROOM:
            return { ...state,...{room:action.payload}};
        case QUERY_ROOM:
            return { ...state, ...{ room: action.payload }};
        case DEL_ROOM:
            return {...state, ...{ room: action.payload }};
        case QUERY_USER:
            return { ...state, ...{ user: action.payload }};
        case DEL_USER:
            return { ...state, ...{ user: action.payload } };
        case ADD_MONEY:
            return { ...state, ...{ moeny: action.payload } };
        case DEL_MONEY:
            return { ...state, ...{ moeny: action.payload } };
        case QUERY_MONEY:
            return { ...state, ...{ moeny: action.payload } };
        case QUERY_TEAM:
            return { ...state, ...{ team: action.payload } };
        case DEL_TEAM:
            return { ...state, ...{ team: action.payload } };
        case INIT_TEAM:
            return { ...state, ...{ team: action.payload } };
        default:
            return state;
    }
}