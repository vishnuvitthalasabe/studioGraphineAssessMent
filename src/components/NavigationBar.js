import React from "react";
import "../css/navigationBar.css";
const NavigationBar = () => {
  return (
    <div className="navbar">
      <h4 id="title">HOME</h4>
      <h4 id="title">ABOUT</h4>
      <select id="title1">
        <option id='options' value="1">OUR PRODUCTS</option>
        <option id='options' value="2">PRODUCT 1</option>
        <option id='options' value="2">PRODUCT 2</option>
        <option id='options' value="2">PRODUCT 3</option>
        <option id='options' value="2">PRODUCT 4</option>
        
      </select>
      <h4 id="title">CONTACT US</h4>
    </div>
  );
};

export default NavigationBar;
