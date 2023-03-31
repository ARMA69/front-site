import React, { useContext, useEffect, useState  } from "react";
import { myContext } from "../../../context/context";
import styles from "./category.module.sass";
import Square from "../../../Square/Square";



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
          {categoryBeef.map((meal) => (
          <div key={meal.idMeal}>
            <div  value={meal.idMeal} id={meal.idMeal} onClick={clickOpenHandler}>
              <h3 style={{ fontSize: "25px", marginBottom: "25px" }} id={meal.idMeal}>{meal.strMeal}</h3>
              <img src={meal.strMealThumb} alt={meal.strMeal} id={meal.idMeal}/>
            </div>
           
          </div>
          ))}

          {open &&  <div>{mealId.map((meal)=> (
            <Square meal={meal}/>
          )
          )}</div>
          
         }
           
          
        </div>
      </div>
    </>
  );
};

export default Beef;
