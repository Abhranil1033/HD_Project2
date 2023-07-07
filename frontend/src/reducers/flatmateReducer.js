import {
    ALL_FLATMATE_REQUEST, ALL_FLATMATE_SUCCESS, ALL_FLATMATE_FAILED,FLATMATE_DETAILS_REQUEST,FLATMATE_DETAILS_SUCCESS,FLATMATE_DETAILS_FAILED, CLEAR_ERRORS
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
};


export const flatmateDetailsReducer = (state = { flatmate : {} }, action) => {
    switch (action.type) {
      case FLATMATE_DETAILS_REQUEST:
        return {
          loading: true,
          ...state
        };
      case FLATMATE_DETAILS_SUCCESS:
        return {
          loading: false,
          flatmate : action.payload,
        };
  
      case FLATMATE_DETAILS_FAILED:
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
  };