import React from "react";
import logo from "../assets/logo.png"; // Adjust the path based on your project structure

const Logo = () => {
  return (
    <img 
      src={logo} 
      alt="GrowWise AI Logo" 
      style={{ height: "80px", margin: "0 30px" , cursor: "pointer"}} 
    />
  );
};

export default Logo;