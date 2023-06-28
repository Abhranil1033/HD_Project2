import React, { useEffect } from 'react';
import "./FlatHome.css"
import { useState } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { getFlats } from '../../actions/flatActions';
import { Link } from 'react-router-dom';

const FlatHome = () => {

  const dispatch = useDispatch();
  const {loading,error,flats,totalFlats} = useSelector((state) => state.flats)

  useEffect(() => {
    dispatch(getFlats());
  },[dispatch]);

  return (
    <div className='flatPage'>
      <section className='flatSection'>
        <div className="flat-container">
          <div className="cards">
            { flats && 
              flats.map((flat, i) => (
                <div key={i} className="card">
                  <h3>{flat.city}</h3>
                  <img src={flat.images[0].url} alt="flat" />
                  <Link className="flat-button" to={flat._id}>View</Link>
                </div>
              ))
            }
          </div>
        </div>
      </section>
    </div>
  )
}

export default FlatHome;