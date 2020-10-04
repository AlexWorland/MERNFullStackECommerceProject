import {
    PRODUCT_DELETE_FAIL, PRODUCT_DELETE_REQUEST, PRODUCT_DELETE_SUCCESS,
    PRODUCT_DETAILS_FAIL,
    PRODUCT_DETAILS_REQUEST, PRODUCT_DETAILS_SUCCESS,
    PRODUCT_LIST_FAIL,
    PRODUCT_LIST_REQUEST,
    PRODUCT_LIST_SUCCESS, PRODUCT_SAVE_FAIL, PRODUCT_SAVE_REQUEST, PRODUCT_SAVE_SUCCESS
} from "../constants/productConstants";
import Axios from "axios";

// Gets product list from the backend server
const listProducts = () => async (dispatch) => {
    try {
        dispatch({type: PRODUCT_LIST_REQUEST})
        const {data} = await Axios.get("/api/products");
        dispatch({type: PRODUCT_LIST_SUCCESS, payload: data});
    } catch (error) {
        dispatch({type: PRODUCT_LIST_FAIL});
    }
}

const saveProduct = (product) => async (dispatch, getState) => {
    try {
        dispatch({type: PRODUCT_SAVE_REQUEST})
        const {userSignin: {userInfo}} = getState();
        if (!product._id) {
            const {data} = await Axios.post('/api/products', product, {
                headers: {
                    'Authorization': 'Bearer ' + userInfo.token
                }
            });
            dispatch({type: PRODUCT_SAVE_SUCCESS, payload: data});
        } else {
            const {data} = await Axios.put('/api/products/' + product._id, product, {
                headers: {
                    'Authorization': 'Bearer ' + userInfo.token
                }
            });
            dispatch({type: PRODUCT_SAVE_SUCCESS, payload: data});
        }
        console.log("product created successfully.")
    } catch (error) {
        dispatch({type: PRODUCT_SAVE_FAIL, payload: error.message});
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
        const {data} = await Axios.get("/api/products/" + productId);
        console.log("productDetailsReducer action.type = product details success");
        dispatch({type: PRODUCT_DETAILS_SUCCESS, payload: data});
    } catch (error) {
        console.log("productDetailsReducer action.type = product details fail");
        dispatch({type: PRODUCT_DETAILS_FAIL});
    }
}

const deleteProduct = (productId) => async (dispatch, getState) =>
        {
            try {
                const {userSignin: {userInfo}} = getState();
                dispatch({type: PRODUCT_DELETE_REQUEST, payload: productId});
                console.log("productDELETEReducer action.type = product DELETE request");
                const {data} = await Axios.delete("/api/products/" + productId, {headers: {
                        Authorization: 'Bearer ' + userInfo.token
                    }});
                console.log("productDELETEReducer action.type = product DELETE success");
                dispatch({type: PRODUCT_DELETE_SUCCESS, success: true, payload: data});
            } catch (error) {
                console.log("productDELETEReducer action.type = product DELETE fail");
                dispatch({type: PRODUCT_DELETE_FAIL, payload: error.message});
            }
        }



export {listProducts, detailsProduct, saveProduct, deleteProduct}