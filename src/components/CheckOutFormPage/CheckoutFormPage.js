import React from "react";
import styled from "./CheckoutFormPage.module.css";
import { Box, Button, Typography } from "@mui/material";
import { FormInput } from "../FormInput";
import { Form, redirect } from "react-router-dom";
import { toast } from "react-toastify";
import { customFetch, formatPrice } from "../../utilis";
import { clearCart } from "../../features/cart/cartSlice";

export const actionCheckoutOrders =
  (store) =>
  async ({ request }) => {
    const formData = await request.formData();
    const { name, address } = Object.fromEntries(formData);
    const user = store.getState().user.user;
    const { cartItems, orderTotal, numItemsInCart } = store.getState().cart;
    const info = {
      name,
      address,
      chargeTotal: orderTotal,
      orderTotal: formatPrice(orderTotal),
      cartItems,
      numItemsInCart,
    };
    try {
      const response = await customFetch.post(
        "/orders",
        { data: info },
        {
          headers: {
            Authorization: `Bearer ${user.token}`,
          },
        }
      );
      store.dispatch(clearCart());
      toast.success("order placed successfully");
      return redirect("/orders");
    } catch (error) {
      console.log(error);
      const errorMessage =
        error?.response?.data?.error?.message ||
        "Something went wrong, try again";
      toast.error(errorMessage);
      if (error?.response?.status === 401 || 403) return redirect("/login");
      return null;
    }
  };

const CheckoutFormPage = () => {
  return (
    <Form method="POST">
      <Box className={styled.checkoutFormPageMainBox}>
        <Typography variant="body1">Shipping information</Typography>
        <FormInput
          label="First name"
          type="name"
          variant="outlined"
          name="name"
          width={500}
        />
        <FormInput
          label="Address"
          type="address"
          variant="outlined"
          name="address"
          width={500}
        />
        <Box className={styled.boxButton}>
          <Button type="submit" variant="contained" color="primary">
            Place your order
          </Button>
        </Box>
      </Box>
    </Form>
  );
};

export default CheckoutFormPage;
