import React from "react";

import { Box, Grid } from "@mui/material";
import FeaturedItemLinkLists from "./FeaturedItemLinkLists";
import { useLoaderData } from "react-router-dom";

const AllProductsList = () => {
  const { products } = useLoaderData();

  return (
    <>
      <Box sx={{ marginTop: "2rem" }}>
        <Grid container spacing={8}>
          {products.map((item) => (
            <FeaturedItemLinkLists key={item.id} {...item} />
          ))}
        </Grid>
      </Box>
    </>
  );
};

export default AllProductsList;
