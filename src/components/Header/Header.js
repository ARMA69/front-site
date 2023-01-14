import React from "react";
import styles from "./Header.module.css";
import { VscListFlat } from "react-icons/vsc";
import { VscGear } from "react-icons/vsc";
import { VscAccount } from "react-icons/vsc";
import logo from "./Watercolor-Feather-PNG-Image.png";
import { SiRoamresearch } from "react-icons/si";

const Header = () => {
  return (
    <div className={styles.headerContainer}>
      <div>
        <VscListFlat className={styles.listFlat} />
        <a href="#">
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
        <button href="#" className={styles.loginHeader}>
          <VscAccount title="Login In" />
        </button>

        <VscGear title="Settings" className={styles.headerSettings} />
      </div>
    </div>
  );
};

export default Header;
