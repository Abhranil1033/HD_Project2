import './App.css';
import React from "react";
import WebFont from "webfontloader";
// import { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/layout/Navbar/Navbar.js"
import Home from "./components/Home/Home.js";
import Footer from "./components/layout/Footer/Footer.js"
import FlatHome from "./components/Home/FlatHome.js";
import FlatmateHome from "./components/Home/FlatmateHome.js";
import LoginSignUp from "./components/User/LoginSignUp.js"
import FlatDetails from "./components/Flats/FlatDetails.js";
import FlatmateDetails from "./components/Flatmates/FlatmateDetails.js";
import Profile from "./components/User/Profile.js";
import store from "./store";
import { loadUser } from "./actions/userActions";
import { useDispatch,useSelector } from "react-redux";
import UpdateProfile from "./components/User/UpdateProfile.js"

function App() {
  const dispatch = useDispatch();
  const { isAuthenticated, user } = useSelector((state) => state.user);


  React.useEffect(() => {
    WebFont.load({
      google: {
        families: ["Roboto", "Droid Sans", "Chilanka"],
      },
    });
    dispatch(loadUser());
  }, []);

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/flats" element={<FlatHome />}></Route>
        <Route path="/flats/:id" element={<FlatDetails />}></Route>
        <Route path="/flatmates" element={<FlatmateHome />}></Route>
        <Route path="/flatmates/:id" element={<FlatmateDetails />}></Route>
        <Route path="/login" element={<LoginSignUp />}></Route>
        {isAuthenticated && <Route path="/account" element={<Profile />}></Route>}
        {isAuthenticated && <Route path="/me/update" element={<UpdateProfile/>}></Route>}

      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
