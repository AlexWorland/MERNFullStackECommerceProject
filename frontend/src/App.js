import React from 'react';
import './App.css';
// import data from './data.js'; // Data is now handled by the backend.
import {BrowserRouter, Route, Link} from 'react-router-dom';
import HomeScreen from './screens/HomeScreen';
import ProductScreen from './screens/ProductScreen';
import CartScreen from "./screens/CartScreen";
import SigninScreen from "./screens/SigninScreen";
import {useSelector} from "react-redux";
import RegisterScreen from "./screens/RegisterScreen";
import ProductsScreen from "./screens/productsScreen";

function App() {

  const openMenu = () => {
    document.querySelector(".sidebar").classList.add("open");
  }

  const closeMenu = () => {
    document.querySelector(".sidebar").classList.remove("open");
  }

  const userSignin = useSelector(state=>state.userSignin)
  const {userInfo} = userSignin;

  return (
      <BrowserRouter>
        <div className="grid-container">
          <header className="header">
            <div className="brand">
              <button onClick={openMenu}>
                &#9776;
              </button>
              <Link to="/">full stack store</Link>
            </div>
            <div className="header-links">
              {/*<a href="cart.html">Shopping Cart</a>*/}
              <Link to="/cart">Shopping Cart</Link>
              {
                userInfo ?
                    <Link to="/profile">{userInfo.name}</Link>
                    :
                    <Link to="/signin">Sign In</Link>
              }
              {/*<a href="signin.html">Sign In</a>*/}
            </div>
          </header>

          <aside className="sidebar">
            <h3>Shopping Categories</h3>
            <button className="sidebar-close-button" onClick={closeMenu}>x</button>
            <ul>
              <li>
                <a href="index.html">Pants</a>
              </li>
              <li>
                <a href="index.html">Shirts</a>
              </li>
            </ul>
          </aside>

          <main className="main">
            <div className="content">
              <Route path="/products" component={ProductsScreen}/>
              <Route path="/signin" component={SigninScreen}/>
              <Route path="/register" component={RegisterScreen}/>
              <Route path="/product/:id" component={ProductScreen}/>
              {/* ? means product id is optional*/}
              <Route path="/cart/:id?" component={CartScreen}/>
              <Route path="/" exact={true} component={HomeScreen}/>

            </div>
          </main>
          <footer className="footer">
            All Rights Reserved
          </footer>
        </div>
      </BrowserRouter>
  );
}

export default App;
