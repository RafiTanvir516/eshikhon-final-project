import React, { useEffect, useState } from "react";
import ProductCategoryCard from "./productCategoryCard/ProductCategoryCard";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const ProductCategorySec = () => {
  const { data: products = [] } = useQuery({
    queryKey: ["products"],
    queryFn: async () => {
      const res = await axios.get(
        "https://final-assignment-server-kappa.vercel.app/products"
      );
      const data = await res.data;
      return data;
    },
  });
  const filteredProducts = products.filter(
    (prod) => prod.displayproduct === "display"
  );

  return (
    <div className="pb-20 ">
      <div>
        <h1 className=" text-2xl  font-medium text-center">PRODUCTS</h1>
        <div className="divider bg-gradient-to-r from-primary via-transparent to-secondary  w-32  h-5 mx-auto"></div>
      </div>
      <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mx-16 mt-20">
        {filteredProducts.map((product) => (
          <ProductCategoryCard
            key={product.id}
            product={product}
          ></ProductCategoryCard>
        ))}
      </div>
    </div>
  );
};

export default ProductCategorySec;
