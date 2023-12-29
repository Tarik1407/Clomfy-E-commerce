import React from "react";
import { Box } from "@mui/material";
import { Outlet } from "react-router-dom";
import { Navbar, HeaderLoginLayout } from "../../components";
const HomeLayout = () => {
  return (
    <Box>
      <HeaderLoginLayout />
      <Navbar />
      <Box sx={{ width: "80%", margin: "auto" }}>
        <Outlet />
      </Box>
    </Box>
  );
};

export default HomeLayout;
