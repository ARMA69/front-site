import React, { useCallback, useState, createContext } from "react";
import axios from "axios";

export const myContext = createContext();

export const AppContext = ({ children }) => {
  const [meals, setMeals] = useState([]);
  const [randomMeal, setRandomMeal] = useState([]);

  const fetchHomePageMeals = useCallback((search) => {
    axios
      .get(`https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`)
      .then((res) => {
        setMeals(res.data.meals);
      });
  }, []);

  const fetchHomePageRandomMeal = useCallback(
    () =>
      axios
        .get(`https://www.themealdb.com/api/json/v1/1/random.php`)
        .then((res) => {
          setRandomMeal(res.data.meals);
        }),
    []
  );

  return (
    <myContext.Provider
      value={{ fetchHomePageMeals, meals, fetchHomePageRandomMeal, randomMeal }}
    >
      {children}
    </myContext.Provider>
  );
};
