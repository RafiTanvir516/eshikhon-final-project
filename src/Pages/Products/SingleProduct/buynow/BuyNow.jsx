import React, { useContext } from "react";
import { AuthContext } from "../../../../Contexts/AuthContext/AuthProvider";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";

const BuyNow = ({ product, setOption }) => {
  const { user } = useContext(AuthContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { title, price, seller } = product;

  const handleBuyOrder = (data) => {
    const formData = new FormData();
    formData.append("product", data.product);
    formData.append("price", data.price);
    formData.append("seller", data.seller);
    formData.append("name", data.name);
    formData.append("email", data.email);
    formData.append("location", data.location);

    fetch("https://final-assignment-server-kappa.vercel.app/orders", {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          toast.success("Order is Received Successfully");
          setOption(null);
        }
      });
  };

  return (
    <div>
      <input type="checkbox" id="book_now" className="modal-toggle" />
      <div className="modal" role="dialog">
        <div className="modal-box">
          <div>
            <h3 className=" font-medium text-lg">Buy Now</h3>
            <div className="modal-action">
              <label
                htmlFor="book_now"
                className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2 bg-accent text-[#8391AD]"
              >
                ✕
              </label>
            </div>
          </div>

          <form onSubmit={handleSubmit(handleBuyOrder)}>
            <label className=" text-base">Product:</label>
            <input
              {...register("product")}
              type="text"
              placeholder="Product"
              className="input input-bordered w-full mb-5"
              value={title}
              readOnly
            />
            <label className=" text-base">Price:</label>
            <input
              {...register("price")}
              type="text"
              placeholder="price"
              className="input input-bordered w-full mb-5"
              value={`$ ${price}`}
              readOnly
            />
            <label className=" text-base">Seller:</label>
            <input
              {...register("seller")}
              type="text"
              placeholder="seller"
              className="input input-bordered w-full mb-5"
              value={seller}
              readOnly
            />
            <label className=" text-base">Name:</label>
            <input
              {...register("name", {
                required: "Name is required",
              })}
              type="text"
              placeholder="Full Name"
              className="input input-bordered w-full mb-5"
              value={user?.displayName}
            />
            {errors?.name && (
              <p className=" text-red-500">{errors.name.message}</p>
            )}
            <label className=" text-base">Email:</label>
            <input
              {...register("email")}
              type="email"
              placeholder="Email"
              className="input input-bordered w-full mb-5"
              value={user?.email}
              readOnly
            />
            <label className=" text-base">Meeting Location:</label>
            <input
              {...register("location", {
                required: "location is required",
              })}
              type="text"
              placeholder="Location"
              className="input input-bordered w-full mb-5"
            />
            {errors?.name && (
              <p className=" text-red-500">{errors?.name?.message}</p>
            )}
            <input
              type="submit"
              value="Submit"
              className="btn w-full bg-accent text-white mb-5"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default BuyNow;
