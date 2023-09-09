import { GET_DOGS, GET_DOGSBYNAME } from "./actions-types";

const initialState = {
    dogs:[],
};

const rootReducer = (state=initialState, action)=>{
    switch(action.type) {
        case GET_DOGS:
            return {...state, dogs: action.payload};
        case GET_DOGSBYNAME:
            return {...state, dogs: action.payload};
        default:
            return {...state};
    };
};

export default rootReducer;