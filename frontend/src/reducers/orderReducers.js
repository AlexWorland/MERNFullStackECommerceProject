import {
    ORDER_CREATE_FAIL,
    ORDER_CREATE_REQUEST,
    ORDER_CREATE_SUCCESS, ORDER_DETAILS_FAIL,
    ORDER_DETAILS_REQUEST, ORDER_DETAILS_SUCCESS
} from "../constants/orderConstants";

function orderCreateReducer(state = {}, action){
    switch (action.type) {
        case ORDER_CREATE_REQUEST:
            console.log("orderCreateReducer action.type = order create request");
            return {loading: true};
        case ORDER_CREATE_SUCCESS:
            console.log("orderCreateReducer action.type = order create success");
            return {loading:false, order: action.payload, success: true}
        case ORDER_CREATE_FAIL:
            console.log("orderCreateReducer action.type = order create fail");
            return {loading:false, error: action.payload}
        default:
            console.log("orderCreateReducer action.type = default");
            return state;
    }
}

function orderDetailsReducer(state = {
    order: {
        orderItems:[],
        shipping:{},
        payment:{}
    }
}, action){
    switch (action.type) {
        case ORDER_DETAILS_REQUEST:
            console.log("orderDETAILSReducer action.type = order DETAILS request");
            return {loading: true};
        case ORDER_DETAILS_SUCCESS:
            console.log("orderDETAILSReducer action.type = order DETAILS success");
            return {loading:false, order: action.payload}
        case ORDER_DETAILS_FAIL:
            console.log("orderDETAILSReducer action.type = order DETAILS fail");
            return {loading:false, error: action.payload}
        default:
            console.log("orderDETAILSReducer action.type = default");
            return state;
    }
}

export {orderCreateReducer, orderDetailsReducer}