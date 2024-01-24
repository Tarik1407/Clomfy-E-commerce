import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import FeaturedItemLink from "./FeaturedItemLink";
import { useLoaderData } from "react-router-dom";

const FeaturedItems = () => {
  const { products } = useLoaderData();


  return (
    <Box sx={{ marginTop: "2rem" }}>
      <Typography
        sx={{
          borderBottom: "5px solid #2076d2",
          fontSize: "2rem",
          color: "#323232",
        }}
        variant="body1"
      >
        Featured Products
      </Typography>
      <Grid container spacing={8}>
        {products.map((item) => (
          <FeaturedItemLink key={item.id} {...item} />
        ))}
      </Grid>
    </Box>
  );
};

export default FeaturedItems;
