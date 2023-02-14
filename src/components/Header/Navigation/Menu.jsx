import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./Menu.module.sass";
const Menu = ({ clickToggle }) => {
  return (
    <nav className={styles.menu}>
      <ul className={styles.content}>
        <li>
          <NavLink to="front-website" onClick={clickToggle}>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="front-website/wrong" onClick={clickToggle}>
            Not Found{" "}
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Menu;
