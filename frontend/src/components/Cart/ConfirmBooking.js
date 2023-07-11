import React from 'react';
import { Fragment } from 'react';
import "./ConfirmBooking.css";
import { Link } from 'react-router-dom';
import { useSelector,useNavigate } from 'react-redux';

const ConfirmBooking = () => {
    const { user } = useSelector((state) => state.user);
    const { flatCartItems } = useSelector((state) => state.flatCart);

    // const navigate = useNavigate();

    const totalPrice = flatCartItems.reduce(
        (acc, item) => acc + item.price,
        0
    );

    // const proceedToPayment = () => {
    //     const data = {
    //       totalPrice,
    //     };onClick={proceedToPayment
    
    //     sessionStorage.setItem("orderInfo", JSON.stringify(data));
    
    //     navigate("/process/payment");
    //   };

    return (
        <Fragment>
            <div className='confirmBookContainer'>
                <h2 className='confirmHeading'>{user.name}'s Booking</h2>
                <div className='confirmBook'>
                    <div className='confirmBookLeft'>
                        <div className='orderDetails'>
                            {flatCartItems && flatCartItems.map((item) => (
                                <div key={item.flat}>
                                    <img src={item.image}></img>
                                    <span>Location : {item.location}</span>
                                    <span>Rooms : 3</span>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className='confirmBookRight'>
                        <div className='paymentDetails'>
                            <span>Total payable amount : {totalPrice}</span>
                        </div>
                        <div className='paymentBtn'>
                            <Link>Proceed to Payment</Link>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default ConfirmBooking