import React from 'react';
import "./Home.css";
import { Link } from "react-router-dom";

const Home = () => {
    return (
        <div className='home-container'>
            <div className='home-top-half my-5'>
                <h1 className='home-top'>Searching for ?</h1>
            </div>
            <div className='home-bottom-half'>
                <div className='home-flats'>
                    <Link className='home-flatsbutton'to="/flats">FLATS</Link>
                </div>
                <div className='home-flatmates'>
                    <Link className='home-flatmatesbutton'to="/flatmates">FLATMATES</Link>
                </div>
            </div>
        </div>
    )
}

export default Home