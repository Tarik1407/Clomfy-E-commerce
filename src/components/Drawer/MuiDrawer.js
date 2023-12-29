import React, { useState } from "react";
import { Box, IconButton, Drawer, Hidden } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { navbarItems } from "../../helpers/helpers";
import NavBarItemResponsive from "../Navbar/NavbarItemResponsive";

const MuiDrawer = () => {
  const [isDrawOpen, setIsDrawOpen] = useState(false);
  return (
    <>
      <Hidden lgUp>
        <IconButton
          size="large"
          edge="start"
          color="inherit"
          aria-label="menu"
          onClick={() => setIsDrawOpen(true)}
        >
          <MenuIcon />
        </IconButton>
      </Hidden>
      <Drawer
        anchor="left"
        open={isDrawOpen}
        onClose={() => setIsDrawOpen(false)}
      >
        <Box
          role="presentation"
          onClick={() => setIsDrawOpen(false)}
          onKeyDown={() => setIsDrawOpen(false)}
        >
          <Box sx={{ padding: "1rem", textAlign: "center" }}>
            {navbarItems.map((item) => (
              <NavBarItemResponsive key={item.id} {...item} />
            ))}
            <hr />
          </Box>
        </Box>
      </Drawer>
    </>
  );
};

export default MuiDrawer;
