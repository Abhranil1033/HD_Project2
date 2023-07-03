import {
    ALL_FLATMATE_REQUEST, ALL_FLATMATE_SUCCESS, ALL_FLATMATE_FAILED, CLEAR_ERRORS
} from "../constants/flatmateConstants";

export const flatmateReducer = (state = { flatmates: [] }, action) => {
    switch (action.type) {
        case ALL_FLATMATE_REQUEST: {
            return {
                loading: true,
                flatmates: []
            }
        }

        case ALL_FLATMATE_SUCCESS: {
            return {
                loading: false,
                flatmates: action.payload.flatmates,
                totalFlatmates: action.payload.totalFlatmates,
                itemsInAPage: action.payload.itemsInAPage
            }
        }

        case ALL_FLATMATE_FAILED:
            return {
                loading: false,
                error: action.payload,
            };

        case CLEAR_ERRORS:
            return {
                ...state,
                error: null,
            };
        default:
            return state;
    }
}