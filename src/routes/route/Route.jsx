import { createBrowserRouter } from "react-router-dom";
import Main from "../../layout/main/Main";
import Home from "../../Pages/Home/Home/Home";
import About from "../../Pages/About/About/About";
import Contact from "../../Pages/Contact/Contact/Contact";
import ProuctCategory from "../../Pages/ProuctCategory/ProuctCategory/ProuctCategory";
import Login from "../../Pages/Authintication/Login/Login";
import SignUp from "../../Pages/Authintication/SignUp/SignUp";
import PrivateRoute from "../Private/PrivateRoute";
import Dashboardlayout from "../../layout/dashboardlayout/Dashboardlayout";
import Products from "../../Pages/Products/Products/Products";
import SingleProduct from "../../Pages/Products/SingleProduct/SingleProduct";
import ErrorPage from "../../Pages/ErrorPage/ErrorPage";
import Dashboard from "../../Dashboard/Dashboard/Dashboard";

import AdminRoute from "../AdminRoute/AdminRoute";
import AllUser from "../../Dashboard/AllUser/AllUser";
import SellerLayout from "../SelllerRoute/SellerRoute";
import AddProduct from "../../Dashboard/Add Product/AddProduct";
import BlogLayout from "../../layout/BlogLayout/BlogLayout";
import Blog from "../../Pages/Blogs/Blog";
import AddBlog from "../../Pages/Blogs/AddBlog/AddBlog";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/about",
        element: <About></About>,
      },

      {
        path: "/contact",
        element: <Contact></Contact>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/signup",
        element: <SignUp></SignUp>,
      },
      {
        path: "/products/:category",
        element: <ProuctCategory></ProuctCategory>,
        loader: async ({ params }) => {
          return await fetch(
            `https://final-assignment-server-kappa.vercel.app/products/${params.category}`
          );
        },
      },
      {
        path: "/products",
        element: <Products></Products>,
      },
      {
        path: "/product/:id",
        element: <SingleProduct></SingleProduct>,
        loader: async ({ params }) => {
          return await fetch(
            `https://final-assignment-server-kappa.vercel.app/product/${params.id}`
          );
        },
      },
    ],
  },
  {
    path: "/dashboard",
    element: (
      <PrivateRoute>
        <Dashboardlayout />
      </PrivateRoute>
    ),
    children: [
      {
        path: "/dashboard",
        element: <Dashboard></Dashboard>,
      },
      {
        path: "/dashboard/add-product",
        element: (
          <SellerLayout>
            <AddProduct></AddProduct>
          </SellerLayout>
        ),
      },
      {
        path: "/dashboard/all-users",
        element: (
          <AdminRoute>
            <AllUser></AllUser>,
          </AdminRoute>
        ),
      },
    ],
  },

  {
    path: "/blogs",
    element: (
      <PrivateRoute>
        <BlogLayout />
      </PrivateRoute>
    ),
    children: [
      {
        path: "/blogs",
        element: <Blog></Blog>,
      },
      {
        path: "/blogs/add-blog",
        element: <AddBlog></AddBlog>,
      },
    ],
  },
  {
    path: "*",
    element: <ErrorPage></ErrorPage>,
  },
]);

export default Router;
