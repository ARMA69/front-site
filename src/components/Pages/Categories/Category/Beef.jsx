import React, { useContext, useEffect, useState  } from "react";
import { myContext } from "../../../context/context";
import styles from "./category.module.sass";
import Square from "../../../Square/Square";
import CategoryMapItem from "./CategoryMapItem/CategoryMapItem";



const Beef = () => {
  const { fetchBeef, categoryBeef, mealId, fetchMealId,clickShowHandler, open } = useContext(myContext);
  
  const [id, setId] = useState('52772')

  const clickOpenHandler = (event) => {
    setId(event.target.id)
    return clickShowHandler();
  };


  
  useEffect(() => {
    fetchBeef();
         }, [fetchBeef]);
 
  useEffect(() => {
    fetchMealId(id);
        }, [id]);
          
  return (
    <>
      <div className={styles.category}>
        <h1>Beef</h1>
        <div className={styles.grid}>
          {categoryBeef.map((meal) => ( <CategoryMapItem key={meal.idMeal} meal={meal} clickOpenHandler={clickOpenHandler}/>))}

          {open &&  <div>{mealId.map((meal)=> (
            <Square key={meal.idMeal} meal={meal} />
          )
          )}</div>
          
         }
           
          
        </div>
      </div>
    </>
  );
};

export default Beef;
