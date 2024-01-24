import "./App.css";
import {
  About,
  Login,
  Register,
  Checkout,
  Cart,
  Error,
  HomeLayout,
  Landing,
  Orders,
  Products,
  SingleProduct,
} from "./pages/index";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import React from "react";
import { ErrorElement } from "./components";
import { loader } from "./pages/Landing/Landing";
import { loaderItem } from "../src/pages/SingleProduct/SingleProduct";
import { loaderAllProducts } from "./pages/Products/Products";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Landing />,
        errorElement: <ErrorElement />,
        loader: loader,
      },
      {
        path: "products",
        element: <Products />,
        errorElement: <ErrorElement />,
        loader: loaderAllProducts,
      },
      {
        path: "products/:id",
        element: <SingleProduct />,
        errorElement: <ErrorElement />,
        loader: loaderItem,
      },
      { path: "about", element: <About /> },
      { path: "checkout", element: <Checkout /> },
      { path: "orders", element: <Orders /> },
      { path: "cart", element: <Cart /> },
    ],
  },
  {
    path: "/login",
    element: <Login />,
    errorElement: <Error />,
  },
  {
    path: "/register",
    element: <Register />,
    errorElement: <Error />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
