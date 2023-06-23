import React from 'react';
import "./Home.css";
import { Link } from "react-router-dom";

const Home = () => {
    return (
        <div className='container'>
            <div className='top-half'>
                <h1>Searching for ?</h1>
            </div>
            <div className='bottom-half'>
                <div className='flats'>
                    <Link to="/flats">FLATS</Link>
                </div>
                <div className='flatmates'>
                    <Link to="/flatmates">FLATMATES</Link>
                </div>
            </div>
        </div>
    )
}

export default Home