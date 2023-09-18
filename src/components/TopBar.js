import React from "react";
import "../css/topBar.css";
import { Row, Col, Image, Container } from "react-bootstrap";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa6";
import deliveryIcon from "../assets/Layer 156.svg";
const TopBar = () => {
  return (
    <div className="topbar">
      <div style={{ display: "flex", flexDirection: "row" }}>
        <Image id="deliveryImg" src={deliveryIcon} alt="Delivery Icon" />
        <h4>Free Delivery</h4>
        <h4>|</h4>
        <h4>Return Policy </h4>
      </div>
      <div style={{ display: "flex", flexDirection: "row" }}>
        <h4>Login </h4>
        <h4>Follow US</h4>
        <div className="iconsDiv">
          <FaFacebookF id="icons" />
          <FaTwitter id="icons" />
          <FaInstagram id="icons" />
          <FaLinkedinIn id="icons" />
        </div>
      </div>
    </div>
  );
};

export default TopBar;
