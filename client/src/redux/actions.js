import axios from 'axios';
import { GET_DOGS, GET_DOGSBYNAME, SET_ORDER, FILTER_TEMPERAMENT, FILTER_ORIGIN, GET_TEMPERAMENTS, SET_CURRENT_PAGE, GET_DOG_BY_ID } from './actions-types';

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

export const getTemperaments = ()=>{
    return async (dispatch)=>{
        const temperaments = await axios.get('http://localhost:3001/temperaments');
        dispatch({type: GET_TEMPERAMENTS, payload: temperaments.data});
    };
};

export const setOrder = (sortType, sortOrder)=>{
    return {
        type: SET_ORDER,
        payload: {sortType, sortOrder}
    };
};

export const filterByTemperament = (selectedTemperament)=>{
    return {
        type: FILTER_TEMPERAMENT,
        payload: selectedTemperament
    };
};

export const filterByOrigin = (selectedOrigin)=>{
    return {
        type: FILTER_ORIGIN,
        payload: selectedOrigin
    }
};

export const setCurrentPage = (page)=>{
    return {
        type: SET_CURRENT_PAGE,
        payload: page
    }
};

export const getDogById = (id)=>{
    return async (dispatch)=>{
        const dog = await axios.get(`http://localhost:3001/dogs/${id}`);
        dispatch({type: GET_DOG_BY_ID, payload: dog.data});
    };
};
  