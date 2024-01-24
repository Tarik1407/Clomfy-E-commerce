import React from "react";
import { Box } from "@mui/material";
import { SearchFilters, PaginationProducts } from "../../components/index";

import { customFetch } from "../../utilis";
import ProductsContainer from "../../components/ProductsContainer/ProductsContainer";

export const loaderAllProducts = async () => {
  const response = await customFetch("/products");
  const meta = response.data.meta;
  const products = response.data.data;
  return { products, meta };
};

const Products = () => {
  return (
    <Box>
      <SearchFilters />
      <ProductsContainer />
      <PaginationProducts />
    </Box>
  );
};

export default Products;
