import React, { Fragment } from 'react';
import "./FlatmateCart.css";
import FlatCartItemCard from "./FlatCartItemCard.js";
import { useSelector, useDispatch } from "react-redux";
import { removeFlatmatesFromCart } from '../../actions/cartActions';
import RemoveShoppingCartIcon from '@mui/icons-material/RemoveShoppingCart';
import {Link , useNavigate } from "react-router-dom";
import { Typography } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

const FlatmateCart = () => {
  const dispatch = useDispatch();
  const { flatmateCartItems } = useSelector((state) => state.flatmateCart);
  const navigate = useNavigate();

  const deleteCartItems = (id) => {
    dispatch(removeFlatmatesFromCart(id));
  }

  const checkOutHandler = () => {
    navigate("/login?redirect=/shipping")
  }


  return (
    <Fragment>
      {flatmateCartItems.length === 0 ? 
      (
        <div className="emptyCart">
          <RemoveShoppingCartIcon />

          <Typography>No products in cart</Typography>
          <Link to="/">Go to home</Link>
        </div>
      ) :
        <Fragment>
          <div className="cartPage">
            <div className="cartHeader">
              <p>Product</p>
              {/* <p>Quantity</p> */}
              <p>Remove</p>
              <p>Subtotal</p>
            </div>

            {flatmateCartItems &&
              flatmateCartItems.map((item) => (
                <div className="cartContainer" key={item.flatmate}>
                  <FlatCartItemCard item={item} />
                  <DeleteIcon className='delete-icon' onClick={() => deleteCartItems(item.flatmate)} />
                  {/* <p className="cartSubtotal">{`₹${item.price}`}</p> */}
                </div>
              ))}

            <div className="cartGrossTotal">
              <div>

              </div>
              <div className="cartGrossTotalBox">
                <p>Gross Total</p>
                <p>{`₹${flatmateCartItems.reduce(
                  (acc,item) => acc + item.price,
                  0
                )}`}</p>
              </div>
              <div>

              </div>
              <div className="checkOutBtn">
                <button onClick={checkOutHandler}>Check Out</button>
              </div>
            </div>
          </div>
        </Fragment>}
    </Fragment>
  )
}

export default FlatmateCart