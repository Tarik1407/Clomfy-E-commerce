import React from "react";
import { useSelector } from "react-redux";
import { CartItem } from "../index";
import styled from "./CartItemsList.module.css";
import { Box } from "@mui/material";

const CartItemsList = () => {
  const { cartItems } = useSelector((item) => item.cart);

  return (
    <Box>
      {cartItems.map((item) => (
        <CartItem key={item.cartID} {...item} />
      ))}
    </Box>
  );
};

export default CartItemsList;
