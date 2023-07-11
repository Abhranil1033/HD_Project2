import { ADD_FLAT_TO_CART,ADD_FLATMATE_TO_CART,REMOVE_FLAT_CART_ITEM,REMOVE_FLATMATE_CART_ITEM } from "../constants/cartConstants";

export const flatCartReducer = (state = {
    flatCartItems: localStorage.getItem("flatCartItems")
        ? JSON.parse(localStorage.getItem("flatCartItems"))
        : []
}, action) => {
    switch (action.type) {
        case ADD_FLAT_TO_CART:
            const item = action.payload;

            const isItemExist = state.flatCartItems.find(
                (i) => i.flat === item.flat
            );

            if (isItemExist) {
                return {
                    ...state,
                    flatCartItems: state.flatCartItems.map((i) =>
                        i.flat === isItemExist.flat ? item : i
                    ),
                };
            } else {
                return {
                    ...state,
                    flatCartItems: [...state.flatCartItems, item],
                };
            }

        case REMOVE_FLAT_CART_ITEM:
            return {
                ...state,
                flatCartItems: state.flatCartItems.filter((i) => i.flat !== action.payload),
            };

        default:
            return state;
    }
}


export const flatmateCartReducer = (state = {
    flatmateCartItems: localStorage.getItem("flatmateCartItems")
        ? JSON.parse(localStorage.getItem("flatmateCartItems"))
        : []
}, action) => {
    switch (action.type) {
        case ADD_FLATMATE_TO_CART:
            const item = action.payload;

            const isItemExist = state.flatmateCartItems.find(
                (i) => i.flatmate === item.flatmate
            );

            if (isItemExist) {
                return {
                    ...state,
                    flatmateCartItems: state.flatmateCartItems.map((i) =>
                        i.flat === isItemExist.flatmate ? item : i
                    ),
                };
            } else {
                return {
                    ...state,
                    flatmateCartItems: [...state.flatmateCartItems, item],
                };
            }

        case REMOVE_FLATMATE_CART_ITEM:
            return {
                ...state,
                flatmateCartItems: state.flatmateCartItems.filter((i) => i.flatmate !== action.payload),
            };

        default:
            return state;
    }
}