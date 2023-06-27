import React from 'react';
import "./Home.css";
import { Link } from "react-router-dom";

const Home = () => {
    return (
        <div className="home-container">
            <h1 className="home-title">Searching for ?</h1>
            <div className="home-button-container">
                <Link to="/flats" className="home-button">FLATS</Link>
                <Link to="/flatmates" className="home-button">FLATMATES</Link>
            </div>
        </div>
    )
}

export default Home