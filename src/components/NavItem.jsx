import React from "react";
import { Link } from "react-router-dom";

const NavItem = ({ to, children }) => {
  return (
    <Link to={to} style={{ margin: "0 30px", textDecoration: "none", color: "#333", fontSize: "24px" }}>
      {children}
    </Link>
  );
};

export default NavItem;
