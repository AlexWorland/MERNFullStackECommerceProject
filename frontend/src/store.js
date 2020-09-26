import {createStore, combineReducers, compose, applyMiddleware} from 'redux';
import {productDetailsReducer, productListReducer} from "./reducers/productReducers";
import thunk from 'redux-thunk';

const initialState = {};
// Reducer takes a state and an action and returns a new state based on that action.
const reducer = combineReducers({
    productList: productListReducer,
    productDetails: productDetailsReducer
})

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducer, initialState, composeEnhancer(applyMiddleware(thunk)));

export default store;