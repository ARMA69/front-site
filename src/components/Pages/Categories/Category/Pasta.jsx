import React, { useContext, useEffect,useState } from "react";
import { myContext } from "../../../context/context";
import Square from "../../../Square/Square";
import CategoryMapItem from "./CategoryMapItem/CategoryMapItem";
import styles from "./category.module.sass";

const Pasta = () => {
  const { fetchPasta, categoryPasta,  mealId, fetchMealId,clickShowHandler, open } = useContext(myContext);
  
  const [id, setId] = useState('52772')
  
  const clickOpenHandler = (event) => {
    setId(event.target.id)
    return clickShowHandler();
  };
  
  useEffect(() => {
    fetchPasta();
  }, []);

  useEffect(() => {
    fetchMealId(id);
  }, [id]);

  return (
    <>
      <div className={styles.category}>
        <h1>Pasta</h1>
        <div className={styles.grid}>
          {categoryPasta.map((meal) => ( <CategoryMapItem key={meal.idMeal} meal={meal} clickOpenHandler={clickOpenHandler}/>))}
        </div>
        {open &&  <div >{mealId.map((meal)=> (
        <Square key={meal.idMeal} meal={meal}/>
      ))}</div>}
      </div>
    </>
  );
};

export default Pasta;
