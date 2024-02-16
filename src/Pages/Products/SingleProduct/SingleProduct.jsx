import React, { useContext, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../../Contexts/AuthContext/AuthProvider";
import { FcBusinessman } from "react-icons/fc";
import { FaCheckCircle } from "react-icons/fa";
import BuyNow from "./buynow/BuyNow";

const SingleProduct = () => {
  const { user } = useContext(AuthContext);
  const [option, setOption] = useState({});
  const product = useLoaderData();
  const {
    title,
    price,
    description,
    category,
    condition,
    seller,
    image,
    verify,
  } = product;
  return (
    <div>
      <div className="hero py-20">
        <div className="flex flex-col lg:flex-row  max-w-7xl justify-between gap-y-20">
          <div className=" w-screen ">
            {product?.newdata ? (
              <img
                src={`data:image/png;base64,${image}`}
                className=" rounded-lg   "
              />
            ) : (
              <img src={image} className=" rounded-lg" />
            )}
          </div>
          <div className="px-2 lg:mx-40">
            <h1 className="text-3xl font-bold">{title}</h1>
            <p className="py-1 text-xl text-blue-500">{category}</p>
            <p className="pt-6">{description}</p>
            <p className="py-1 text-red-500 text-lg">$ {price}</p>
            <p className="py-1 text-lg text-purple-500">
              Condition: {condition}
            </p>

            <div className=" py-3 flex items-center ">
              <span>
                <FcBusinessman className=" text-5xl " />
              </span>
              <span className=" text-lg uppercase  text-neutral">{seller}</span>
              {verify && (
                <span className=" text-base ms-1">
                  <FaCheckCircle className=" text-blue-500" />
                </span>
              )}
            </div>
            <label
              htmlFor="book_now"
              className="btn btn-primary bg-gradient-to-r from-secondary to-primary text-white "
            >
              Buy Now
            </label>
            {option && (
              <BuyNow product={product} setOption={setOption}></BuyNow>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;
