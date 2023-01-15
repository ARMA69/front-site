import React, { useState } from "react";
import { VscListFlat } from "react-icons/vsc";
import styles from "./Navbar.module.sass";
const Navbar = () => {
  const [menuActive, setMenuActive] = useState(false);

  const clickToggle = () => {
    return setMenuActive(!menuActive);
  };

  return (
    <>
      <div className={styles.navbar}>
        <VscListFlat className={styles.listflat} onClick={clickToggle} />
        {menuActive && (
          <div className={styles.menu} onClick={() => setMenuActive(false)}>
            <div className={styles.blur}>
              <ul
                className={styles.menucontent}
                onClick={(e) => e.stopPropagation()}
              >
                <li>Home</li>
                <li>Work</li>
                <li>Relax</li>
                <li>Doom</li>
                <li>Ultimate</li>
              </ul>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Navbar;
