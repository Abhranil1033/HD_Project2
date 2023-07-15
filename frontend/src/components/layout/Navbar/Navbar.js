import React from 'react';
import { Link } from 'react-router-dom';
import "./Navbar.css";
import { useSelector } from 'react-redux';
import UserOptions from "../../User/UserOptions.js";
import Loader from "../Loader/Loader.js"

const Navbar = () => {
    const { loading, isAuthenticated, user } = useSelector((state) => state.user);
    return (
        <div className="navbar" style={{ color: "white" }}>
            {loading ? <Loader /> : (
                <nav className="navbar navbar-expand-lg bg-body-dark fixed-top">
                    <Link className="navbar-brand" to="/">FlatHunt</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon" style={{ marginRight: '10 px' }}></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto">
                            <li className="nav-item">
                                <Link className="nav-link" to="/">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/search">Search Flats</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="#">Search FlatMates</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="#">List Property</Link>
                            </li>
                        </ul>
                        
                        <div className="d-flex align-items-center"> {/* Ensures buttons are aligned properly */}
                            {!isAuthenticated && <Link to="/login" className="btn btn-secondary mx-2">Sign Up</Link>}
                            {isAuthenticated && <UserOptions user={user} />}
                        </div>
                    </div>
                </nav>
            )}
        </div>
    )
}

export default Navbar;
