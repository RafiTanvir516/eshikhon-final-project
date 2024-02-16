import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../../Contexts/AuthContext/AuthProvider";
import toast from "react-hot-toast";

const AddBlog = () => {
  const { user } = useContext(AuthContext);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const handleNewProduct = (data) => {
    const photo = data.photo[0];
    console.log(data);
    const formData = new FormData();
    formData.append("title", data.title);
    formData.append("description", data.description);
    formData.append("image", photo);
    formData.append("bloger", user?.displayName);
    console.log(formData);
    fetch("https://final-assignment-server-kappa.vercel.app/blogs", {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          toast.success("Blog Added Successfully");
          reset();
        }
      });
  };

  return (
    <div>
      <h1 className="text-2xl">Add Blog Admin Sir</h1>

      <div className="card shrink-0 w-96 h-auto shadow-2xl bg-base-100 mt-6">
        <form className="card-body" onSubmit={handleSubmit(handleNewProduct)}>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Blog Title</span>
            </label>
            <input
              {...register("title", {
                required: "Enter Product Full Name",
              })}
              type="text"
              placeholder="name"
              className="input input-bordered"
            />
            {errors?.title && (
              <p className=" text-red-500">{errors.title.message}</p>
            )}
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text">Description</span>
            </label>
            <textarea
              {...register("description", {
                required: "Enter product description ",
              })}
              type="text"
              placeholder="description"
              className="textarea textarea-bordered textarea-lg w-full max-w-xs"
            />
            {errors?.description && (
              <p className=" text-red-500">{errors.description.message}</p>
            )}
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text">Add Photo</span>
            </label>
            <input
              {...register("photo", {
                required: "Enter Product's Photo",
              })}
              type="file"
              className="file-input file-input-bordered file-input-success w-full max-w-xs"
            />
            {errors?.photo && (
              <p className=" text-red-500">{errors.photo.message}</p>
            )}
          </div>

          <div className="form-control mt-4">
            <button className="btn btn-accent" type="submit">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddBlog;
