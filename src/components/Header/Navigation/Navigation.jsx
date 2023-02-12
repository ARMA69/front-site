import React from "react";
import { Route, Routes } from "react-router-dom";
import AnimalProducts from "../../Pages/Products/AnimalProducts/AnimalProducts";
import ArticlesForTheHome from "../../Pages/Products/ArticlesForTheHome/ArticlesForTheHome";
import Electro from "../../Pages/Products/Electro/Electro";
import NotFound from "../../Pages/NotFound";
import Products from "../../Pages/Products/Products";
import Home from "../../Pages/Home/Home";
import MainLayout from "../../layouts/MainLayout";
import SingUp from "../../Pages/SingUp/SingUp";
import SingIn from "../../Pages/SingIn/SingIn";
import MenuForWeek from "../../Pages/MenuForWeek/MenuForWeek";

const Navigation = () => {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path="meals" element={<MenuForWeek />} />
        <Route path="products" element={<Products />} />
        <Route path="animalproducts" element={<AnimalProducts />} />
        <Route path="articlesforthehome" element={<ArticlesForTheHome />} />
        <Route path="electro" element={<Electro />} />
        <Route path="singin" element={<SingIn />} />
        <Route path="singup" element={<SingUp />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
};

export default Navigation;
