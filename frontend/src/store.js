import { configureStore } from '@reduxjs/toolkit'
import { applyMiddleware } from "redux"
import thunk from "redux-thunk"
import { composeWithDevTools } from "redux-devtools-extension"
import { flatReducer } from './reducers/flatReducer';
import { flatmateReducer } from './reducers/flatmateReducer';
// import { productsDetailsReducer, productsReducer } from "./reducers/productReducers"
// import { forgotPasswordReducer, profileReducer, userReducer } from "./reducers/userReducers"
// import { cartReducer } from "./reducers/cartReducer"

let initialState = {};

const middleware = [thunk];

const store = configureStore({
    reducer: {
        flats : flatReducer,
        flatmates : flatmateReducer
    }
}, initialState, composeWithDevTools(applyMiddleware(...middleware)));

export default store;