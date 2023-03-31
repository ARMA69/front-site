import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./Menu.module.sass";
const Menu = ({ clickToggle }) => {
  return (
    <nav className={styles.menu}>
      <ul className={styles.content}>
        <li>
          <NavLink to="front-website" end onClick={clickToggle}>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="front-website/categories" onClick={clickToggle}>
            Categories
          </NavLink>
        </li>
        <hr style={{ margin: "5px", width: "150px" }} />
        <li>
          <NavLink to="front-website/singin" onClick={clickToggle}>
            Login
          </NavLink>
        </li>
        <li>
          <NavLink to="front-website/singup" onClick={clickToggle}>
            Registration
          </NavLink>
        </li>
        <hr style={{ margin: "5px", width: "150px" }} />
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
