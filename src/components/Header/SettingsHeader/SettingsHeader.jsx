import React from "react";
import styles from "./SettingsHeader.module.sass";
import { VscGear } from "react-icons/vsc";

const SettingsHeader = () => {
  return (
    <>
      <div>
        <VscGear title="Settings" className={styles.vscgear} />
      </div>
    </>
  );
};

export default SettingsHeader;
