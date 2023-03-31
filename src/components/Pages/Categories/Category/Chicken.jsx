import React, { useContext, useEffect } from "react";
import { myContext } from "../../../context/context";
import styles from "./category.module.sass";

const Chicken = () => {
  const { fetchChicken, categoryChicken } = useContext(myContext);

  useEffect(() => {
    fetchChicken();
  }, []);
  return (
    <>
      <div className={styles.category}>
        <h1>Chicken</h1>
        <div className={styles.grid}>
          {categoryChicken.map((meal) => (
            <div key={meal.idMeal}>
              <h3 style={{ fontSize: "25px", marginBottom: "25px" }}>
                {meal.strMeal}
              </h3>
              <img src={meal.strMealThumb} alt={meal.strMeal} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Chicken;
