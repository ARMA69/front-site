import React, { useContext } from "react";
import { myContext } from "../../context/context";
import styles from "./MenuForWeek.module.sass";

const MenuForWeek = () => {
  const { meals } = useContext(myContext);
  return (
    <>
      <h1 style={{ margin: "30px", textAlign: "center" }}>Meals </h1>
      <div className={styles.milsgrid}>
        {meals ? (
          meals.map((meal) => (
            <div key={meal.idMeal} className={styles.food}>
              <h3 style={{ fontSize: "25px", marginBottom: "25px" }}>
                {meal.strMeal}
              </h3>
              <img src={meal.strMealThumb} alt="#" />
            </div>
          ))
        ) : (
          <h2>No Meals Found! Try abother word...</h2>
        )}
      </div>
    </>
  );
};

export default MenuForWeek;
