import { useState } from "react";
import FastSingUp from "./FastSingUp";
import AdvanceSingUp from "./AdvanceSingUp";
import styles from "./SingUp.module.sass";

const SingUp = () => {
  const [view, setView] = useState(true);
  return (
    <div className={styles.singup}>
      <nav>
        <h3
          onClick={() => setView(true)}
          style={{ color: view === true ? "#8ecae6" : "" }}
        >
          Fast
        </h3>
        <h3
          onClick={() => setView(false)}
          style={{ color: view === false ? "#8ecae6" : "" }}
        >
          Advanced
        </h3>
      </nav>
      {view === true ? <FastSingUp /> : <AdvanceSingUp />}
    </div>
  );
};

export default SingUp;
