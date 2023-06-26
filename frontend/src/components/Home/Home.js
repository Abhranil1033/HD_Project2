import React from 'react';
import "./Home.css";
import { Link } from "react-router-dom";

const Home = () => {
    return (
        <div className='container'>
            <div className='top-half my-5'>
                <h1 className='top'>Searching for ?</h1>
            </div>
            <div className='bottom-half'>
                <div className='flats'>
                    <Link className='flatsbutton'to="/flats">FLATS</Link>
                </div>
                <div className='flatmates'>
                    <Link className='flatmatesbutton'to="/flatmates">FLATMATES</Link>
                </div>
            </div>
        </div>
    )
}

export default Home