import React, { useContext, useEffect } from "react";
import { myContext } from "../../../context/context";
import styles from "./category.module.sass";
const Seafood = () => {
  const { fetchSeafood, categorySeafood } = useContext(myContext);

  useEffect(() => {
    fetchSeafood();
  }, []);
  return (
    <>
      <div className={styles.category}>
        <h1>Seafood</h1>
        <div className={styles.grid}>
          {categorySeafood.map((meal) => (
            <div key={meal.idMeal}>
              <h3 style={{ fontSize: "25px", marginBottom: "25px" }}>
                {meal.strMeal}
              </h3>
              <img src={meal.strMealThumb} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Seafood;
