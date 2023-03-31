import React from "react";
import styles from "./Header.module.sass";
import SearchPlace from "./SearchPlace/SearchPlace";
import logo from "./Watercolor-Feather-PNG-Image.png";
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

        <Link to="/front-website">
          <img
            className={styles.logoHeader}
            src={logo}
            alt="Logo"
            title="Home page"
          />
        </Link>
      </div>
      <SearchPlace />

      <div className={styles.rightDiv}>
        <UserMenu />
        <SettingsHeader switchTheme={switchTheme} />
      </div>
    </div>
  );
};

export default Header;
