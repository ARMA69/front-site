import React, { useContext, useEffect } from "react";
import { myContext } from "../../../context/context";
import styles from "./category.module.sass";
const Pork = () => {
  const { fetchPork, categoryPork } = useContext(myContext);

  useEffect(() => {
    fetchPork();
  }, []);
  return (
    <>
      <div className={styles.category}>
        <h1>Pork</h1>
        <div className={styles.grid}>
          {categoryPork.map((meal) => (
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

export default Pork;
