import React, { useState } from "react";
import AllProducts from "./AllProducts";
import AllProductsList from "./AllProductsList";
import MenuIcon from "@mui/icons-material/Menu";
import ScatterPlotIcon from "@mui/icons-material/ScatterPlot";
import styled from "./AllProducts.module.css";
import { Box, Button, Typography } from "@mui/material";
import ProductNotFound from "../ProductsNotFound/ProductNotFound";
import { useLoaderData } from "react-router-dom";

const ProductsContainer = () => {
  const { meta } = useLoaderData();
  const [gridView, setGridView] = useState(false);
  const totalProducts = meta.pagination.total;

  if (totalProducts < 1) {
    return <ProductNotFound />;
  }

  return (
    <>
      <Box className={styled.allProductsListHeader}>
        <Typography variant="body1">
          {totalProducts} product{totalProducts > 1 && "s"}
        </Typography>
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
