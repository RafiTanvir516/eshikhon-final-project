import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Contexts/AuthContext/AuthProvider";

const useAdmin = (email) => {
  const [isAdmin, setIsAdmin] = useState(false);
  const { setLoading } = useContext(AuthContext);
  useEffect(() => {
    if (email) {
      fetch(
        `https://final-assignment-server-kappa.vercel.app/users/admin/${email}`
      )
        .then((res) => res.json())
        .then((data) => {
          setIsAdmin(data.isAdmin);

          setLoading(false);
        });
    }
  }, [email]);
  return [isAdmin];
};

export default useAdmin;
