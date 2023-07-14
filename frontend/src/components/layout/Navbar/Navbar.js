import React from 'react';
import {Link} from 'react-router-dom';
import "./Navbar.css";
import { useSelector } from 'react-redux';
import UserOptions from "../../User/UserOptions.js"

const Navbar = () => {
    const { isAuthenticated, user } = useSelector((state) => state.user);
  return (
    <div >
         <nav className="navbar navbar-expand-lg bg-body-tertiary fixed-top" >
            {/* <div className="container" > */}
                <Link className="navbar-brand" to="/">FlatHunt</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon" style={{ marginRight: '10 px' }}></span>
                </button>
                {/* menu start */}
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item">
                            <Link className="nav-link" to="#">Search Flats</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="#">Search FlatMates</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="#">List Property</Link>
                        </li>
                        <div>
                            {!isAuthenticated && <Link to="/login" className="btn btn-secondary mx-5">Sign Up</Link>}
                            {isAuthenticated && <UserOptions user={user} />}
                        </div>
                        <div className="form-check form-switch ms-5">

                        </div>
                    </ul>
                </div>
                {/* menu end */}
            {/* </div> */}
        </nav>
    </div>
  )
}

export default Navbar