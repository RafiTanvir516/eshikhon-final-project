import React, { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import ProductCategoryCart from "../ProductCategoryCart/ProductCategoryCart";
import { AuthContext } from "../../../Contexts/AuthContext/AuthProvider";

const ProuctCategory = () => {
  const products = useLoaderData();

  return (
    <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mx-16 mt-20">
      {products.map((product) => (
        <ProductCategoryCart
          key={product._id}
          product={product}
        ></ProductCategoryCart>
      ))}
    </div>
  );
};

export default ProuctCategory;
