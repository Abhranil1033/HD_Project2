import axios from "axios";

import {
    ALL_FLATMATE_REQUEST, ALL_FLATMATE_SUCCESS, ALL_FLATMATE_FAILED,CLEAR_ERRORS
} from "../constants/flatmateConstants";

export const getFlatmates = () => async(dispatch) =>{
    try{
        dispatch({type : ALL_FLATMATE_REQUEST});

        const link = `api/v1/flatmates`;
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

export const clearErrors = () => async (dispatch) => {
    dispatch ({type : CLEAR_ERRORS});
}