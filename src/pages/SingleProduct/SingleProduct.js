import React from "react";
import { Box, Typography } from "@mui/material";
import { useParams } from "react-router-dom";

const SingleProduct = () => {
  const id = useParams();

  return (
    <Box>
      <Typography variant="p1">Single Product Page</Typography>
    </Box>
  );
};

export default SingleProduct;
