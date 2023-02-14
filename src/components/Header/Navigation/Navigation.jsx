import React from "react";
import { Route, Routes } from "react-router-dom";
import NotFound from "../../Pages/NotFound";
import Home from "../../Pages/Home/Home";
import MainLayout from "../../layouts/MainLayout";
import SingUp from "../../Pages/SingUp/SingUp";
import SingIn from "../../Pages/SingIn/SingIn";
import MenuForWeek from "../../Pages/MenuForWeek/MenuForWeek";

const Navigation = () => {
  return (
    <Routes>
      <Route path="/front-website" element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path="meals" element={<MenuForWeek />} />
        <Route path="singin" element={<SingIn />} />
        <Route path="singup" element={<SingUp />} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default Navigation;
