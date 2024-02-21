import React from "react";
import { Box, Grid, Link } from "@mui/material";
import { useSelector } from "react-redux";
import {
  CartItemsList,
  CartTotals,
  SectionTitle,
} from "../../components/index";
import styled from "./Cart.module.css";

const Cart = () => {
  const { user } = useSelector((item) => item.user);
  const { numItemsInCart } = useSelector((item) => item.cart);

  if (numItemsInCart < 1) {
    return <SectionTitle text=" Sorry, currently items is not in cart" />;
  }

  return (
    <Box>
      <SectionTitle text="Shopping cart" />
      <Grid container>
        <Grid item lg={8}>
          <CartItemsList />
        </Grid>

        <Grid item lg={4}>
          <CartTotals />
          {user ? (
            <Box className={styled.mainBoxCart}>
              <Link href="/checkout">Proceed to pay</Link>
            </Box>
          ) : (
            <Box className={styled.mainBoxCart}>
              <Link href="/login">Login</Link>
            </Box>
          )}
        </Grid>
      </Grid>
    </Box>
  );
};

export default Cart;
