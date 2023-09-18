import React from "react";
import "../css/home.css";
import Shopkart from "./Shopkart";
import NavigationBar from "./NavigationBar";
import { Button, Image } from "react-bootstrap";
const Home = (props) => {
  const freshlook = () => {
    
    return (
      <div className="subContainer1">
        <h1 id="fresh">Fresh</h1>
        <h1 id="fl2022">2022</h1>
        <h1 id="look">LOOK</h1>
        <hr id="line" />
        <Image
            id="lensStar"
            src={require("../assets/Star 4.png")}
            alt="star"
          />
        <Button id="seeMoreButton">
          See more <Image src={require("../assets/Vector.png")} />
        </Button>
      </div>
    );
  };
  const imageContainer = () => {
    return (
      <div className="subContainer2">
        <div >
        <Image
            id="jessica"
            src={require("../assets/jessica-radanavong-IchPBHFD0pw-unsplash.png")}
            alt="jessica"
          />
          <Image id="star" src={require("../assets/Star 3.png")} alt="star" />
          <Image id="orangerectOverlay" src={require("../assets/Rectangle 29.png")} alt="star" />
          <div id="orangerect" />

          <p id="smalltext">
            OREGON JACKET
            <br />
            $124
          </p>
        </div>
      </div>
    );
  };
  return (
    <div className="container">
      <Shopkart flag={props.flag} handleMenu={props.handleMenu}/>
      <NavigationBar/>
      <div className="mainContainer">
        {freshlook()}
        {imageContainer()}
      </div>
    </div>
  );
};

export default Home;
