import { Flex, Image, Text } from "@chakra-ui/react";
import React from "react";
import { useSelector } from "react-redux";
import styles from "./MessageList.module.css";

const MessageList = () => {
  const { loading, data, error } = useSelector((state) => state);
  // geting data,loading,error from state, Using redux
  return (
    <div className={styles.container}>
      {loading ? ( // loading indicator
        <Image
          width={"200px"}
          src="https://media0.giphy.com/media/y1ZBcOGOOtlpC/giphy.gif?cid=ecf05e47ml45gzyt1vzyc8elis66cahkg6ig9b7j7clvjax5&rid=giphy.gif&ct=g"
        />
      ) : null}
      {error ? ( // when error occured message will be shown
        <Text fontSize={"18px"} fontWeight={600}>
          Error : Number not found in Database
        </Text>
      ) : null}
      {data.map((item) => (
        <Flex
          key={item.timeStamp}
          className={styles.listItem}
          justify={"space-between"}
          width={"100%"}
        >
          <Text>
            {item.firstName} {item.lastName}
          </Text>
          <Text>
            {"Date & Time - "} {item.date} {item.time}
          </Text>
          <Text>OTP - {item.otp}</Text>
        </Flex>
      ))}
    </div>
  );
};

export default MessageList;
