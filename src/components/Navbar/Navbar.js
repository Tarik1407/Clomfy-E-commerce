import { Box, Tooltip } from "@mui/material";
import React from "react";
import styled from "./Navbar.module.css";
import { navbarItems } from "../../helpers/helpers";
import NavBarItem from "./NavBarItem";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import { Link } from "react-router-dom";
import MuiDrawer from "../Drawer/MuiDrawer";
import { useSelector } from "react-redux";
const Navbar = () => {
const { user } = useSelector((item) => item.user);
const { numItemsInCart } = useSelector((item) => item.cart);

return (
  <Box className={styled.navbarMainBox}>
    <Box sx={{ display: "flex", margin: { xs: "0rem 2rem" } }}>
      <Box
        sx={{ display: { xs: "none", md: "none", lg: "flex" } }}
        className={styled.leftLogo}
      >
        <Link to="/">C</Link>
      </Box>

      <MuiDrawer />
      <Box
        sx={{ display: { xs: "none", md: "none", lg: "flex" } }}
        className={styled.center}
      >
        <ul>
          {navbarItems.map((item) => {
            if (
              (item.href === "/orders") | (item.href === "/checkout") &&
              !user
            )
              return;
            return <NavBarItem key={item.id} {...item} />;
          })}
        </ul>
      </Box>
      <Box className={styled.end}>
        <Tooltip title="Cart">
          <Link className={styled.icon} to="/cart">
            <AddShoppingCartIcon />
            <span className={styled.amountNavbar}>{numItemsInCart}</span>
          </Link>
        </Tooltip>
      </Box>
    </Box>
  </Box>
);
};

export default Navbar;
