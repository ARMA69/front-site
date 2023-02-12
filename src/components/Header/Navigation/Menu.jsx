import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./Menu.module.sass";
const Menu = ({ clickToggle }) => {
  return (
    <nav className={styles.menu}>
      <ul className={styles.content}>
        <li>
          <NavLink to="." onClick={clickToggle}>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="meals" onClick={clickToggle}>
            Meals
          </NavLink>
        </li>
        <li>
          <NavLink to="recipes" onClick={clickToggle}>
            Recipes
          </NavLink>
        </li>
        <li>
          <NavLink to="products" onClick={clickToggle}>
            Products
          </NavLink>
        </li>
        <li>
          <NavLink to="wrong" onClick={clickToggle}>
            Not Found{" "}
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Menu;
