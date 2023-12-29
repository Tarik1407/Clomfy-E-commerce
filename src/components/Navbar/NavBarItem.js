import React from "react";
import { NavLink } from "react-router-dom";

const NavBarItem = ({ name, href }) => {
  return (
    <li>
      <NavLink to={href}>{name}</NavLink>
    </li>
  );
};

export default NavBarItem;
