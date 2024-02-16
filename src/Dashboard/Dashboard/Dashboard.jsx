import { useQuery } from "@tanstack/react-query";
import React, { useContext } from "react";
import { AuthContext } from "../../Contexts/AuthContext/AuthProvider";
import axios from "axios";
import toast from "react-hot-toast";

const Dashboard = () => {
  const { user } = useContext(AuthContext);
  const { data: orders = [], refetch } = useQuery({
    queryKey: ["products", user.email],
    queryFn: async () => {
      const res = await axios.get(
        `https://final-assignment-server-kappa.vercel.app/orders?email=${user?.email}`
      );
      const data = await res.data;
      return data;
    },
  });

  // order delete

  const handleOrderDelete = (id) => {
    if (id) {
      confirm("Are you sure to delete?");
    }
    fetch(`https://final-assignment-server-kappa.vercel.app/orders/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          refetch();
          toast.success("Your order is deleted");
        }
      });
  };

  return (
    <div>
      <h1 className=" text-2xl">My Appointment {orders.length}</h1>
      <div className=" mt-8">
        <div>
          <table className="sm:table bg-base-100">
            <thead className="bg-base-200">
              <tr>
                <th>Serial</th>
                <th>Product</th>
                <th>price</th>
                <th>seller</th>
                <th>location</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {orders.map((order, i) => (
                <tr className="hover" key={order._id}>
                  <th>{i + 1}</th>
                  <td>{order.product}</td>
                  <td>{order.price}</td>
                  <td>{order.seller}</td>
                  <td>{order.location}</td>
                  <td>
                    <button
                      className="btn btn-outline btn-error"
                      onClick={() => {
                        handleOrderDelete(order._id);
                      }}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
