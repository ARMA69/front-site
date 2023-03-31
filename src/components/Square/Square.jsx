import React, { useContext } from "react";
import styles from "./Square.module.sass";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { myContext } from "../context/context";

const Square = ({ meal }) => {
  const { clickShowHandler } = useContext(myContext);

  return (
    <>
      <div className={styles.square}>
        <h1 style={{ margin: "10px" }}>
          {meal.strMeal}
          <span style={{ float: "right", cursor: "pointer" }}>
            <AiOutlineCloseCircle onClick={clickShowHandler} />
          </span>
        </h1>
        <h3 style={{ margin: "20px" }}>
          <span style={{ marginRight: "50px" }}>Country: {meal.strArea}</span>{" "}
          Category: {meal.strCategory}
        </h3>
        <img style={{ width: "250px" }} src={meal.strMealThumb} alt=" meal" />
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
    </>
  );
};

export default Square;
