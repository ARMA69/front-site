import React from "react";
import styles from "./Header.module.sass";

import logo from "./Watercolor-Feather-PNG-Image.png";
import { SiRoamresearch } from "react-icons/si";
import Navbar from "./Navbar/Navbar";
import UserMenu from "./UserPanel/UserMenu";
import SettingsHeader from "./SettingsHeader/SettingsHeader";
import { Link } from "react-router-dom";

const Header = (props) => {
  const switchTheme = props.switchTheme;
  return (
    <div className={styles.headerContainer}>
      <div className={styles.leftheader}>
        <Navbar />

        <Link to=".">
          <img
            className={styles.logoHeader}
            src={logo}
            alt="Logo"
            title="Home page"
          />
        </Link>
      </div>
      <div className={styles.searchBox}>
        <input
          type="search"
          className={styles.searchHeader}
          placeholder="   Search"
        />
        <SiRoamresearch className={styles.searchImg} title="Search" />
      </div>

      <div className={styles.rightDiv}>
        <UserMenu />
        <SettingsHeader switchTheme={switchTheme} />
      </div>
    </div>
  );
};

export default Header;
