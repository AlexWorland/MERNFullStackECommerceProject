import React, {useEffect, useState} from 'react';
// import data from '../data';
import {Link} from 'react-router-dom'
// import {useDispatch, useSelector} from "react-redux";
import {detailsProduct} from "../actions/productActions";
import {useDispatch, useSelector} from "react-redux";

function ProductScreen(props) {
    console.log(props.match.params.id);

    // DEBUG
    console.log("This is the ProductScreen.js");
    // const product = data.products.find(x => x._id === props.match.params.id)
    // const dispatch = useDispatch;

    // Controls sending quantity selector to cart. 1 qty is the default
    const [qty, setQty] = useState(1);
    const productDetails = useSelector(state => state.productDetails);
    // From product details, get product, loading, and error states
    const {product, loading, error} = productDetails;
    const dispatch = useDispatch();

    useEffect(() => {
        // Wanna check this with the tutorial.
        const prodId = props.match.params.id;
        dispatch(detailsProduct(prodId));
        return () => {
            //
        };
    }, []);

    // Links user to the cart page with the user input qty at the end of the link
    const handleAddToCart = () => {
        props.history.push("/cart/" + props.match.params.id + "?qty=" + qty);
    }


    // DEBUG
    if (loading) {
        const str = "foo"
    }

    if (error) {
        const str = "foo"
    }

    if (product) {
        const str = "foo"
    }

    return <div>
        <div className="back-to-result">
            <Link to='/'>Back to result</Link>
        </div>
        {/*If loading show loading, if error show error, if neither render details page*/}
        {loading ? <div>Loading...</div> :
            error ? <div>{error}</div> : (
                <div className="details">
                    <div className="details-image">
                        <img src={product.image} alt="product"/>
                    </div>
                    <div className="details-info">
                        <ul>
                            <li>
                                <h4>{product.name}</h4>
                            </li>
                            <li>
                                {product.rating} Stars ({product.numReviews} Reviews)
                            </li>
                            <li>
                                Price: <b>${product.price}</b>
                            </li>
                            <li>
                                Description:
                                <div>
                                    {product.description}
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div className="details-action">
                        <ul>
                            <li>
                                Price: {product.price}
                            </li>
                            <li>
                                Status: {product.countInStock > 0 ? "In Stock." : "Out of Stock."}
                            </li>
                            <li>
                                {/*sends the selected value to setQty*/}
                                Qty: <select value={qty} onChange={(e) => {
                                    setQty(e.target.value)
                                }}>
                                {[...Array(product.countInStock).keys()].map(x =>
                                    <option value={x + 1}>{x + 1}</option>
                                )}
                            </select>
                            </li>
                            <li>
                                {product.countInStock > 0
                                &&
                                <button className="button primary" onClick={handleAddToCart}>Add To Cart</button>
                                }
                            </li>
                        </ul>
                    </div>
                </div>
            )
        }
    </div>
}

export default ProductScreen;