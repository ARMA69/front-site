import React, { useEffect, useContext } from "react";
import { myContext } from "../../context/context";
import styles from "./Home.module.sass";

const Home = () => {
  const { fetchHomePageRandomMeal, randomMeal } = useContext(myContext);

  useEffect(() => {
    fetchHomePageRandomMeal();
  }, [fetchHomePageRandomMeal]);

  return (
    <>
      <div className={styles.home}>
        <div>
          {randomMeal.map((meal) => (
            <div key={meal.idMeal} className={styles.randombox}>
              <h1 style={{ paddingBottom: "20px" }}>{meal.strMeal}</h1>
              <div className={styles.randomcontrols}>
                <img src={meal.strMealThumb} alt=" meal" /> <br />
                <button
                  className={styles.generatebtn}
                  onClick={fetchHomePageRandomMeal}
                >
                  Generate Another Meal
                </button>
              </div>
              <div className={styles.randominstructions}>
                <h4>Instructions</h4>
                <p>{meal.strInstructions}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Home;
