import React, { useState } from "react";
import styles from "./SettingsHeader.module.sass";
import { VscGear } from "react-icons/vsc";
import { FaThemeisle } from "react-icons/fa";

const SettingsHeader = (props) => {
  const [showActive, setShowActive] = useState(false);
  const switchTheme = props.switchTheme;
  const settingsToggler = () => {
    return setShowActive(!showActive);
  };

  return (
    <>
      <div className={styles.vscgear}>
        <VscGear title="Settings" onClick={settingsToggler} />
        {showActive && (
          <div
            className={styles.menu}
            onClick={() => setShowActive(!showActive)}
          >
            <div className={styles.blur}>
              <ul
                className={styles.menucontent}
                onClick={(e) => e.stopPropagation()}
              >
                <li>
                  Dark and Light theme{" "}
                  <FaThemeisle className={styles.theme} onClick={switchTheme} />
                </li>
              </ul>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default SettingsHeader;
