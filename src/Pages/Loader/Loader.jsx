import React from "react";

const Loader = ({ show }) => {
  return (
    show && (
      <div className="h-screen flex justify-center items-center">
        <span className="loading loading-spinner loading-lg text-success"></span>
      </div>
    )
  );
};

export default Loader;
