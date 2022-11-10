import { Button } from "@chakra-ui/react";
import React from "react";
import styles from "./MessageList.module.css";

// pagination component which have two buttons prev and next to move to previous and next page respectively
// each page has only 5 list items for better experience
const Pagination = ({ current, length, changePage }) => {
  let last = Math.floor(+length / 5);
  return (
    <div className={styles.pagination}>
      <Button
        variant={"outline"}
        colorScheme={"blue"}
        disabled={current === 0}
        onClick={() => changePage(current - 1)}
      >
        Prev
      </Button>
      <Button
        variant={"outline"}
        colorScheme={"blue"}
        onClick={() => changePage(current + 1)}
        disabled={current === last}
      >
        Next
      </Button>
    </div>
  );
};

export default Pagination;
