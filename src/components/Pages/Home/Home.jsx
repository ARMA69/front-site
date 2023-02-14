import React, { useState, useEffect, useContext } from "react";
import { myContext } from "../../context/context";
import styles from "./Home.module.sass";
import { AiOutlineCloseCircle } from "react-icons/ai";

const Home = () => {
  const { fetchHomePageRandomMeal, randomMeal } = useContext(myContext);

  useEffect(() => {
    fetchHomePageRandomMeal();
  }, [fetchHomePageRandomMeal]);

  const [open, setOpen] = useState(false);

  const clickShowHandler = () => {
    return setOpen(!open);
  };

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
                  alt=" meal"
                />
                <br />
                <button
                  className={styles.generatebtn}
                  onClick={fetchHomePageRandomMeal}
                >
                  Generate Another Meal
                </button>
              </div>

              {open && (
                <div className={styles.square}>
                  <h1 style={{ margin: "10px" }}>
                    {" "}
                    {meal.strMeal}
                    <span style={{ float: "right", cursor: "pointer" }}>
                      <AiOutlineCloseCircle onClick={clickShowHandler} />
                    </span>
                  </h1>
                  <h3 style={{ margin: "20px" }}>
                    <span style={{ marginRight: "50px" }}>
                      Country: {meal.strArea}
                    </span>{" "}
                    Category: {meal.strCategory}
                  </h3>
                  <img
                    style={{ width: "250px" }}
                    src={meal.strMealThumb}
                    alt=" meal"
                  />
                  <p style={{ fontSize: "19px", marginBottom: "15px" }}>
                    {" "}
                    Instructions:
                  </p>{" "}
                  <p> {meal.strInstructions}</p>
                  <div style={{ marginTop: "15px" }}>
                    <a
                      className={styles.linkbtn}
                      href={`${meal.strYoutube}`}
                      target="_blank"
                      rel="noreferrer"
                    >
                      Watch Video on YouTube
                    </a>{" "}
                    <br />
                    <a
                      className={styles.linkbtn}
                      href={`${meal.strSource}`}
                      target="_blank"
                      rel="noreferrer"
                    >
                      Recept more info
                    </a>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Home;
