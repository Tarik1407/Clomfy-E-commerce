import React from "react";
import styled from "./CheckoutFormPage.module.css";
import { Box, Button, Typography } from "@mui/material";
import { FormInput } from "../FormInput";
const CheckoutFormPage = () => {
  return (
    <Box className={styled.checkoutFormPageMainBox}>
      <Typography variant="body1">Shipping information</Typography>
      <FormInput
        label="First name"
        type="name"
        variant="outlined"
        name="firstName"
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
        <Button variant="contained" color="primary">
          Place your order
        </Button>
      </Box>
    </Box>
  );
};

export default CheckoutFormPage;
