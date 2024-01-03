import * as React from "react";
import { Typography } from "@mui/material";
import { Breadcrumbs as MuiBreadcrumbs } from "@mui/material";
import { Link } from "react-router-dom";
import styled from "./BreadCumbers.module.css";
const BreadCrumbsComponent = ({ homePage, middlePage, finalPage }) => {
  return (
    <MuiBreadcrumbs>
      <Link
        className={styled.linkCumbers}
        underline="hover"
        color="inherit"
        to="/"
      >
        {homePage}
      </Link>
      <Link
        className={styled.linkCumbers}
        underline="hover"
        color="inherit"
        to="/products"
      >
        {middlePage}
      </Link>
      <Typography sx={{ textTransform: "capitalize" }} color="text.primary">
        {finalPage}
      </Typography>
    </MuiBreadcrumbs>
  );
};

export default BreadCrumbsComponent;
