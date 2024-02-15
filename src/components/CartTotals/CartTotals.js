import React from "react";
import styled from "./CartTotals.module.css";
import { Box, Typography } from "@mui/material";
import { useSelector } from "react-redux";
import { SectionTitle } from "../../components/index";
import { formatPrice } from "../../utilis";

const CartTotals = () => {
  const { cartTotal, shipping, tax, orderTotal } = useSelector(
    (item) => item.cart
  );
  return (
    <Box className={styled.mainDivTotals}>
      <Box>
        <Typography variant="body1">Subtotal</Typography>
        <Typography variant="body2">{formatPrice(cartTotal)}</Typography>
      </Box>
      <Box>
        <Typography variant="body1">Shipping</Typography>
        <Typography variant="body2">{formatPrice(shipping)}</Typography>
      </Box>
      <Box>
        <Typography variant="body1">Tax</Typography>
        <Typography variant="body2">{formatPrice(tax)}</Typography>
      </Box>
      <Box className={styled.orderTotal}>
        <Typography variant="body1">Total</Typography>
        <Typography variant="body2">{formatPrice(orderTotal)}</Typography>
      </Box>
    </Box>
  );
};

export default CartTotals;
