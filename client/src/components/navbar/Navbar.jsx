import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./Navbar.module.css";
import Theme from "../Theme";

const Navbar = () => {
  return (
    <div className={styles.navbar_container}>
      <NavLink
        className={({ isActive }) =>
          isActive ? styles.activeLink : styles.link
        }
        to={"/"}
      >
        Home
      </NavLink>
      <NavLink
        className={({ isActive }) =>
          isActive ? styles.activeLink : styles.link
        }
        to={"/firstmenu"}
      >
        First Menu
      </NavLink>
      <NavLink
        className={({ isActive }) =>
          isActive ? styles.activeLink : styles.link
        }
        to={"/secondmenu"}
      >
        Second Menu
      </NavLink>
      <Theme />
    </div>
  );
};

export default Navbar;
