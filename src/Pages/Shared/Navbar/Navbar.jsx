import React, { useContext } from "react";
import "animate.css";
import { Link } from "react-router-dom";
import { FaCartShopping } from "react-icons/fa6";
import { AuthContext } from "../../../Contexts/AuthContext/AuthProvider";
import { GoSignOut } from "react-icons/go";
import toast from "react-hot-toast";

const Navbar = () => {
  const { user, logout, handleEmailVerify } = useContext(AuthContext);

  const handleSignout = () => {
    logout()
      .then()
      .catch((err) => {
        console.log(err);
      });
  };

  const handleVerify = () => {
    handleEmailVerify()
      .then(() => {
        toast.success("Check Your email to Verify");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const navItems = (
    <>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/about">About</Link>
      </li>
      <li>
        <Link to="/products">Products</Link>
      </li>
      <li>
        <Link to="/blogs">Blogs</Link>
      </li>
      <li>
        <Link to="/contact">Contact Us</Link>
      </li>

      {user ? (
        <>
          <li>
            <Link to="/dashboard">Dashbard</Link>
          </li>
          <li>
            <Link className=" uppercase underline">{user?.displayName}</Link>
          </li>
          <li>
            <Link>
              <GoSignOut
                className="text-xl"
                onClick={handleSignout}
              ></GoSignOut>
            </Link>
          </li>
        </>
      ) : (
        <li>
          <Link to="/login">Login</Link>
        </li>
      )}
      {user && user?.emailVerified !== true && (
        <li onClick={handleVerify}>
          <Link className=" text-blue-500 underline uppercase">Verify</Link>
        </li>
      )}
    </>
  );

  return (
    <div className="navbar justify-between bg-slate-900  text-white">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            {navItems}
          </ul>
        </div>
        <Link to="/" className="btn btn-ghost text-xl lg:ms-24">
          <FaCartShopping />
          SALE COMMERCE
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1  me-16">{navItems}</ul>
      </div>
    </div>
  );
};

export default Navbar;
