import { GET_DOGS, GET_DOGSBYNAME, SET_ORDER, FILTER_TEMPERAMENT, FILTER_ORIGIN, GET_TEMPERAMENTS, SET_CURRENT_PAGE, GET_DOG_BY_ID} from "./actions-types";

const initialState = {
    dogs:[],
    temperaments: [],
    sortType: 'name',
    sortOrder: 'asc',
    temperament: '',
    origin: '',
    currentPage: 1,
    dog:[]
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
        case SET_CURRENT_PAGE:
            return {...state, currentPage: action.payload};
        case GET_DOG_BY_ID:
            return {...state, dog: action.payload};
        default:
            return {...state};
    };
};

export default rootReducer;