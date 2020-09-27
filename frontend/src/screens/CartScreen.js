import React, {useEffect} from 'react';
import {addToCart, removeFromCart} from "../actions/cartActions";
import {useDispatch, useSelector} from "react-redux";
import {Link} from "react-router-dom";

function CartScreen(props) {

    const cart = useSelector(state => state.cart);
    const {cartItems} = cart;

    const productId = props.match.params.id;
    const productQty = props.location.search? Number(props.location.search.split("=")[1]) : 1;
    const dispatch = useDispatch();

    const removeFromCartHandler = (productId) => {
        dispatch(removeFromCart(productId));
    }
    const checkoutHandler = () => {
        props.history.push("/signin?redirect=shipping")
    }

    useEffect( () => {
        if(productId) {
            dispatch(addToCart(productId, productQty));
        }
    }, [])

    return (
        <div className="cart">
            <div className="cart-list">
                <ul className="cart-list-container">
                    <li>
                        <h3>Shopping Cart</h3>
                        <div>
                            Price
                        </div>
                    </li>
                    {
                        cartItems.length === 0 ?
                            <div>Cart is Empty</div>
                            :
                            // For every item in the cart...
                            cartItems.map(item =>
                                <li>
                                    <div className="cart-image">
                                        <img src={item.image} alt="product"/>
                                    </div>
                                    <div className="cart-name">
                                        <div>
                                            <Link to={"/product/" + item.product}>
                                                {item.name}
                                            </Link>
                                        </div>
                                        <div>
                                            Qty:
                                            <select value={item.productQty} onChange={(e) => dispatch(addToCart(item.product, e.target.value))}>
                                                {[...Array(item.countInStock).keys()].map( x =>
                                                    <option key={x + 1} value={x + 1}>{x + 1}</option>
                                                )}
                                            </select>
                                            <button type="button" onClick={() => removeFromCartHandler(item.product)} className="button">
                                                Delete
                                            </button>
                                        </div>
                                    </div>
                                    <div className="cart-price">
                                        $ {item.price}
                                    </div>
                                </li>
                            )
                    }
                </ul>
            </div>
            <div className="cart-action">
                <h3>Subtotal ({cartItems.reduce((a, c) => a + c.productQty, 0)} items)
                :
                $ {cartItems.reduce((a, c) => a + c.price * c.productQty, 0)}
                </h3>
                <button onClick={checkoutHandler} className="button primary full-width" disabled={cartItems.length === 0}>
                    Proceed To Checkout
                </button>
            </div>
        </div>
    )
}

export default CartScreen;