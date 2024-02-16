import React, { useContext } from "react";
import { AuthContext } from "../../Contexts/AuthContext/AuthProvider";

import { Navigate } from "react-router-dom";
import useSeller from "../../Hooks/useSeller/useSeller";

const SellerLayout = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const [isAdmin] = useSeller(user?.email);

  if (user && isAdmin) {
    return children;
  } else {
    <Navigate to="/*"></Navigate>;
  }
  if (loading) {
    return <Loader></Loader>;
  }
};

export default SellerLayout;
