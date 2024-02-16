import React from "react";
import "animate.css";
import slider1 from "../../../assets/images/6883213.jpg";
import slider2 from "../../../assets/images/carousel-2.jpeg";
import slider3 from "../../../assets/images/carousel1.jpeg";
import textBgImage from "../../../assets/images/text-bg-image.jpeg";
const HomeSlider = () => {
  return (
    <div>
      {/* carousel  */}
      <div className="carousel w-full mt-8 animate__animated animate__fadeIn">
        <div id="slide1" className="carousel-item relative w-full">
          <img src={slider1} className="w-full" />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide4" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide2" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide2" className="carousel-item relative w-full">
          <img src={slider2} className="w-full" />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide1" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide3" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide3" className="carousel-item relative w-full">
          <img src={slider3} className="w-full" />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2 ">
            <a href="#slide2" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide1" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
      </div>
      {/* carousel description */}

      <div
        className=" md:py-36 py-10 text-blue-900"
        style={{
          background: `url(${textBgImage})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          opacity: "0.2",
          clipPath:
            "polygon(20% 0%, 80% 0%, 100% 20%, 100% 80%, 87% 64%, 18% 64%, 0% 80%, 0% 20%)",
        }}
      >
        <div className="mb-36 md:28 lg:mb-28 lg:mx-48 mx-10">
          <h1 className="md:text-xl text-base  lg:text-2xl animate__animated animate__lightSpeedInLeft text-center ">
            Our sellers and their millions of amazing products help make Walmart
            Marketplace one of the fastest-growing eCommerce platforms in the
            U.S. Whether you’re a small business or global brand, our innovative
            solutions simplify the selling experience and help deliver growth at
            scale. <span className=" font-bold">Let’s grow together!</span>
          </h1>
        </div>
      </div>
    </div>
  );
};

export default HomeSlider;
