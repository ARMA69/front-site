import React from 'react'

const CategoryMapItem = ({meal, clickOpenHandler}) => {


  return (
    <div key={meal.idMeal}>
    <div  value={meal.idMeal} id={meal.idMeal} onClick={clickOpenHandler}>
      <h3 style={{ fontSize: "25px", marginBottom: "25px" }} id={meal.idMeal}>{meal.strMeal}</h3>
      <img src={meal.strMealThumb} alt={meal.strMeal} id={meal.idMeal}/>
    </div>
   
  </div>
  )
}

export default CategoryMapItem