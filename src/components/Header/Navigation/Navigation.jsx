import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AnimalProducts from "../../Pages/AnimalProducts";
import ArticlesForTheHome from "../../Pages/ArticlesForTheHome";
import Electro from "../../Pages/Electro";
import NotFound from "../../Pages/NotFound";
import Home from "../../Pages/Home";
import MainLayout from "../../layouts/MainLayout";

const Navigation = () => {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path="animalproducts" element={<AnimalProducts />} />
        <Route path="articlesforthehome" element={<ArticlesForTheHome />} />
        <Route path="electro" element={<Electro />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
};

export default Navigation;
