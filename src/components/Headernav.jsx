import React from "react";
import MenuMobile from "../components/MenuMobile";
import "../components/Headernav.css";
import Logo from "../images/logo.svg";

const Headernav = () => {
  return (
    <header>
      <nav className="navbar">
        <img src={Logo} alt="logo" />

        <MenuMobile />

        <ul className="nav-menu">
          <li className="nav-item">
            <a href="#">About</a>
          </li>

          <li className="nav-item">
            <a href="#">Carrers</a>
          </li>
          <li className="nav-item">
            <a href="#">Event</a>
          </li>

          <li className="nav-item">
            <a href="#">Product</a>
          </li>

          <li className="nav-item">
            <a href="#">Support</a>
          </li>
        </ul>
      </nav>

      <div className="titlebox">
        <div className="title">
          <h1>
            IMMERSIVE <br /> EXPERIENCES <br /> THAT DELIVER
          </h1>
        </div>
      </div>
    </header>
  );
};

export default Headernav;
