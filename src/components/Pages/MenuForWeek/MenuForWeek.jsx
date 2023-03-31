import React, { useContext, useEffect, useState } from "react";
import { myContext } from "../../context/context";
import Square from "../../Square/Square";
import styles from "./MenuForWeek.module.sass";

const MenuForWeek = () => {
  const { fetchHomePageMeals, meals, mealId, fetchMealId,clickShowHandler, open } = useContext(myContext);
  
  const [id, setId] = useState('52772')
  
  const clickOpenHandler = (event) => {
    setId(event.target.id)
    return clickShowHandler();
  };

  useEffect(()=>{
    fetchHomePageMeals();
  }, [])

  useEffect(() => {
    fetchMealId(id);
  }, [id]);
  console.log(id)
  return (
    <>
    <div className={styles.categories}>
      <h1 >Meals </h1>
      <div className={styles.milsgrid}>
        {meals ? (
            meals.map((meal) => (
              <div key={meal.idMeal} className={styles.food}>
                  <h3  id={meal.idMeal} onClick={clickOpenHandler}>
                  {meal.strMeal}
                </h3>
                <img src={meal.strMealThumb} id={meal.idMeal} onClick={clickOpenHandler} alt="#" />
                        </div>
            ))
          ) : (
          <h2>No Meals Found! Try another word...</h2>
        )}
      
       {open &&  <div >{mealId.map((meal)=> (
        <Square key={meal.idMeal} meal={meal}/>
      ))}</div>} 
      </div>
    </div>
    </>
  );
};

export default MenuForWeek;
