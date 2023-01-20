import React, { useState } from "react";
import styles from "./UserMenu.module.sass";
import { VscAccount } from "react-icons/vsc";
const UserMenu = () => {
  const [showActive, setShowActive] = useState(false);

  const userToggle = () => {
    return setShowActive(!showActive);
  };

  return (
    <>
      <div className={styles.vscaccount} onClick={userToggle}>
        <VscAccount title="Login In" />

        {showActive && (
          <div className={styles.menu}>
            <div className={styles.blur}>
              <ul className={styles.menucontent}>
                <li>Sing in</li>
                <li>Registration</li>
                <li>Profile</li>
                <li>My things</li>
                <li>My Views</li>
                <li>Log Out</li>
              </ul>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default UserMenu;
