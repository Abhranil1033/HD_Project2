import axios from "axios";

import {
    ALL_FLAT_REQUEST, ALL_FLAT_SUCCESS, ALL_FLAT_FAILED,FLAT_DETAILS_REQUEST,FLAT_DETAILS_SUCCESS,FLAT_DETAILS_FAILED,CLEAR_ERRORS
} from "../constants/flatConstants";

export const getFlats = (currentPage=1,rent=[0,125000],category,ratings=0) => async(dispatch) =>{
    try{
        dispatch({type : ALL_FLAT_REQUEST});

        const link = `api/v1/flats?page=${currentPage}&rent[gte]=${rent[0]}&rent[lte]=${rent[1]}&ratings[gte]=${ratings}`;
        if(category){
            link = `/api/v1/products?page=${currentPage}&rent[gte]=${rent[0]}&rent[lte]=${rent[1]}&category=${category}&ratings[gte]=${ratings}`;
        }

        const {data} = await axios.get(link);

        dispatch({
            type : ALL_FLAT_SUCCESS,
            payload : data
        })
    }catch(error){
        dispatch({
            type : ALL_FLAT_FAILED,
            payload : error.response.data.message
        })
    }
}


export const getFlatDetails = (id)=> async (dispatch) => {
    try{
        dispatch({type : FLAT_DETAILS_REQUEST});

        const {data} = await axios.get(`/api/v1/flats/${id}`);

        dispatch({
            type : FLAT_DETAILS_SUCCESS,
            payload : data.flat,
        })
    } catch(error){
        dispatch({
            type : FLAT_DETAILS_FAILED,
            payload : error.response.data.message,
        });
    }
};


export const clearErrors = () => async (dispatch) => {
    dispatch ({type : CLEAR_ERRORS});
}