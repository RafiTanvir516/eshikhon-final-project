import React, { useContext } from "react";
import Navbar from "../../Pages/Shared/Navbar/Navbar";
import { Link, Outlet } from "react-router-dom";
import { AuthContext } from "../../Contexts/AuthContext/AuthProvider";
import useAdmin from "../../Hooks/isAdmin/useAdmin";
import { MdDashboard } from "react-icons/md";

const BlogLayout = () => {
  const { user } = useContext(AuthContext);
  const [isAdmin] = useAdmin(user?.email);
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
        <div
          className="drawer-content p-5 md:p-12  bg-slate-900"
          data-theme="black"
        >
          <Outlet></Outlet>
        </div>

        {isAdmin && (
          <div className="drawer-side shadow-2xl">
            <label
              htmlFor="dashboard-drawer"
              aria-label="close sidebar"
              className="drawer-overlay"
            ></label>
            <ul className="menu w-80 min-h-full bg-base-100 text-base-content">
              {/* Sidebar content here */}
              <>
                <li>
                  <Link to="/blogs/add-blog" className="text-base rounded-none">
                    Add Blog
                  </Link>
                </li>
              </>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default BlogLayout;
