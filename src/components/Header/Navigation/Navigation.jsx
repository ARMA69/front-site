import React from "react";
import { Route, Routes } from "react-router-dom";
import NotFound from "../../Pages/NotFound";
import Home from "../../Pages/Home/Home";
import MainLayout from "../../layouts/MainLayout";
import SingUp from "../../Pages/SingUp/SingUp";
import SingIn from "../../Pages/SingIn/SingIn";
import MenuForWeek from "../../Pages/MenuForWeek/MenuForWeek";
import Categories from "../../Pages/Categories/Categories";
import Beef from "../../Pages/Categories/Category/Beef";
import Chicken from "../../Pages/Categories/Category/Chicken";
import Dessert from "../../Pages/Categories/Category/Dessert";
import Lamb from "../../Pages/Categories/Category/Lamb";
import Miscellaneous from "../../Pages/Categories/Category/Miscellaneous";
import Pasta from "../../Pages/Categories/Category/Pasta";
import Pork from "../../Pages/Categories/Category/Pork";
import Seafood from "../../Pages/Categories/Category/Seafood";
import Side from "../../Pages/Categories/Category/Side";
import Starter from "../../Pages/Categories/Category/Starter";
import Vegan from "../../Pages/Categories/Category/Vegan";
import Vegetarian from "../../Pages/Categories/Category/Vegetarian";

const Navigation = () => {
  return (
    <Routes>
      <Route path="front-website" element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path="meals" element={<MenuForWeek />} />
        <Route path="categories" element={<Categories />} />
        <Route path="categories/beef" element={<Beef />} />
        <Route path="categories/chicken" element={<Chicken />} />
        <Route path="categories/dessert" element={<Dessert />} />
        <Route path="categories/lamb" element={<Lamb />} />
        <Route path="categories/miscellaneous" element={<Miscellaneous />} />
        <Route path="categories/pasta" element={<Pasta />} />
        <Route path="categories/pork" element={<Pork />} />
        <Route path="categories/seafood" element={<Seafood />} />
        <Route path="categories/side" element={<Side />} />
        <Route path="categories/starter" element={<Starter />} />
        <Route path="categories/vegan" element={<Vegan />} />
        <Route path="categories/vegetarian" element={<Vegetarian />} />
        <Route path="singin" element={<SingIn />} />
        <Route path="singup" element={<SingUp />} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default Navigation;
