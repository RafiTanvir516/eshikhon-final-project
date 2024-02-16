import React from "react";
import PrivateButton from "../../../../components/common/PrivateButton";
import { Link } from "react-router-dom";

const ProductCategoryCard = ({ product }) => {
  return (
    <div className="group flex justify-center items-center overflow-hidden relative cursor-pointer">
      <div className=" flex justify-center items-center">
        {product?.newdata ? (
          <img
            src={`data:image/png;base64,${product?.image}`}
            className=" rounded-lg  max-h-screen "
          />
        ) : (
          <img
            src={product.image}
            alt="Display Image"
            className=" md:h-[400px] h-[300px] group-hover:rotate-1 transition-transform group-hover:scale-100 duration-500"
          />
        )}
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black mx-1 group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70 "></div>
      <div className="absolute inset-0 flex flex-col justify-center items-center lg:px-9 text-center translate-y-[60%%] group-hover:translate-y-0 transition-all m-5">
        <div>
          <h2 className=" text-xl lg:text-3xl font-bold text-white uppercase">
            {product.category}
          </h2>
          <p className=" text-sm  md:text-lg italic mb-3 text-secondary md:mx-5 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            {product.displaytext}
          </p>
          <div className=" opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <Link to={`/products/${product.category}`}>
              <PrivateButton>See More</PrivateButton>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCategoryCard;
