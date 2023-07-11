import { ADD_FLAT_TO_CART,ADD_FLATMATE_TO_CART,REMOVE_FLAT_CART_ITEM,REMOVE_FLATMATE_CART_ITEM } from "../constants/cartConstants";
import axios from "axios";

// Add flats to Cart
export const addFlatsToCart = (id) => async (dispatch, getState) => {
    const { data } = await axios.get(`/api/v1/flats/${id}`);

    dispatch({
        type: ADD_FLAT_TO_CART,
        payload: {
            flat: data.flat._id,
            location: data.flat.city,
            price: data.flat.rent,
            image: data.flat.images[0].url
        },
    });

    localStorage.setItem("flatCartItems", JSON.stringify(getState().flatCart.flatCartItems));
};


// Remove flat item
export const removeFlatsFromCart = (id) => async (dispatch, getState) => {
    dispatch({
        type : REMOVE_FLAT_CART_ITEM,
        payload : id,
    })

    localStorage.setItem("flatCartItems", JSON.stringify(getState().flatCart.flatCartItems));
};


// Add flatmates to Cart
export const addFlatmatesToCart = (id) => async (dispatch, getState) => {
    const { data } = await axios.get(`/api/v1/flatmates/${id}`);

    dispatch({
        type: ADD_FLATMATE_TO_CART,
        payload: {
            flatmate: data.flatmate._id,
            name:data.flatmate.name,
            proffession : data.flatmate.proffession
        },
    });

    localStorage.setItem("flatmateCartItems", JSON.stringify(getState().flatmateCart.flatmateCartItems));
};


// Remove flatmate item
export const removeFlatmatesFromCart = (id) => async (dispatch, getState) => {
    dispatch({
        type : REMOVE_FLATMATE_CART_ITEM,
        payload : id,
    })

    localStorage.setItem("flatmateCartItems", JSON.stringify(getState().flatmateCart.flatmateCartItems));
};