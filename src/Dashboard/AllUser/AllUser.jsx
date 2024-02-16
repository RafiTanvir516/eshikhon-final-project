import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React from "react";
import toast from "react-hot-toast";

const AllUser = () => {
  const { data: users = [], refetch } = useQuery({
    queryKey: ["products"],
    queryFn: async () => {
      const res = await axios.get(
        `https://final-assignment-server-kappa.vercel.app/users`
      );
      const data = await res.data;
      return data;
    },
  });
  const handleUserAdmin = (user) => {
    if (user) {
      confirm(`Do you want to make admin ${user?.email}`);
    }
    fetch(
      `https://final-assignment-server-kappa.vercel.app/users/admin/${user?._id}`,
      {
        method: "PUT",
      }
    )
      .then((res) => {
        res.json();
      })
      .then((data) => {
        if (data.modifiedCount > 0) {
          toast.success(`${user?.email} is admin`);
          refetch();
        }
      });
  };
  return (
    <div>
      <h1 className=" text-2xl">My Appointment {users.length}</h1>
      <div className=" mt-8">
        <div>
          <table className="sm:table bg-base-100">
            <thead className="bg-base-200">
              <tr>
                <th>Serial</th>
                <th>Name</th>
                <th>Email</th>
                <th>Role</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user, i) => (
                <tr className="hover" key={user._id}>
                  <th>{i + 1}</th>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td>{user.role}</td>
                  {user?.role !== "admin" ? (
                    <td>
                      <button
                        className="btn btn-outline btn-error"
                        onClick={() => {
                          handleUserAdmin(user);
                        }}
                      >
                        Make Admin
                      </button>
                    </td>
                  ) : (
                    <td>
                      <button className=" btn btn-outline">Admin</button>
                    </td>
                  )}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AllUser;
