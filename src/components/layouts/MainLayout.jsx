import React from "react";
import { Outlet } from "react-router-dom";
import Menu from "../Header/Navigation/Menu";

const MainLayout = () => {
  return (
    <>
      <Outlet />
    </>
  );
};

export default MainLayout;
