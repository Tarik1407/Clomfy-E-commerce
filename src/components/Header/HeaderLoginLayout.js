import { Box } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import styled from "./HeaderLoginLayout.module.css";

const HeaderLoginLayout = () => {
  return (
    <Box className={styled.headerMainBox}>
      <Box
        sx={{
          textAlign: { xs: "center", md: "center", lg: "end" },
          marginRight: { md: "0rem", lg: "3rem" },
        }}
      >
        <Link className={styled.firstLinkLogin} to="/login">
          Sign in / Guest
        </Link>
        <Link to="/register">Create account</Link>
      </Box>
    </Box>
  );
};

export default HeaderLoginLayout;
