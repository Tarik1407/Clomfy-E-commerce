import React, { useState } from "react";
import AllProducts from "./AllProducts";
import AllProductsList from "./AllProductsList";
import MenuIcon from "@mui/icons-material/Menu";
import ScatterPlotIcon from "@mui/icons-material/ScatterPlot";
import styled from "./AllProducts.module.css";
import { Box, Button, Grid, Typography } from "@mui/material";
import { useLoaderData } from "react-router-dom";

const ProductsContainer = () => {
  const { products } = useLoaderData();
  const [gridView, setGridView] = useState(false);

  return (
    <>
      <Box className={styled.allProductsListHeader}>
        <Typography variant="body1">{products.length} products</Typography>
        <Box>
          <Button onClick={() => setGridView(false)}>
            <ScatterPlotIcon />
          </Button>
          <Button onClick={() => setGridView(true)}>
            <MenuIcon />
          </Button>
        </Box>
      </Box>
      {gridView ? <AllProductsList /> : <AllProducts />}
    </>
  );
};

export default ProductsContainer;
