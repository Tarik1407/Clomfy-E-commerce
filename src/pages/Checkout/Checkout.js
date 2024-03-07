import React from "react";
import { Box, Grid } from "@mui/material";
import { CartTotals, SectionTitle, CheckoutFormPage } from "../../components";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";
import { redirect } from "react-router-dom";

export const loaderUserCheckout = (store) => () => {
  const user = store.getState().user.user;

  if (!user) {
    toast.warning("You must be loggin.");
    return redirect("/login");
  }

  return null;
};


const Checkout = () => {
  const { cartItems } = useSelector((item) => item.cart);

  if (cartItems.length < 1) {
    return <SectionTitle text="Your cary is empty" />;
  }
  return (
    <Box>
      <SectionTitle text="Place your order" />
      <Grid container>
        <Grid item lg={8}>
          <CheckoutFormPage />
        </Grid>
        <Grid item lg={4}>
          <CartTotals />
        </Grid>
      </Grid>
    </Box>
  );
};

export default Checkout;
