import {
    PRODUCT_DETAILS_FAIL,
    PRODUCT_DETAILS_REQUEST, PRODUCT_DETAILS_SUCCESS,
    PRODUCT_LIST_FAIL,
    PRODUCT_LIST_REQUEST,
    PRODUCT_LIST_SUCCESS
} from "../constants/productConstants";
import axios from 'axios';

// Gets product list from the backend server
const listProducts = () => async (dispatch) => {
    try {
        dispatch({type: PRODUCT_LIST_REQUEST})
        const {data} = await axios.get("/api/products");
        dispatch({type: PRODUCT_LIST_SUCCESS, payload: data});
    } catch (error) {
        dispatch({type: PRODUCT_LIST_FAIL});
    }
}

// Gets the product details from the backend server
const detailsProduct =
    (productId) =>
    async (dispatch) =>
    {
    try {
        dispatch({type: PRODUCT_DETAILS_REQUEST, payload: productId});
        console.log("productDetailsReducer action.type = product details request");
        const {data} = await axios.get("/api/products/" + productId);
        console.log("productDetailsReducer action.type = product details success");
        dispatch({type: PRODUCT_DETAILS_SUCCESS, payload: data});
    } catch (error) {
        console.log("productDetailsReducer action.type = product details fail");
        dispatch({type: PRODUCT_DETAILS_FAIL});
    }
}

export {listProducts, detailsProduct}