import React from "react";
import { Box, Typography, Button } from "@mui/material";
import { useDispatch } from "react-redux";
import { clearCart } from "../../features/cart/cartSlice";

const Cart = () => {
  const dispatch = useDispatch();
  return (
    <Box>
      <Typography variant="p1">Cart page</Typography>
      <Button variant="contained" onClick={() => dispatch(clearCart())}>
        Clear cart
      </Button>
    </Box>
  );
};

export default Cart;
