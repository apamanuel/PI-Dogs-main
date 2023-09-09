import axios from 'axios';
import { GET_DOGS, GET_DOGSBYNAME } from './actions-types';

export const getDogs=()=>{
    return async (dispatch)=>{
        const dogs = await axios.get('http://localhost:3001/dogs');
        dispatch({type:GET_DOGS, payload: dogs.data});
    };
};

export const getDogsByName = (name)=>{
    return async (dispatch)=>{
        const dogs = await axios.get(`http://localhost:3001/dogs?name=${name}`);
        dispatch({type:GET_DOGSBYNAME, payload: dogs.data});
    };
};

