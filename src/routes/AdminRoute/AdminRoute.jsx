import React, { useContext } from "react";
import { AuthContext } from "../../Contexts/AuthContext/AuthProvider";

import { Navigate, useLocation } from "react-router-dom";
import useAdmin from "../../Hooks/isAdmin/useAdmin";

const AdminRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const [isAdmin] = useAdmin(user?.email);

  if (user && isAdmin) {
    return children;
  } else {
    <Navigate to="/*"></Navigate>;
  }
  if (loading) {
    return <Loader></Loader>;
  }
};

export default AdminRoute;
