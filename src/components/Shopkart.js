import React from "react";
import '../css/shopKart.css'
import menuLogo from '../assets/hamburger menu.svg'
import {AiFillCloseSquare} from "react-icons/ai"
const Shopkart = (props) => {
  return (
    <div className="shopkart">
      <div style={{ display: "flex" }}>
        <h1  id='shopKartTitle'>Shopkart</h1>
      </div>
      <div className='wishlistBag' >
        <h4 id='wbtext'>WISHLIST (0)</h4>
        <h4 id='wbtext'>BAG (0)</h4>
      </div>
      <div className="navMenu">
        {!props.flag?<AiFillCloseSquare style={{fontSize:'20px',color:'white',paddingRight:'20px'}} onClick={props.handleMenu}/>:<img src={menuLogo} alt="menu" onClick={props.handleMenu}/>}
      </div>
    </div>
  );
};

export default Shopkart;
