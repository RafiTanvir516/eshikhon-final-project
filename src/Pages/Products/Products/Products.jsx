import { useQuery } from "@tanstack/react-query";
import React, { useContext } from "react";
import ProductCards from "../ProductCards/ProductCards";
import { AuthContext } from "../../../Contexts/AuthContext/AuthProvider";

const Products = () => {
  const { setLoading } = useContext(AuthContext);

  const { data: products = [] } = useQuery({
    queryKey: ["products"],
    queryFn: async () => {
      setLoading(true);
      const res = await fetch(
        "https://final-assignment-server-kappa.vercel.app/products"
      );
      setLoading(false);
      const data = await res.json();
      return data;
    },
  });

  return (
    <div>
      <h1 className=" text-5xl text-center py-5 text-secondary font-bold ">
        ALL PRODUCTS
      </h1>
      <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mx-16 mt-20">
        {products.map((product) => (
          <ProductCards key={product._id} product={product}></ProductCards>
        ))}
      </div>
    </div>
  );
};

export default Products;
