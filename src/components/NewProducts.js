import React, { useEffect, useRef, useState } from "react";
import "../css/newProducts.css";
import { Image } from "react-bootstrap";
import star2Logo from "../assets/Star 2.svg";
import arrow1 from "../assets/Arrow 1.svg";
import arrow2 from "../assets/Arrow 2.svg";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
const NewProducts = () => {
  const handleWindowResize = () => {
    if (window.innerWidth < 600) {
      setNoOfPages(1);
    } else {
      setNoOfPages(3);
    }
  };
  const [noOfPages, setNoOfPages] = useState(3);
  const swiperRef = useRef();
  const [products, setproducts] = useState([]);
  
  window.addEventListener("resize", handleWindowResize);
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
    .then((response) => {
      return response.json();
    })
    .then((data) => setproducts(data))
    .catch((rejected) => console.log(rejected));
    if (window.innerWidth < 600) {
      setNoOfPages(1);
    } else {
      setNoOfPages(3);
    }
  }, [noOfPages]);
  return (
    <div className="maincontainer">
      <div className="titleDiv">
        <div className="titlesubdiv">
          <div style={{ display: "flex", flexDirection: "row" }}>
            <img id="star2" src={star2Logo} alt="star2" />
            <hr id="line" />
            <h4 id="mainTitle">New products</h4>
          </div>
        </div>
        <div className="arrows">
          <div onClick={() => swiperRef.current.slidePrev()}>
            <img style={{ marginRight: "4vw" }} src={arrow2} alt="arrow2" />
          </div>
          <div onClick={() => swiperRef.current.slideNext()}>
            <img src={arrow1} alt="arrow1" />
          </div>
        </div>
      </div>
      <div className="productsDiv">
        <div className="categories">
          <h3 id="categoriesTitle">Electronics</h3>
          <h3 id="categoriesTitle">Jewelery</h3>
          <h3 id="categoriesTitle">Men's clothing</h3>
          <h3 id="categoriesTitle">Women's clothing</h3>
        </div>
        <div className="products">
          <Swiper
            onSwiper={(swiper) => {
              swiperRef.current = swiper;
            }}
            spaceBetween={10}
            slidesPerView={noOfPages}
            style={{
              display: "flex",
              marginTop: "10px",
              width: "950px",
            }}
          >
            {products.map((product) => (
              <SwiperSlide className="SwiperSlide" key={product.id}>
                <div>
                  <Image
                    id="cardImage"
                    src={require("../assets/philipp-arlt-8EyB_RvaWtY-unsplash.png")}
                    alt="image"
                  />
                </div>
                <div className="cardTitleDiv">
                  <div>
                    <h2 id="cardTitle">{product.title}</h2>
                  </div>
                  <div>
                    <p id="cardDescription">{product.description.substring(0,150)}</p>
                  </div>
                  <div>
                    <h3 id="value">${product.price}</h3>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <div className="arrows1">
          <div onClick={() => swiperRef.current.slidePrev()}>
            <img style={{ marginRight: "4vw" }} src={arrow2} alt="arrow2" />
          </div>
          <div onClick={() => swiperRef.current.slideNext()}>
            <img src={arrow1} alt="arrow1" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewProducts;
