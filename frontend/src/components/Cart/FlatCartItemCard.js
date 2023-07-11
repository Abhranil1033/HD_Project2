import React from 'react';
import "./CartItemCard.css";
import {Link} from "react-router-dom";


const CartItemCard = ({item}) => {
  return (
    <div className="CartItemCard">
        <img src={item.image} alt="image"></img>
        <div className='item-options'>
            <Link to={`/flats/${item.flat}`}>{item.location}</Link>
            <span>{`Price : ₹${item.price}`}</span>     
        </div>
    </div>
  )
}

export default CartItemCard 