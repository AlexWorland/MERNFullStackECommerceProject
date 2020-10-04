import {
    PRODUCT_DELETE_FAIL, PRODUCT_DELETE_REQUEST, PRODUCT_DELETE_SUCCESS,
    PRODUCT_DETAILS_FAIL,
    PRODUCT_DETAILS_REQUEST, PRODUCT_DETAILS_SUCCESS,
    PRODUCT_LIST_FAIL,
    PRODUCT_LIST_REQUEST,
    PRODUCT_LIST_SUCCESS, PRODUCT_SAVE_FAIL, PRODUCT_SAVE_REQUEST, PRODUCT_SAVE_SUCCESS
} from "../constants/productConstants";

function productListReducer(state= {products:[]}, action) {
    switch (action.type) {
        case PRODUCT_LIST_REQUEST:
            return {loading: true, products: []};
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

function productSAVEReducer(state= {product:{}}, action) {
    switch (action.type) {
        case PRODUCT_SAVE_REQUEST:
            console.log("productSAVEReducer action.type = product SAVE request");
            return {loading: true};
        case PRODUCT_SAVE_SUCCESS:
            console.log("productSAVEReducer action.type = product SAVE success");
            return {loading:false, success:true, product: action.payload}
        case PRODUCT_SAVE_FAIL:
            console.log("productSAVEReducer action.type = product SAVE fail");
            return {loading:false, error: action.payload}
        default:
            console.log("productSAVEReducer action.type = default");
            return state;
    }
}

function productDELETEReducer(state= {product:{}}, action) {
    switch (action.type) {
        case PRODUCT_DELETE_REQUEST:
            console.log("productDELETEReducer action.type = product DELETE request");
            return {loading: true};
        case PRODUCT_DELETE_SUCCESS:
            console.log("productDELETEReducer action.type = product DELETE success");
            return {loading:false, success:true, product: action.payload}
        case PRODUCT_DELETE_FAIL:
            console.log("productDELETEReducer action.type = product DELETE fail");
            return {loading:false, error: action.payload}
        default:
            console.log("productDELETEReducer action.type = default");
            return state;
    }
}

export {productListReducer, productDetailsReducer, productSAVEReducer, productDELETEReducer};