import React, { useContext } from "react";
import { AuthContext } from "../../Contexts/AuthContext/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";
import Loader from "../../Pages/Loader/Loader";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);

  const location = useLocation();
  if (user) {
    return children;
  }
  if (loading) {
    return <Loader></Loader>;
  }
  return <Navigate to="/login" state={{ from: location }}></Navigate>;
};

export default PrivateRoute;
