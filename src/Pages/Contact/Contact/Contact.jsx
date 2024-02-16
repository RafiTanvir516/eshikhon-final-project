import React from "react";
import contactBanner from "../../../assets/images/contactBanner.jpeg";
import ContactCard from "../ContactCard/ContactCard";
const Contact = () => {
  return (
    <div>
      <div className=" relative">
        <img src={contactBanner} alt="" className=" w-full max-h-[550px]" />
      </div>
      <div>
        <ContactCard></ContactCard>
      </div>
    </div>
  );
};

export default Contact;
