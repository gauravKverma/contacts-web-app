import React from "react";
import { Outlet } from "react-router-dom";

const WithoutNavbar = () => {
  // to show pages without navbar
  return (
    <div>
      <Outlet />
    </div>
  );
};

export default WithoutNavbar;
