import React, { useEffect } from 'react';
import "./FlatmateHome.css"
import { useState } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { getFlatmates } from '../../actions/flatmateActions';
import { Link } from 'react-router-dom';

const FlatmateHome = () => {

  const dispatch = useDispatch();
  const {loading,error,flatmates,totalFlatmates} = useSelector((state) => state.flatmates)

  useEffect(() => {
    dispatch(getFlatmates());
  },[dispatch]);

  return (
    <div className='flatmatePage'>
      <section>
        <div className="flatmate-container">
          <div className="cards">
            {
              flatmates.map((flatmate, i) => (
                <div key={i} className="card">
                  <img src={flatmate.images} alt="images" />
                  <h3>{flatmate.name}</h3>
                  <div className="special">
                    <h6>{flatmate.proffession} | </h6>
                    <h6>Gender | </h6>
                    <h6> 22</h6>
                    {/* <h6>{cards.gender}</h6>|
                    <h6>{cards.age}</h6> */}
                  </div>
                  <Link to={flatmate._id} className="flatmate-button">Find out more</Link>
                </div>
              ))
            }
          </div>
        </div>
      </section>
    </div>
  )
}

export default FlatmateHome