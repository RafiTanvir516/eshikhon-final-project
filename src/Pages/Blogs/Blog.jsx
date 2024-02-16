import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React, { useContext } from "react";
import PrivateButton from "../../components/common/PrivateButton";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Contexts/AuthContext/AuthProvider";

const Blog = () => {
  const { setLoading } = useContext(AuthContext);
  const { data: blogs = [], refetch } = useQuery({
    queryKey: ["blogs"],
    queryFn: async () => {
      setLoading(true);
      const res = await axios.get(
        `https://final-assignment-server-kappa.vercel.app/blogs`
      );
      setLoading(false);
      const data = await res.data;
      return data;
    },
  });

  return (
    <div>
      {blogs.map((blog) => (
        <div className="card " key={blog._id}>
          <figure>
            <img
              src={`data:image/png;base64,${blog.image}`}
              alt="Shoes"
              className=""
            />
          </figure>
          <div className="card-body sm:mx-16">
            <h2 className=" sm:text-6xl text-3xl  py-3 text-red-500">
              {blog.title}
            </h2>
            <p className=" text-2xl py-3">{blog.description}</p>
            <div className="card-actions justify-end">
              <Link to="/products">
                <PrivateButton>See Product</PrivateButton>
              </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Blog;
