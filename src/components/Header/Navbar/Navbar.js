import React, { useState } from "react";
import { VscListFlat } from "react-icons/vsc";
import Menu from "../Navigation/Menu";
import styles from "./Navbar.module.sass";

const Navbar = () => {
  const [menuActive, setMenuActive] = useState(false);

  const clickToggle = () => {
    return setMenuActive(!menuActive);
  };

  return (
    <>
      <div>
        <VscListFlat className={styles.listflat} onClick={clickToggle} />
        {menuActive && (
          <div
            className={styles.menu}
            onClick={() => setMenuActive(!menuActive)}
          >
            <div className={styles.blur}>
              <ul
                className={styles.menucontent}
                onClick={(e) => e.stopPropagation()}
              >
                <li>
                  <Menu clickToggle={clickToggle} />
                </li>
              </ul>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Navbar;
