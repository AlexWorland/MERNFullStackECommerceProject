import React, {useEffect, useState} from 'react';
// import data from "../data"; No longer necessary. Fetching data from backend.
import {Link} from 'react-router-dom';
import axios from 'axios';

function HomeScreen (props) {

    // Backend integration. Fetches data from backend.
    const [products, setProducts] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            const {data} = await axios.get("/api/products");
            setProducts(data);
        }
        fetchData()
        return () => {
            //
        };
    }, [])

    // DEBUG
    console.log("This is the homescreen.js")

    return (<ul className="products">
        {
            // For each product in products, display.
            products.map(product =>
                // use a key to make each li element unique.
                <li key={product._id}>
                    <div className="product">
                        <Link to={'/product/' + product._id}>
                            <img className="product-image" src="/images/d1.jpg" alt="product"/>
                        </Link>
                        <div className="product-name">
                            <Link to={'/product/' + product._id}>{product.name}</Link>
                        </div>
                        <div className="product-brand">
                            {product.brand}
                        </div>
                        <div className="product-price">
                            ${product.price}
                        </div>
                        <div className="product-rating">
                            {product.rating} Stars ({product.numReviews} Reviews)</div>
                    </div>
                </li>)
        }
    </ul>)
}

export default HomeScreen;