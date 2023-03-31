import React from "react";
import styles from "./Footer.module.sass";
import { RxGithubLogo } from "react-icons/rx";

const Footer = () => {
  return (
    <>
      <div className={styles.footer}>
        <h3>
          <a
            href="https://github.com/ARMA69/front-site"
            target="_blank"
            rel="noreferrer"
          >
            <RxGithubLogo /> GitHub Repositories
          </a>
        </h3>
      </div>
    </>
  );
};

export default Footer;
