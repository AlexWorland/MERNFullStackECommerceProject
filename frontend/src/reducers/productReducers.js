import {
    PRODUCT_DETAILS_FAIL,
    PRODUCT_DETAILS_REQUEST, PRODUCT_DETAILS_SUCCESS,
    PRODUCT_LIST_FAIL,
    PRODUCT_LIST_REQUEST,
    PRODUCT_LIST_SUCCESS
} from "../constants/productConstants";

function productListReducer(state= {products:[]}, action) {
    switch (action.type) {
        case PRODUCT_LIST_REQUEST:
            return {loading: true};
        case PRODUCT_LIST_SUCCESS:
            return {loading:false, products: action.payload}
        case PRODUCT_LIST_FAIL:
            return {loading:false, error: action.payload}
        default:
            return state;
    }
}

function productDetailsReducer(state= {product:{}}, action) {
    switch (action.type) {
        case PRODUCT_DETAILS_REQUEST:
            console.log("productDetailsReducer action.type = product details request");
            return {loading: true};
        case PRODUCT_DETAILS_SUCCESS:
            console.log("productDetailsReducer action.type = product details success");
            return {loading:false, product: action.payload}
        case PRODUCT_DETAILS_FAIL:
            console.log("productDetailsReducer action.type = product details fail");
            return {loading:false, error: action.payload}
        default:
            console.log("productDetailsReducer action.type = default");
            return state;
    }
}

export {productListReducer, productDetailsReducer};