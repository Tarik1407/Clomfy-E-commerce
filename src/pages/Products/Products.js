import React from "react";
import { Box } from "@mui/material";
import { SearchFilters, PaginationProducts } from "../../components/index";
import { customFetch } from "../../utilis";
import ProductsContainer from "../../components/ProductsContainer/ProductsContainer";

export const loaderAllProducts = async ({ request }) => {
  const params = Object.fromEntries([
    ...new URL(request.url).searchParams.entries(),
  ]);

  const response = await customFetch("/products", {
    params,
  });
  const meta = response.data.meta;
  const products = response.data.data;
  return { products, meta, params };
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
