import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./Menu.module.sass";
const Menu = () => {
  return (
    <nav className={styles.menu}>
      <NavLink to=".">Home </NavLink>
      <NavLink to="electro">Electro </NavLink>
      <NavLink to="animalproducts">Animal Products </NavLink>
      <NavLink to="articlesforthehome">Articles For The Home </NavLink>
      <NavLink to="frozenfood">Frozen Food </NavLink>
    </nav>
  );
};

export default Menu;
