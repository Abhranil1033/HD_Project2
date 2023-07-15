import {
    ALL_FLAT_REQUEST, ALL_FLAT_SUCCESS, ALL_FLAT_FAILED,FLAT_DETAILS_REQUEST,FLAT_DETAILS_SUCCESS,FLAT_DETAILS_FAILED,CLEAR_ERRORS
} from "../constants/flatConstants";

export const flatReducer = (state = { flats: [] }, action) => {
    switch (action.type) {
        case ALL_FLAT_REQUEST: {
            return {
                loading: true,
                flats: [],
            }
        }

        case ALL_FLAT_SUCCESS: {
            return {
                loading: false,
                flats: action.payload.flats,
                totalFlats: action.payload.totalFlats,
                itemsInAPage: action.payload.itemsInAPage
            }
        }

        case ALL_FLAT_FAILED:
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


export const flatDetailsReducer = (state = { flat : {} }, action) => {
    switch (action.type) {
      case FLAT_DETAILS_REQUEST:
        return {
          loading: true,
          ...state
        };
      case FLAT_DETAILS_SUCCESS:
        return {
          loading: false,
          flat : action.payload,
        };
  
      case FLAT_DETAILS_FAILED:
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