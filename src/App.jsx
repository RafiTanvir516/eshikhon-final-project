import { RouterProvider } from "react-router-dom";
import "./App.css";
import Router from "./routes/route/Route";
import { Toaster } from "react-hot-toast";
import Loader from "./Pages/Loader/Loader";
import { useContext, useEffect, useState } from "react";
import axios from "axios";
import { AuthContext } from "./Contexts/AuthContext/AuthProvider";

function App() {
  const { loading, setLoading } = useContext(AuthContext);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 300);
  }, []);
  return (
    <div>
      {loading ? (
        <Loader show={loading}></Loader>
      ) : (
        <>
          <RouterProvider router={Router}></RouterProvider>
          <Toaster />
        </>
      )}
    </div>
  );
}

export default App;
