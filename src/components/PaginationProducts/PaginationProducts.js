import React from "react";
import styled from "./PaginationProducts.module.css";
import { useLoaderData } from "react-router-dom";
const PaginationProducts = () => {
  const { meta } = useLoaderData();

  return <div>Pagination</div>;
};

export default PaginationProducts;
