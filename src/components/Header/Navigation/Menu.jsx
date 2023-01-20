import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./Menu.module.sass";
const Menu = () => {
  return (
    <nav className={styles.menu}>
      <ul className={styles.content}>
        <li>
          <NavLink to=".">Home </NavLink>
        </li>
        <li>
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
        </li>
      </ul>
    </nav>
  );
};

export default Menu;
