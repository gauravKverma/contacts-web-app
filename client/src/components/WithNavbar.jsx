import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./navbar/Navbar";

const WithNavbar = () => {
  // to show pages with navbar
  return (
    <div>
      <Navbar />
      <Outlet />
    </div>
  );
};

export default WithNavbar;
