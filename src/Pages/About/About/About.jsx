import React from "react";
import AboutText from "../AboutText/AboutText";

const About = () => {
  return (
    <div>
      <div className=" bg-blue-400/45   w-full h-60 flex items-center justify-center">
        <h1 className=" text-center text-7xl font-thin italic text-white hover:text-accent">
          Fun. Purpose. Focus
        </h1>
      </div>
      <AboutText></AboutText>
    </div>
  );
};

export default About;
