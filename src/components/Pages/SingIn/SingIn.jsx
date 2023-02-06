import React from "react";
import styles from "./SinglIn.module.sass";

const SingIn = () => {
  return (
    <>
      <div className={styles.singin}>
        <h1>Log in to Project Banana</h1>
        <form className={styles.form}>
          <lable>
            <span> Username </span>
            <br /> <input type="text" className={styles.input} />
          </lable>
          <lable>
            <span>Password </span> <br />
            <input type="password" className={styles.input} />
          </lable>
          <lable>
            <input type="checkbox" /> I have been here
          </lable>
          <button className={styles.button}>Log In</button>
        </form>
      </div>
    </>
  );
};

export default SingIn;
