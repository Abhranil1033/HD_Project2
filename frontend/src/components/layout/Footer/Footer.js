import React from 'react';
import "./Footer.css"
import playStore from "../../../images/playstore.png";
import HD from "../../../images/HD.png";

const Footer = () => {
  return (
    <footer id="footer">
    <div className="leftFooter">
        <h4>DOWNLOAD OUR APP</h4>
        <img src={playStore} alt="playstore"></img>
    </div>

    <div className="midFooter">
        <h1>FLATHUNT</h1>

        <p>Copyright 2023 &copy;</p>
    </div>

    <div className="rightFooter">
        <h4>FOLLOW US</h4>
        <a href="https://twitter.com/AbhranilDey7">Instagram</a>
        <a href="https://twitter.com/AbhranilDey7">Twitter</a>
        <a href="https://twitter.com/AbhranilDey7">Facebook</a>
    </div>
</footer>
  )
}

export default Footer