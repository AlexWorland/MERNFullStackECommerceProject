import React, {useEffect} from 'react';
import {addToCart, removeFromCart} from "../actions/cartActions";
import {useDispatch, useSelector} from "react-redux";
import {Link} from "react-router-dom";
import CheckoutSteps from "../components/CheckoutSteps";
import {createOrder, detailsOrder} from "../actions/orderActions";

function OrderScreen(props) {

    const dispatch = useDispatch();

    const orderDetails = useSelector(state => state.orderDetails);
    const {loading, order, error} = orderDetails;
    const payHandler = () => {};

    useEffect(() => {
        dispatch(detailsOrder(props.match.params.id));
        return () => {
            //
        };
    }, [])

    return loading? <div>Loading...</div>:error? <div>{error}</div> :
        <div>
            <div className="placeOrder">
                <div className="placeOrder-info">
                    <div>
                        <h3>Shipping</h3>
                        <div>
                            {order.shipping.address},
                            {order.shipping.city},
                            {order.shipping.postalCode},
                            {order.shipping.country}
                        </div>
                        <div>
                            {order.isDelivered? "Delivered at " + order.deliveredAt : "Not Delivered."}
                        </div>
                    </div>
                    <div>
                        <h3>Payment</h3>
                        <div>
                            Payment Method: {order.payment.paymentMethod}
                        </div>
                        <div>
                            {order.isPaid? "Paid at " + order.paidAt : "Not Paid"}
                        </div>
                    </div>
                    <div>
                        <ul className="order-list-container">
                            <li>
                                <h3>Shopping order</h3>
                                <div>
                                    Price
                                </div>
                            </li>
                            {
                                order.orderItems.length === 0 ? <div>order is Empty</div> :
                                    // For every item in the order...
                                    order.orderItems.map(item =>
                                        <li>
                                            <div className="order-image">
                                                <img src={item.image} alt="product"/>
                                            </div>
                                            <div className="order-name">
                                                <div>
                                                    <Link to={"/product/" + item.product}>
                                                        {item.name}
                                                    </Link>
                                                </div>
                                                <div>
                                                    Qty: {item.productQty}
                                                </div>
                                            </div>
                                            <div className="order-price">
                                                $ {item.price}
                                            </div>
                                        </li>
                                    )
                            }
                        </ul>
                    </div>
                </div>
                <div className="placeOrder-action">
                    <ul>
                        <li>
                            <button className="button primary full-width" onClick={payHandler}>Pay Now</button>
                        </li>
                        <li>
                            <h3>Order Summary</h3>
                        </li>
                        <li>
                            <div>Items</div>
                            <div>${order.itemsPrice}</div>
                        </li>
                        <li>
                            <div>Shipping</div>
                            <div>${order.shippingPrice}</div>
                        </li>
                        <li>
                            <div>Tax</div>
                            <div>${order.taxPrice}</div>
                        </li>
                        <li>
                            <div>Order Total</div>
                            <div>${order.totalPrice}</div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
}

export default OrderScreen;