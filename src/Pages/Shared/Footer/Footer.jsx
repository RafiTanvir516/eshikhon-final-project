import React from "react";
import footerBg from "./../../../assets/images/v915-techi-025-l.jpg";

const Footer = () => {
  return (
    <footer
      className="md:p-20 text-black"
      style={{
        background: `url(${footerBg})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        opacity: "0.7",
      }}
    >
      <div className="footer md:justify-between md:px-24 justify-center pb-9">
        <nav>
          <header className="footer-title">SERVICES</header>
          <a className="link link-hover">Emergency Sell</a>
          <a className="link link-hover">Weekly Sell</a>
          <a className="link link-hover">Monthly Checkup</a>
          <a className="link link-hover">Deep Production</a>
        </nav>
        <nav>
          <header className="footer-title">Facility</header>
          <a className="link link-hover">No Extra Charge</a>
          <a className="link link-hover">Fast Delivery</a>
        </nav>
        <nav>
          <header className="footer-title">OUR ADDRESS</header>
          <a className="link link-hover">New York -1219</a>
        </nav>
      </div>
      <p className="md:mt-10 text-center mt-16 text-lg text-primary">
        Copyright 2024 All Rights Reserved By Rafi Tanvir
      </p>
    </footer>
  );
};

export default Footer;
