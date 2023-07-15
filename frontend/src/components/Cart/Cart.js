import React from 'react';
import "./Cart.css";
import {Link} from "react-router-dom";
import { useSelector } from 'react-redux';

const Cart = () => {
  const { flatCartItems } = useSelector((state) => state.flatCart);
  const { flatmateCartItems } = useSelector((state) => state.flatmateCart);

  return (
    <div className='cart-container'>
        <div className='cart-flats '>
            <h4>Flats : {flatCartItems.length}</h4>
            <Link to="/cart/flats">Proceed</Link>
        </div>

        <div className='cart-flatmates'>
            <h4>Flatmates : {flatmateCartItems.length}</h4>
            <Link to="/cart/flatmates">Proceed</Link>
        </div>
    </div>
  )
}

export default Cart