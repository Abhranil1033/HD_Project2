import axios from "axios";

import {
    ALL_FLAT_REQUEST, ALL_FLAT_SUCCESS, ALL_FLAT_FAILED,CLEAR_ERRORS
} from "../constants/flatConstants";

export const getFlats = () => async(dispatch) =>{
    try{
        dispatch({type : ALL_FLAT_REQUEST});

        const link = `api/v1/flats`;
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

export const clearErrors = () => async (dispatch) => {
    dispatch ({type : CLEAR_ERRORS});
}