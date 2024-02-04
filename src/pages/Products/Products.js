import React from "react";
import { Box } from "@mui/material";
import { SearchFilters, PaginationProducts } from "../../components/index";

import { customFetch } from "../../utilis";
import ProductsContainer from "../../components/ProductsContainer/ProductsContainer";

export const loaderAllProducts = async ({ request }) => {
  // Manual approch to take value
  // const searchValue = params.get("search");
  // const companyValue = params.get("company");
  // const categoryValue = params.get("category");
  // const sortValue = params.get("order");
  // const priceValue = params.get("price");
  // const shippingValue = params.get("shipping");
  // console.log(searchValue, "search");
  // console.log(companyValue, "companyValue");
  // console.log(categoryValue, "categoryValue");
  // console.log(sortValue, "sortValue");
  // console.log(priceValue, "priceValue");
  // console.log(shippingValue, "shippingValue");

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
