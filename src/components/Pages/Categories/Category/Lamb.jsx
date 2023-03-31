import React, { useContext, useEffect, useState } from "react";
import { myContext } from "../../../context/context";
import styles from "./category.module.sass";
import CategoryMapItem from "./CategoryMapItem/CategoryMapItem";
import Square from "../../../Square/Square";

const Lamb = () => {
  const { fetchLamb, categoryLamb, mealId, fetchMealId,clickShowHandler, open } = useContext(myContext);

  const [id, setId] = useState('52772')
  
  const clickOpenHandler = (event) => {
    setId(event.target.id)
    return clickShowHandler();
  };

  useEffect(() => {
    fetchLamb();
  }, []);

  useEffect(() => {
    fetchMealId(id);
  }, [id]);

  return (
    <>
      <div className={styles.category}>
        <h1>Lamb</h1>
        <div className={styles.grid}>
          {categoryLamb.map((meal) => ( <CategoryMapItem key={meal.idMeal} meal={meal} clickOpenHandler={clickOpenHandler}/>))}
        </div>
        {open &&  <div >{mealId.map((meal)=> (
        <Square key={meal.idMeal} meal={meal}/>
      ))}</div>}
      </div>
    </>
  );
};

export default Lamb;
