import { Text } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";
import { contactList } from "./contactList";
import styles from "./FirstMenu.module.css";

const FirstMenu = () => {
  return (
    <div className={styles.container}>
      {contactList.map((item) => (
        <Link key={item.id} to={`/contactinfo/${item.id}`}>
          <Text width={"100%"} className={styles.listItem}>
            {item.firstName} {item.lastName}
          </Text>
        </Link>
      ))}
    </div>
  );
};

export default FirstMenu;
