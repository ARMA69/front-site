import React, { useContext, useEffect, useState } from "react";
import { myContext } from "../../../context/context";
import styles from "./category.module.sass";
import Square from "../../../Square/Square";
import CategoryMapItem from "./CategoryMapItem/CategoryMapItem";

const Chicken = () => {
  const { fetchChicken, categoryChicken, mealId, fetchMealId,clickShowHandler, open } = useContext(myContext);
  
  const [id, setId] = useState('52772')
  
  const clickOpenHandler = (event) => {
    setId(event.target.id)
    return clickShowHandler();
  };

  useEffect(() => {
    fetchChicken();
  }, []);
  
  useEffect(() => {
    fetchMealId(id);
  }, [id]);

return (
<>
  <div className={styles.category}>
    <h1>Chicken</h1>
    <div className={styles.grid}>
    {categoryChicken.map((meal) => ( <CategoryMapItem key={meal.idMeal} meal={meal} clickOpenHandler={clickOpenHandler}/>))}
    </div>   
      {open &&  <div >{mealId.map((meal)=> (
        <Square key={meal.idMeal} meal={meal}/>
      ))}</div>}
           
  </div>
</>
);
};

export default Chicken;
