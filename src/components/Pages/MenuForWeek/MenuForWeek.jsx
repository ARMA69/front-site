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
              <img src={meal.strMealThumb} alt="#" />
              <h4 style={{ fontSize: "19px" }}>{meal.strMeal}</h4>
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
