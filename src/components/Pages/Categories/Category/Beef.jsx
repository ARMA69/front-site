import React, { useContext, useEffect, useState  } from "react";
import { myContext } from "../../../context/context";
import styles from "./category.module.sass";
import { AiOutlineCloseCircle } from "react-icons/ai";



const Beef = () => {
  const { fetchBeef, categoryBeef, mealId, fetchMealId } = useContext(myContext);
 
  const [open, setOpen] = useState(false)
  const [id, setId] = useState('52772')
  
  const clickOpenHandler = (event) => {
    setId(event.target.id)
    return setOpen(!open);
  };
  useEffect(() => {
    fetchBeef();
         }, [fetchBeef]);
 
         useEffect(() => {
          fetchMealId(id);
        }, [id]);
 
  const beefInfo = mealId.map((info) =>
    <div key={info.idMeal}>
      <h1 style={{ margin: "10px" }}>
          {info.strMeal}
          <span style={{ float: "right", cursor: "pointer" }}>
            <AiOutlineCloseCircle  onClick={() => setOpen(!open)}/>
          </span>
        </h1>
        <h3 style={{ margin: "20px" }}>
          <span style={{ marginRight: "50px" }}>Country: {info.strArea}</span>{" "}
          Category: {info.strCategory}
        </h3>
        <img style={{ width: "250px" }} src={info.strMealThumb} alt=" meal" />
        <p style={{ fontSize: "19px", marginBottom: "15px" }}>
          {" "}
          Instructions:
        </p>{" "}
        <p> {info.strInstructions}</p>
        <div style={{ marginTop: "15px" }}>
          <a
            className={styles.linkbtn}
            href={`${info.strYoutube}`}
            target="_blank"
            rel="noreferrer"
          >
            Watch Video on YouTube
          </a>{" "}
          <br />
          <a
            className={styles.linkbtn}
            href={`${info.strSource}`}
            target="_blank"
            rel="noreferrer"
          >
            Recept more info
          </a>
        </div>

    
    </div>
  )
  
  return (
    <>
      <div className={styles.category}>
        <h1>Beef</h1>
        <div className={styles.grid}>
          {categoryBeef.map((meal) => (
          <div key={meal.idMeal}>
            <div  value={meal.idMeal} id={meal.idMeal} onClick={clickOpenHandler}>
              <h3 style={{ fontSize: "25px", marginBottom: "25px" }} id={meal.idMeal}>{meal.strMeal}</h3>
              <img src={meal.strMealThumb} alt={meal.strMeal} id={meal.idMeal}/>
            </div>
           
          </div>
          ))}

          {open && 
              <div className={styles.square}>
          
               <h2 >Good Idia</h2>
               <div className={styles.box}>
                 {beefInfo}
               </div>
              </div>
            }
           
          
        </div>
      </div>
    </>
  );
};

export default Beef;
