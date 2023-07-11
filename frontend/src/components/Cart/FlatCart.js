import React, { Fragment } from 'react';
import "./FlatCart.css";
import FlatCartItemCard from "./FlatCartItemCard.js";
import { useSelector, useDispatch } from "react-redux";
import { removeFlatsFromCart } from '../../actions/cartActions';
import RemoveShoppingCartIcon from '@mui/icons-material/RemoveShoppingCart';
import {Link , useNavigate } from "react-router-dom";
import { Typography } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

const FlatCart = () => {
  const dispatch = useDispatch();
  const { flatCartItems } = useSelector((state) => state.flatCart);
  const navigate = useNavigate();

  const deleteCartItems = (id) => {
    dispatch(removeFlatsFromCart(id));
  }

  const checkOutHandler = () => {
    navigate("/login?redirect=/book/confirm")
  }


  return (
    <Fragment>
      {flatCartItems.length === 0 ? 
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

            {flatCartItems &&
              flatCartItems.map((item) => (
                <div className="cartContainer" key={item.flat}>
                  <FlatCartItemCard item={item} />
                  <DeleteIcon className='delete-icon' onClick={() => deleteCartItems(item.flat)} />
                  <p className="cartSubtotal">{`₹${item.price}`}</p>
                </div>
              ))}

            <div className="catrGrossTotal">
              <div>

              </div>
              <div className="cartGrossTotalBox">
                <p>Gross Total</p>
                <p>{`₹${flatCartItems.reduce(
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

export default FlatCart