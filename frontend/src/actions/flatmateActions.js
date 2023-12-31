import axios from "axios";

import {
    ALL_FLATMATE_REQUEST, ALL_FLATMATE_SUCCESS, ALL_FLATMATE_FAILED,
    FLATMATE_DETAILS_REQUEST,FLATMATE_DETAILS_SUCCESS,FLATMATE_DETAILS_FAILED,
    CLEAR_ERRORS
} from "../constants/flatmateConstants";

export const getFlatmates = (keyword="",currentPage=1,category) => async(dispatch) =>{
    try{
        dispatch({ type: ALL_FLATMATE_REQUEST });
  
      let link = `/api/v1/flatmates?keyword=${keyword}&page=${currentPage}`;
      if (category) {
        link += `&category=${category}`;
      }

        const {data} = await axios.get(link);

        dispatch({
            type : ALL_FLATMATE_SUCCESS,
            payload : data
        })
    }catch(error){
        dispatch({
            type : ALL_FLATMATE_FAILED,
            payload : error.response.data.message
        })
    }
}


export const getFlatmateDetails = (id)=> async (dispatch) => {
    try{
        dispatch({type : FLATMATE_DETAILS_REQUEST});

        const {data} = await axios.get(`/api/v1/flatmate/${id}`);

        dispatch({
            type : FLATMATE_DETAILS_SUCCESS,
            payload : data.flatmate,
        })
    } catch(error){
        dispatch({
            type : FLATMATE_DETAILS_FAILED,
            payload : error.response.data.message,
        });
    }
};


export const clearErrors = () => async (dispatch) => {
    dispatch ({type : CLEAR_ERRORS});
}