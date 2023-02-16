import React, { useCallback, useState, createContext } from "react";
import axios from "axios";

export const myContext = createContext();

export const AppContext = ({ children }) => {
  const [meals, setMeals] = useState([]);
  const [randomMeal, setRandomMeal] = useState([]);
  const [categoriesMeal, setCategoriesMeal] = useState([]);

  /// category
  const [categoryBeef, setCategoryBeef] = useState([]);
  const [categoryChicken, setCategoryChicken] = useState([]);
  const [categoryDessert, setCategoryDessert] = useState([]);
  const [categoryLamb, setCategoryLamb] = useState([]);
  const [categoryMiscellaneous, setCategoryMiscellaneous] = useState([]);
  const [categoryPasta, setCategoryPasta] = useState([]);
  const [categoryPork, setCategoryPork] = useState([]);
  const [categorySeafood, setCategorySeafood] = useState([]);
  const [categorySide, setCategorySide] = useState([]);
  const [categoryStarter, setCategoryStarter] = useState([]);
  const [categoryVegan, setCategoryVegan] = useState([]);
  const [categoryVegetarian, setCategoryVegetarian] = useState([]);

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

  /// catecory

  const fetchBeef = useCallback(() => {
    axios
      .get(`https://www.themealdb.com/api/json/v1/1/filter.php?c=Beef`)
      .then((res) => {
        // console.log(res.data.meals);
        setCategoryBeef(res.data.meals);
      });
  }, []);
  const fetchChicken = useCallback(() => {
    axios
      .get(`https://www.themealdb.com/api/json/v1/1/filter.php?c=Chicken`)
      .then((res) => {
        // console.log(res.data.meals);
        setCategoryChicken(res.data.meals);
      });
  }, []);
  const fetchDessert = useCallback(() => {
    axios
      .get(`https://www.themealdb.com/api/json/v1/1/filter.php?c=Dessert`)
      .then((res) => {
        // console.log(res.data.meals);
        setCategoryDessert(res.data.meals);
      });
  }, []);
  const fetchLamb = useCallback(() => {
    axios
      .get(`https://www.themealdb.com/api/json/v1/1/filter.php?c=Lamb`)
      .then((res) => {
        // console.log(res.data.meals);
        setCategoryLamb(res.data.meals);
      });
  }, []);
  const fetchMiscellaneous = useCallback(() => {
    axios
      .get(`https://www.themealdb.com/api/json/v1/1/filter.php?c=Miscellaneous`)
      .then((res) => {
        // console.log(res.data.meals);
        setCategoryMiscellaneous(res.data.meals);
      });
  }, []);
  const fetchPasta = useCallback(() => {
    axios
      .get(`https://www.themealdb.com/api/json/v1/1/filter.php?c=Pasta`)
      .then((res) => {
        // console.log(res.data.meals);
        setCategoryPasta(res.data.meals);
      });
  }, []);
  const fetchPork = useCallback(() => {
    axios
      .get(`https://www.themealdb.com/api/json/v1/1/filter.php?c=Pork`)
      .then((res) => {
        // console.log(res.data.meals);
        setCategoryPork(res.data.meals);
      });
  }, []);
  const fetchSeafood = useCallback(() => {
    axios
      .get(`https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood`)
      .then((res) => {
        // console.log(res.data.meals);
        setCategorySeafood(res.data.meals);
      });
  }, []);
  const fetchSide = useCallback(() => {
    axios
      .get(`https://www.themealdb.com/api/json/v1/1/filter.php?c=Side`)
      .then((res) => {
        // console.log(res.data.meals);
        setCategorySide(res.data.meals);
      });
  }, []);
  const fetchStarter = useCallback(() => {
    axios
      .get(`https://www.themealdb.com/api/json/v1/1/filter.php?c=Starter`)
      .then((res) => {
        // console.log(res.data.meals);
        setCategoryStarter(res.data.meals);
      });
  }, []);
  const fetchVegetarian = useCallback(() => {
    axios
      .get(`https://www.themealdb.com/api/json/v1/1/filter.php?c=Vegetarian`)
      .then((res) => {
        // console.log(res.data.meals);
        setCategoryVegetarian(res.data.meals);
      });
  }, []);
  const fetchVegan = useCallback(() => {
    axios
      .get(`https://www.themealdb.com/api/json/v1/1/filter.php?c=Vegetarian`)
      .then((res) => {
        // console.log(res.data.meals);
        setCategoryVegan(res.data.meals);
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
        //// category
        fetchBeef,
        categoryBeef,
        fetchChicken,
        categoryChicken,
        fetchDessert,
        categoryDessert,
        fetchLamb,
        categoryLamb,
        fetchMiscellaneous,
        categoryMiscellaneous,
        fetchPasta,
        categoryPasta,
        fetchPork,
        categoryPork,
        fetchSeafood,
        categorySeafood,
        fetchSide,
        categorySide,
        fetchStarter,
        categoryStarter,
        fetchVegan,
        categoryVegan,
        fetchVegetarian,
        categoryVegetarian,
      }}
    >
      {children}
    </myContext.Provider>
  );
};
