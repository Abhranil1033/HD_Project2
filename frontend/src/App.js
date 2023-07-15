import './App.css';
import React from "react";
import WebFont from "webfontloader";
import {useState } from 'react';
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
import UpdateProfile from "./components/User/UpdateProfile.js";
import UpdatePassword from "./components/User/UpdatePassword.js";
import ForgotPassword from "./components/User/ForgotPassword.js";
import Cart from './components/Cart/Cart.js';
import FlatmateCart from './components/Cart/FlatmateCart.js';
import FlatCart from './components/Cart/FlatCart.js';
import ConfirmBooking from "./components/Cart/ConfirmBooking.js";
import Payment from "./components/Cart/Payment.js";
import axios from "axios";
import Search from "../src/components/Search/Search.js"


function App() {
  // const dispatch = useDispatch();
  const { isAuthenticated, user } = useSelector((state) => state.user);
  const [stripeApiKey, setStripeApiKey] = useState("");

  async function getStripeApiKey() {
    const { data } = await axios.get("/api/v1/stripeapikey");
    setStripeApiKey(data.stripeApiKey);
  }

  React.useEffect(() => {
    WebFont.load({
      google: {
        families: ["Roboto", "Droid Sans", "Chilanka"],
      },
    });
    store.dispatch(loadUser());
    getStripeApiKey();
  }, []);


  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/flats" element={<FlatHome />}></Route>
        <Route path="/flat/:id" element={<FlatDetails />}></Route>
        <Route path="/flats/:keyword" element={<FlatHome />}></Route>
        <Route path="/flatmates" element={<FlatmateHome />}></Route>
        <Route path="/flatmate/:id" element={<FlatmateDetails />}></Route>
        <Route path="/search" element={<Search />}></Route>
        <Route path="/login" element={<LoginSignUp />}></Route>
        {isAuthenticated && <Route path="/account" element={<Profile />}></Route>}
        {isAuthenticated && <Route path="/me/update" element={<UpdateProfile/>}></Route>}
        {isAuthenticated && <Route path="/password/update" element={<UpdatePassword/>}></Route>}
        <Route path="/password/forgot" element={<ForgotPassword />}></Route>
        {isAuthenticated && <Route path="/cart" element={<Cart />}></Route>}
        {isAuthenticated && <Route path="/cart/flatmates" element={<FlatmateCart />}></Route>}
        {isAuthenticated && <Route path="/cart/flats" element={<FlatCart />}></Route>}
        {isAuthenticated && <Route path="/book/confirm" element={<ConfirmBooking />}></Route>}
        {isAuthenticated && <Route path="/payment" element={<Payment />}></Route>}
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
