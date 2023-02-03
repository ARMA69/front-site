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
          <NavLink to="menu" onClick={clickToggle}>
            Menu for week
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
        {/* <li>
          <NavLink to="electro">Electro </NavLink>
        </li>
        <li>
          <NavLink to="animalproducts">Animal Products </NavLink>
        </li>
        <li>
          <NavLink to="articlesforthehome">Articles For The Home </NavLink>
        </li>
        <li>
          <NavLink to="frozenfood">Frozen Food </NavLink>
        </li> */}
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
