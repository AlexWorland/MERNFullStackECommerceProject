import {createStore, combineReducers, compose, applyMiddleware} from 'redux';
import {productDetailsReducer, productListReducer} from "./reducers/productReducers";
import thunk from 'redux-thunk';
import {cartReducer} from "./reducers/cartReducers";
import {userSigninReducer, userRegisterReducer} from "./reducers/userReducers"
import Cookie from "js-cookie"

const cartItems = Cookie.getJSON("cartItems") || [];
const userInfo = Cookie.getJSON('userInfo') || null;

const initialState = {cart: {cartItems}, userSignin: {userInfo}};
// Reducer takes a state and an action and returns a new state based on that action.
const reducer = combineReducers({
    productList: productListReducer,
    productDetails: productDetailsReducer,
    cart: cartReducer,
    userSignin: userSigninReducer,
    userRegister: userRegisterReducer
})

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducer, initialState, composeEnhancer(applyMiddleware(thunk)));

export default store;