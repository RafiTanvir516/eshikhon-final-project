import React from "react";
import { IoIosCall } from "react-icons/io";
import { FaLocationDot } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import PrivateButton from "../../../components/common/PrivateButton";
const ContactCard = () => {
  return (
    <div>
      <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        <div>
          <iframe
            width="100%"
            height="600"
            frameborder="0"
            scrolling="no"
            marginheight="0"
            marginwidth="0"
            src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=los%20angeles+(My%20Business%20Name)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
          >
            <a href="https://www.gps.ie/">gps vehicle tracker</a>
          </iframe>
        </div>
        <div className=" shadow-md">
          <div className=" mx-20 my-28">
            <h1 className=" text-4xl font-semibold">Meet us</h1>
            <p className=" py-5">
              <IoIosCall className=" text-primary inline text-2xl me-2"></IoIosCall>
              +40724343949
            </p>
            <p className=" py-5">
              <MdEmail className=" text-primary inline text-2xl me-2"></MdEmail>
              contact@brandaffair.ro
            </p>
            <p className=" py-5">
              <FaLocationDot className=" text-primary inline text-2xl me-2"></FaLocationDot>
              Amman St, no 35, 4th floor, ap 10, Bucharest
            </p>
          </div>
        </div>
        <div className="bg-base-200">
          <div className="mx-20 my-28">
            <h1 className="text-4xl font-semibold my-5">Pitch us</h1>
            <div className=" my-5">
              <p className="text-secondary my-5">hello, </p>
              my name is and my e-mail address is and I would like to discuss
              about .
            </div>
            <PrivateButton>Send</PrivateButton>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ContactCard;
