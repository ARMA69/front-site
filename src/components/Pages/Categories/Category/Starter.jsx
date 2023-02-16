import React, { useContext, useEffect } from "react";
import { myContext } from "../../../context/context";
import styles from "./category.module.sass";
const Starter = () => {
  const { fetchStarter, categoryStarter } = useContext(myContext);

  useEffect(() => {
    fetchStarter();
  }, []);

  return (
    <>
      <div className={styles.category}>
        <h1>Starter</h1>
        <div className={styles.grid}>
          {categoryStarter.map((meal) => (
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

export default Starter;
