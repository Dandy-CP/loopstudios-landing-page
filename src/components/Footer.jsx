import React from "react";
import "../components/Footer.css";
import LogoIcon from "../images/logo.svg";

function importAll(r) {
  let images = {};
  r.keys().map((item, index) => {
    images[item.replace("./", "")] = r(item);
  });
  return images;
}

const imagesIcon = importAll(
  require.context("../images/", false, /\.(png|jpe?g|svg)$/)
);

const Footer = () => {
  return (
    <div className="containerfooter">
      <div className="listfooter">
        <img src={LogoIcon} alt="logo" className="logofooter" />

        <ul className="menu">
          <li className="item">
            <a href="#">About</a>
          </li>

          <li className="item">
            <a href="#">Carrers</a>
          </li>
          <li className="item">
            <a href="#">Event</a>
          </li>

          <li className="item">
            <a href="#">Product</a>
          </li>

          <li className="item">
            <a href="#">Support</a>
          </li>
        </ul>
      </div>

      <div className="sosmedtrademrk">
        <div className="sosmedicon">
          <img src={imagesIcon["icon-facebook.svg"]} alt="logo-fb" />
          <img src={imagesIcon["icon-twitter.svg"]} alt="logo-twt" />
          <img src={imagesIcon["icon-pinterest.svg"]} alt="logo-ptr" />
          <img src={imagesIcon["icon-instagram.svg"]} alt="logo-ig" />
        </div>
        <p> &copy; 2021 Loopstudio. All rights reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
