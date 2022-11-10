import React from "react";
import { Link } from "react-router-dom";
import styles from "./HomePage.module.css";

const HomePage = () => {
  return (
    <div className={styles.container}>
      <Link to={"/firstmenu"} className={styles.box}>
        <h1>First Menu</h1>
        <ul>
          <li>
            Here you have your contact details like name and phone number.
          </li>
          <li>Details will be shown in the form of list.</li>
          <li>User can move to another page by clicking on their details.</li>
        </ul>
      </Link>
      <Link to={"/secondmenu"} className={styles.box}>
        <h1>Second Menu</h1>
        <ul>
          <li>Here you can see all the list of messages sent.</li>
          <li>
            You can also search your messages only, just enter your phone number
            in input box and click on search button.
          </li>
          <li>
            After search, all your sent messages will be shown in the form of
            list.
          </li>
        </ul>
      </Link>
    </div>
  );
};

export default HomePage;
