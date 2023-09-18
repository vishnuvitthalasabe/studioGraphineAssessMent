import React from "react";
import Shopkart from "./Shopkart";
const NavbarMenu =(props)=>{
    return(
        <div className="NavabarMenuDiv">
            <Shopkart flag={props.flag} handleMenu={props.handleMenu} />
            <h3 style={{color:'white'}} id='NavBarMenuOptions'>HOME</h3>
            <h3 style={{color:'white'}} id='NavBarMenuOptions'>ABOUT</h3>
            <h3 style={{color:'white'}} id='NavBarMenuOptions'>OUR PRODUCTS</h3>
            <h3 style={{color:'white'}} id='NavBarMenuOptions'>CONTACT US</h3>
        </div>
    )
}

export default NavbarMenu;