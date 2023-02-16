import React, { useCallback, useState, createContext } from "react";
import axios from "axios";

export const myContext = createContext();

export const AppContext = ({ children }) => {
  const [meals, setMeals] = useState([]);
  const [randomMeal, setRandomMeal] = useState([]);
  const [categoriesMeal, setCategoriesMeal] = useState([]);

  const fetchHomePageMeals = useCallback((search) => {
    axios
      .get(`https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`)
      .then((res) => {
        setMeals(res.data.meals);
      });
  }, []);

  const fetchHomePageRandomMeal = useCallback(() => {
    axios
      .get(`https://www.themealdb.com/api/json/v1/1/random.php`)
      .then((res) => {
        // console.log(res.data);
        setRandomMeal(res.data.meals);
      });
  }, []);

  const [open, setOpen] = useState(false);

  const clickShowHandler = () => {
    return setOpen(!open);
  };

  const fetchCategories = useCallback(() => {
    axios
      .get(`https://www.themealdb.com/api/json/v1/1/categories.php`)
      .then((res) => {
        // console.log(res.data.categories);
        setCategoriesMeal(res.data.categories);
      });
  }, []);

  return (
    <myContext.Provider
      value={{
        fetchHomePageMeals,
        meals,
        fetchHomePageRandomMeal,
        randomMeal,
        clickShowHandler,
        open,
        fetchCategories,
        categoriesMeal,
      }}
    >
      {children}
    </myContext.Provider>
  );
};
