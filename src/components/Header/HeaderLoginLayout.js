import { Box, Typography, Button } from "@mui/material";

import React from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "./HeaderLoginLayout.module.css";
import { useSelector, useDispatch } from "react-redux";
import { logoutUser } from "../../features/user/userSlice";
import { clearCart } from "../../features/cart/cartSlice";
const HeaderLoginLayout = () => {
  const dispatch = useDispatch();
  const { user } = useSelector((item) => item.user);
  const navigate = useNavigate();
  const logoutFunc = () => {
    navigate("/");
    dispatch(clearCart());
    dispatch(logoutUser());
  };

  return (
    <Box className={styled.headerMainBox}>
      {/* {User} */}
      {user ? (
        <Box className={styled.userExist}>
          <Typography variant="body1"> Hello, {user.username}</Typography>
          <Button onClick={() => logoutFunc()} variant="contained">
            Logout
          </Button>
        </Box>
      ) : (
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
      )}
    </Box>
  );
};

export default HeaderLoginLayout;
