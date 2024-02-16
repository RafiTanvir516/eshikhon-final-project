import React from "react";

const PrivateButton = ({ children }) => {
  return (
    <button className="btn bg-gradient-to-r from-secondary to-primary border-0 rounded-2xl text-white px-5 py-2 ">
      {children}
    </button>
  );
};

export default PrivateButton;
