import React from "react";
import { Box } from "@mui/material";
import { Outlet, useNavigation } from "react-router-dom";
import { Navbar, HeaderLoginLayout } from "../../components";
import { LoadingSpinner } from "../../components";
import styled from "./HomeLayout.module.css";
const HomeLayout = () => {
  const navigation = useNavigation();

  return (
    <>
      <Box>
        <HeaderLoginLayout />
        <Navbar />

        {navigation.state === "loading" ? (
          <Box className={styled.boxLoading}>
            <LoadingSpinner />
          </Box>
        ) : (
          <Box className={styled.outletBox}>
            <Outlet />
          </Box>
        )}
      </Box>
    </>
  );
};

export default HomeLayout;
