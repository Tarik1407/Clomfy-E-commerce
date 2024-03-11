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
// Error element for all
import { ErrorElement } from "./components";
// Loader / Access value in all pages
import { loader } from "./pages/Landing/Landing";
import { loaderItem } from "../src/pages/SingleProduct/SingleProduct";
import { loaderAllProducts } from "./pages/Products/Products";
import { loaderUserCheckout } from "./pages/Checkout/Checkout";
import { loaderOrderList } from "./pages/Orders/Orders";
// Actions for registration and login
import { registerActions } from "./pages/Auth/Register";
import { loginAction } from "./pages/Auth/Login";
import { actionCheckoutOrders } from "./components/CheckOutFormPage/CheckoutFormPage";
// Store
import { store } from "../src/store/store";



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
        loader: loader(),
      },
      {
        path: "products",
        element: <Products />,
        errorElement: <ErrorElement />,
        loader: loaderAllProducts(),
      },
      {
        path: "products/:id",
        element: <SingleProduct />,
        errorElement: <ErrorElement />,
        loader: loaderItem,
      },
      { path: "about", element: <About /> },
      {
        path: "checkout",
        element: <Checkout />,
        loader: loaderUserCheckout(store),
        action: actionCheckoutOrders(store),
      },
      {
        path: "orders",
        element: <Orders />,
        loader: loaderOrderList(store),
      },
      { path: "cart", element: <Cart /> },
    ],
  },
  {
    path: "/login",
    element: <Login />,
    errorElement: <Error />,
    action: loginAction(store),
  },
  {
    path: "/register",
    element: <Register />,
    errorElement: <Error />,
    action: registerActions,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
