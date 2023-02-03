import React from "react";
import styles from "./Products.module.sass";
const Products = () => {
  return (
    <>
      <h1>Hi</h1>
      <div className={styles.products}>
        <div>
          <h2>Animal Products</h2>
        </div>
        <div>
          <h2>Articles Fro the Home</h2>
        </div>
        <div>
          <h2>Chemicals Cleaning Agents</h2>
        </div>
        <div>
          <h2>Electro</h2>
        </div>
        <div>
          <h2>Food Producys and Snacks</h2>
        </div>
        <div>
          <h2>Frozen Food</h2>
        </div>
        <div>
          <h2>Fresh Products</h2>
        </div>
        <div>
          <h2>Hygiene and Cosmetics</h2>
        </div>
      </div>
    </>
  );
};

export default Products;
