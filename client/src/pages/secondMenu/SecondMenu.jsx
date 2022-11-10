import {
  Button,
  FormControl,
  FormErrorMessage,
  FormHelperText,
  FormLabel,
  Input,
  InputGroup,
  InputRightElement,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import styles from "./SecondMenu.module.css";
import { useDispatch, useSelector } from "react-redux";
import { getCompleteList, getList } from "../../store/messageList/list.actions";
import MessageList from "../../components/MessageList";
import Pagination from "../../components/Pagination";

const SecondMenu = () => {
  const [number, setNumber] = useState("");
  const dispatch = useDispatch();
  const { length } = useSelector((state) => state);
  const [page, setPage] = useState(0);

  let isError = false;

  const handleSearch = () => {
    if (!isError) {
      // if error is false
      // setShow(false);
      setPage(0);
      dispatch(getList(number, page));
    }
  };

  const changePage = (current) => {
    setPage(current);
  };
  useEffect(() => {
    // this useEffect will trigger render on every value change of page
    if (number.length === 0) {
      // if input box is empty then using dispatch for getCompleteList function on page value change
      dispatch(getCompleteList(page));
    }
    if (!isError) {
      // if error is false then using dispatch for getList function on page value change
      dispatch(getList(number, page));
    }
  }, [page]);
  return (
    <div className={styles.container}>
      <div className={styles.input_container}>
        <FormControl
          isInvalid={
            number.length === 10 ? (isError = false) : (isError = true)
          }
        >
          <FormLabel className={styles.labelText}>
            Search Messages By Number
          </FormLabel>
          <InputGroup>
            <Input
              focusBorderColor={isError ? "red" : null}
              type="number"
              value={number}
              placeholder="Enter 10 digit phone number"
              onChange={(e) => setNumber(e.target.value)}
            />
            <InputRightElement width={"auto"}>
              <Button
                className={styles._button}
                colorScheme={isError ? "red" : "blue"}
                onClick={handleSearch}
              >
                Search
              </Button>
            </InputRightElement>
          </InputGroup>
          {!isError ? (
            <FormHelperText>{""}</FormHelperText>
          ) : (
            <FormErrorMessage className={styles.errorText}>
              * Enter 10 digit number.
            </FormErrorMessage>
          )}
        </FormControl>
      </div>
      <MessageList />
      <Pagination current={page} length={length} changePage={changePage} />
    </div>
  );
};

export default SecondMenu;
