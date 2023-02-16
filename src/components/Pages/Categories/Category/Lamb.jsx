import React, { useContext, useEffect } from "react";
import { myContext } from "../../../context/context";
import styles from "./category.module.sass";

const Lamb = () => {
  const { fetchLamb, categoryLamb } = useContext(myContext);

  useEffect(() => {
    fetchLamb();
  }, []);

  return (
    <>
      <div className={styles.category}>
        <h1>Lamb</h1>
        <div className={styles.grid}>
          {categoryLamb.map((meal) => (
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

export default Lamb;
