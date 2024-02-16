import React from "react";
import animationData from "../../../../public/Animation - 1708102835666.json";
import Lottie from "lottie-react";
const Phone = () => {
  return (
    <div className=" mb-10">
      <div className=" grid grid-cols-1 md:grid-cols-2 mx-5">
        <div className=" flex items-center">
          {" "}
          <div className="mockup-phone border-primary  hover:bg-yellow-500">
            <div className="camera"></div>
            <div className="display">
              <div className="artboard max-w-full artboard-demo phone-1">
                Founder & CEO Rafi Tanvir
              </div>
            </div>
          </div>
        </div>
        <div>
          <Lottie animationData={animationData}></Lottie>
        </div>
      </div>
    </div>
  );
};

export default Phone;
