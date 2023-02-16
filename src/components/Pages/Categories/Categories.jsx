import React, { useContext, useEffect } from "react";
import styles from "./Categories.module.sass";
import { myContext } from "../../context/context";
import { Link } from "react-router-dom";

const Categories = () => {
  const { fetchCategories, categoriesMeal } = useContext(myContext);

  useEffect(() => {
    fetchCategories();
  }, []);

  categoriesMeal.splice(12, 2);

  return (
    <>
      <div className={styles.categories}>
        <h1>Categories</h1>
        <div className={styles.grid}>
          {categoriesMeal.map((category) => (
            <div>
              <Link to={category.strCategory}>
                <h2 style={{ textAlign: "center" }}>{category.strCategory}</h2>
                <img src={category.strCategoryThumb} />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Categories;
