import React from "react";
import styles from "./Header.module.css";

import logo from "./Watercolor-Feather-PNG-Image.png";
import { SiRoamresearch } from "react-icons/si";
import Navbar from "./Navbar/Navbar";
import UserMenu from "./UserPanel/UserMenu";
import SettingsHeader from "./SettingsHeader/SettingsHeader";

const Header = () => {
  return (
    <div className={styles.headerContainer}>
      <div className={styles.leftheader}>
        <Navbar />

        <a href=".">
          <img
            className={styles.logoHeader}
            src={logo}
            alt="Logo"
            title="Home page"
          />
        </a>
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
        <SettingsHeader />
      </div>
    </div>
  );
};

export default Header;
