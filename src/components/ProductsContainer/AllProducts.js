import React from "react";
import { Box, Grid } from "@mui/material";
import FeaturedItemLink from "../FeaturedThreeItems/FeaturedItemLink";
import { useLoaderData } from "react-router-dom";

const AllProducts = () => {
  const { products } = useLoaderData();

  return (
    <>
      <Box sx={{ marginTop: "2rem" }}>
        <Grid container spacing={8}>
          {products.map((item) => (
            <FeaturedItemLink key={item.id} {...item} />
          ))}
        </Grid>
      </Box>
    </>
  );
};

export default AllProducts;
