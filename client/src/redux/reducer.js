import { GET_DOGS, GET_DOGSBYNAME, SET_ORDER, FILTER_TEMPERAMENT, FILTER_ORIGIN, GET_TEMPERAMENTS} from "./actions-types";

const initialState = {
    dogs:[],
    temperaments: [],
    sortType: 'name',
    sortOrder: 'asc',
    temperament: '',
    origin: ''
};

const rootReducer = (state=initialState, action)=>{
    switch(action.type) {
        case GET_DOGS:
            return {...state, dogs: action.payload};
        case GET_DOGSBYNAME:
            return {...state, dogs: action.payload};
        case SET_ORDER:
            return {...state, sortType: action.payload.sortType, sortOrder: action.payload.sortOrder};        
        case FILTER_TEMPERAMENT:
            return {...state, temperament: action.payload};
        case FILTER_ORIGIN:
            return {...state, origin: action.payload};
        case GET_TEMPERAMENTS:
            return {...state, temperaments: action.payload};
        default:
            return {...state};
    };
};

export default rootReducer;