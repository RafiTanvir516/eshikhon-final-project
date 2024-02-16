import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Contexts/AuthContext/AuthProvider";

const useSeller = (email) => {
  const [isSeller, setIsSeller] = useState(false);
  const { setLoading } = useContext(AuthContext);
  useEffect(() => {
    if (email) {
      fetch(
        `https://final-assignment-server-kappa.vercel.app/users/seller/${email}`
      )
        .then((res) => res.json())
        .then((data) => {
          setIsSeller(data.isSeller);
          setLoading(false);
        });
    }
  }, [email]);
  return [isSeller];
};

export default useSeller;
