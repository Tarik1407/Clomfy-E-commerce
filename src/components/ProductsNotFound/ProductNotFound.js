import { Box, Typography } from "@mui/material";
import styled from "./ProductNotFound.module.css";
import React from "react";

const ProductNotFound = () => {
  return (
    <Box className={styled.notFound}>
      <Typography variant="body1">
        Sorry, no products fnd, try again!
      </Typography>
    </Box>
  );
};

export default ProductNotFound;
