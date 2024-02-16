import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";

import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../Contexts/AuthContext/AuthProvider";

const SignUp = () => {
  const [signUpError, setSignUpError] = useState("");
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { createUser, updateUser } = useContext(AuthContext);

  const onSignupSubmit = (data) => {
    const infoUser = {
      displayName: data.fullname,
    };
    savedUser(data);

    createUser(data.email, data.password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        navigate("/");

        // update name
        updateUser(infoUser)
          .then(() => {})
          .catch((err) => console.log(err));
        toast.success("Your Account Created Successfully");
      })
      .catch((err) => {
        console.log(err);
        setSignUpError(err.message);
      });
  };

  const savedUser = (data) => {
    const userInfo = {
      name: data.displayName,
      email: data.email,
      role: data.role,
    };

    fetch("https://final-assignment-server-kappa.vercel.app/users", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(userInfo),
    })
      .then((res) => res.json())
      .then(() => {});
  };

  return (
    <div className=" my-32">
      <div className="card shrink-0 max-w-96 h-auto shadow-2xl bg-base-300 rounded-lg text-white mx-auto">
        <form className="card-body" onSubmit={handleSubmit(onSignupSubmit)}>
          <h1 className=" text-center text-xl font-light ">Sign Up</h1>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              {...register("fullname", {
                required: "Enter Your Full Name",
              })}
              type="text"
              placeholder="name"
              className="input input-bordered"
            />
            {errors?.fullName && (
              <p className=" text-red-500">{errors.fullName.message}</p>
            )}
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              {...register("email", {
                required: "Enter Your Email",
              })}
              type="email"
              placeholder="email"
              className="input input-bordered"
            />
            {errors?.email && (
              <p className=" text-red-500">{errors.email.message}</p>
            )}
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              {...register("password", {
                required: "Enter Your Password",
              })}
              type="password"
              placeholder="password"
              className="input input-bordered"
            />
            {errors?.password && (
              <p className=" text-red-500">{errors.password.message}</p>
            )}
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">USER TYPE</span>
            </label>
            <select
              {...register("role", {
                required: "Select Your Type",
              })}
              className="select select-primary w-full max-w-xs"
            >
              <option>buyer</option>
              <option>seller</option>
            </select>
            {errors?.role && (
              <p className=" text-red-500">{errors.role.message}</p>
            )}
          </div>

          {/* input end */}
          {signUpError && <p className=" text-red-500">{signUpError}</p>}
          <div className="form-control mt-4">
            <button className="btn btn-accent" type="submit">
              REGISTER
            </button>
          </div>
          <p className=" text-sm text-center">
            Already have an acount?
            <Link className=" text-secondary" to="/login">
              Please Login
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
