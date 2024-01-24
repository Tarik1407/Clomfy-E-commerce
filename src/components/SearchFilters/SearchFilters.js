import React from "react";
import { useLoaderData } from "react-router-dom";
import styled from "./SearchFilters.module.css";
const SearchFilters = () => {
  const { products } = useLoaderData();

  return <div>Filters</div>;
};

export default SearchFilters;
