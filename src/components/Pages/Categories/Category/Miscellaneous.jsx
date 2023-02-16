import React, { useContext, useEffect } from "react";
import { myContext } from "../../../context/context";
import styles from "./category.module.sass";
const Miscellaneous = () => {
  const { fetchMiscellaneous, categoryMiscellaneous } = useContext(myContext);

  useEffect(() => {
    fetchMiscellaneous();
  }, []);
  return (
    <>
      <div className={styles.category}>
        <h1>Miscellaneous</h1>
        <div className={styles.grid}>
          {categoryMiscellaneous.map((meal) => (
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

export default Miscellaneous;
