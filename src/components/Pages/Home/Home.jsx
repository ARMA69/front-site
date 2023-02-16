import React, { useEffect, useState, useContext } from "react";
import { myContext } from "../../context/context";
import styles from "./Home.module.sass";
import Square from "../../Square/Square";

const Home = () => {
  const { fetchHomePageRandomMeal, randomMeal, clickShowHandler, open } =
    useContext(myContext);

  useEffect(() => {
    fetchHomePageRandomMeal();
  }, []);

  return (
    <>
      <div className={styles.home}>
        <div>
          {randomMeal.map((meal) => (
            <div key={meal.idMeal} className={styles.randombox}>
              <div style={{ paddingBottom: "20px" }}>
                <h1 style={{ marginBottom: "5px" }}> Lucky shot dish </h1>
                <h2 style={{ cursor: "pointer" }} onClick={clickShowHandler}>
                  {meal.strMeal}
                </h2>
              </div>
              <div className={styles.randomcontrols}>
                <img
                  src={meal.strMealThumb}
                  onClick={clickShowHandler}
                  alt="meal"
                />
                <br />
                <button
                  className={styles.generatebtn}
                  onClick={fetchHomePageRandomMeal}
                >
                  Generate Another Meal
                </button>
              </div>

              {open && <Square meal={meal} />}
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Home;
