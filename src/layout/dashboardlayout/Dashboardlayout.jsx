import React, { useContext } from "react";
import { Link, Outlet } from "react-router-dom";
import { MdDashboard } from "react-icons/md";
import Navbar from "../../Pages/Shared/Navbar/Navbar";
import useAdmin from "../../Hooks/isAdmin/useAdmin";
import { AuthContext } from "../../Contexts/AuthContext/AuthProvider";
import useSeller from "../../Hooks/useSeller/useSeller";

const DashboardLayout = () => {
  const { user } = useContext(AuthContext);
  const [isAdmin] = useAdmin(user?.email);
  const [isSeller] = useSeller(user?.email);

  return (
    <div>
      <div>
        {/* navbar */}
        <div>
          <Navbar></Navbar>
        </div>
        <label
          htmlFor="dashboard-drawer"
          className="drawer-button lg:hidden text-2xl font-semibold"
        >
          <MdDashboard className=" ms-6 mb-8" />
        </label>
      </div>
      <div className="drawer lg:drawer-open">
        <input
          id="dashboard-drawer"
          type="checkbox"
          className="drawer-toggle"
        />
        <div className="drawer-content bg-slate-900 p-5 md:p-12">
          <Outlet></Outlet>
        </div>

        <div className="drawer-side">
          <label
            htmlFor="dashboard-drawer"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>
          <ul className="menu w-80 min-h-full bg-base-100 text-base-content">
            {/* Sidebar content here */}
            <li>
              <Link to="/dashboard" className=" text-base rounded-none">
                My Order
              </Link>
            </li>
            {isAdmin ||
              (isSeller && (
                <li>
                  <Link
                    to="/dashboard/add-product"
                    className="text-base rounded-none"
                  >
                    Add Prduct
                  </Link>
                </li>
              ))}
            {isAdmin && (
              <>
                <li>
                  <Link
                    to="/dashboard/all-users"
                    className="text-base rounded-none"
                  >
                    All Users
                  </Link>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
