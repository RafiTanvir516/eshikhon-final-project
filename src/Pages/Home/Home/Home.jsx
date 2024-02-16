import React from "react";
import HomeSlider from "../HomeSlider/HomeSlider";
import ProductCategorySec from "../ProductCategorySec/ProductCategorySec";
import HomeHero from "../HomeHero/HomeHero";
import Phone from "../Phone/Phone";

const Home = () => {
  return (
    <div>
      {/* home banner */}
      <Phone></Phone>
      <HomeSlider></HomeSlider>
      {/* product category */}
      <ProductCategorySec></ProductCategorySec>
      <HomeHero></HomeHero>
    </div>
  );
};

export default Home;
