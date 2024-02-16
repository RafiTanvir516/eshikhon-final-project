import React from "react";
import heroImg from "../../../assets/images/hero-image.png";
import { MdOutlineAssignment } from "react-icons/md";

const HomeHero = () => {
  return (
    <div className="hero pb-5">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img src={heroImg} className="rounded-lg md:max-w-md  sm:max-w-xs  " />
        <div className=" md:m-20 md:py-20">
          <div className="flex lg:justify-center lg:items-center flex-col lg:flex-row ">
            <span className=" text-5xl mx-3 ">
              <MdOutlineAssignment></MdOutlineAssignment>
            </span>
            <p className="py-2 text-lg">
              <span className=" font-semibold">
                Sell on Sell Commerce Sell with confidence.
              </span>
              A Marketplace built on trust, transparency, and fairness.
            </p>
          </div>
          <div className="flex lg:justify-center lg:items-center flex-col lg:flex-row ">
            <span className=" text-5xl mx-3 ">
              <MdOutlineAssignment></MdOutlineAssignment>
            </span>
            <p className="py-2 text-lg">
              <span className=" font-semibold">
                Sell on Sell Commerce Sell with confidence.
              </span>
              A Marketplace built on trust, transparency, and fairness.
            </p>
          </div>
          <div className="flex lg:justify-center lg:items-center flex-col lg:flex-row ">
            <span className=" text-5xl mx-3 ">
              <MdOutlineAssignment></MdOutlineAssignment>
            </span>
            <p className="py-2 text-lg">
              <span className=" font-semibold">
                Sell on Sell Commerce Sell with confidence.
              </span>
              A Marketplace built on trust, transparency, and fairness.
            </p>
          </div>
          <div className="flex lg:justify-center lg:items-center flex-col lg:flex-row ">
            <span className=" text-5xl mx-3 ">
              <MdOutlineAssignment></MdOutlineAssignment>
            </span>
            <p className="py-2 text-lg">
              <span className=" font-semibold">
                Sell on Sell Commerce Sell with confidence.
              </span>
              A Marketplace built on trust, transparency, and fairness.
            </p>
          </div>
          <div className="flex lg:justify-center lg:items-center flex-col lg:flex-row ">
            <span className=" text-5xl mx-3 ">
              <MdOutlineAssignment></MdOutlineAssignment>
            </span>
            <p className="py-2 text-lg">
              <span className=" font-semibold">
                Sell on Sell Commerce Sell with confidence.
              </span>
              A Marketplace built on trust, transparency, and fairness.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeHero;
