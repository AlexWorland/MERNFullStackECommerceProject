import Axios from "axios";
import Cookie from "js-cookie"
import {CART_ADD_ITEM, CART_REMOVE_ITEM, CART_SAVE_PAYMENT, CART_SAVE_SHIPPING} from "../constants/cartConstants";

const  addToCart = (productId, productQty) => async (dispatch, getState) => {
    try {
        const {data} = await Axios.get("/api/products/" + productId)
        dispatch({type: CART_ADD_ITEM, payload: {
                product: data._id,
                name: data.name,
                image: data.image,
                price: data.price,
                countInStock: data.countInStock,
                productQty
            }
        });
        const {cart: {cartItems}} = getState();
        Cookie.set("cartItems", JSON.stringify(cartItems))
    } catch (error) {

    }
}

const removeFromCart = (productId) => (dispatch, getState) => {
    dispatch({type: CART_REMOVE_ITEM, payload: productId});
    const {cart: {cartItems}} = getState;
    Cookie.set("cartItems", JSON.stringify(cartItems))
}

// Client-side. Not async
const saveShipping = (data) => (dispatch) => {
    dispatch({type: CART_SAVE_SHIPPING, payload: data});
}

// Client-side. Not async
const savePayment = (data) => (dispatch) => {
    dispatch({type: CART_SAVE_PAYMENT, payload: data});
}

export {addToCart, removeFromCart, saveShipping, savePayment}