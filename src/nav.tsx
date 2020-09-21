import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import CartItem from "./features/cart/CartItem";
import { ProductList } from './features/product/ProductList';
import logo from './images/sos.png'

export default function Nav() {
  return (
    <Router>
      <div>
          <div className='nav'>
            <nav>
            <Link to="/"><img src={logo} alt='shopping basket with redux tool kit' /></Link>

            <ul>
                <li>
                <Link to="/">Home</Link>
                </li>
                <li>
                <Link to="/cart">Cart</Link>
                </li>
            </ul>
            </nav>
            <h2>Ecommerce App with ReduxToolkit
                </h2>
        </div>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
        <Route exact path="/"> 
          <ProductList />
          {/* <Footer /> */}
        </Route>
          <Route exact path="/cart">
            <CartItem />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}