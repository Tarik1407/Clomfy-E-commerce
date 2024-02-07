import React from "react";
import styled from "./PaginationProducts.module.css";
import { useLoaderData, useLocation, useNavigate } from "react-router-dom";
import { Box, Button } from "@mui/material";
const PaginationProducts = () => {
  const { meta } = useLoaderData();
  const navigate = useNavigate();

  const { pageCount, page } = meta.pagination;
  const { search, pathname } = useLocation();

  const pages = Array.from({ length: pageCount }, (_, index) => {
    return index + 1;
  });

  const handleChangePageNumber = (pageNumber) => {
    const searchParams = new URLSearchParams(search);
    searchParams.set("page", pageNumber);
    navigate(`${pathname}?${searchParams}`.toString());
  };

  if (pageCount < 2) return null;

  return (
    <Box>
      <Box className={styled.paginationBox}>
        <Button
          className={styled.paginationBtnPrev}
          onClick={() => {
            let prevPage = page - 1;
            if (prevPage < 1) prevPage = pageCount;
            handleChangePageNumber(prevPage);
          }}
          variant="contained"
        >
          Prev
        </Button>
        {pages.map((pageNumber) => (
          <Button
            onClick={() => handleChangePageNumber(pageNumber)}
            key={pageNumber}
            sx={{ marginRight: "5px" }}
            className={`${page === pageNumber ? styled.active : ""}`}
            variant="contained"
          >
            {pageNumber}
          </Button>
        ))}
        <Button
          onClick={() => {
            let nextPage = page + 1;
            if (nextPage > pageCount) nextPage = pageCount;
            handleChangePageNumber(nextPage);
          }}
          variant="contained"
        >
          Next
        </Button>
      </Box>
    </Box>
  );
};

export default PaginationProducts;
