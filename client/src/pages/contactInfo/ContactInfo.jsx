import { Heading } from "@chakra-ui/react";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import SendMessageScreen from "../../components/SendMessageScreen";
import { contactList } from "../firstMenu/contactList";
import styles from "./ContactInfo.module.css";

const ContactInfo = () => {
  const { id } = useParams();
  const [data, setData] = useState({});

  const getData = () => {
    let res = contactList.filter((item) => item.id === +id);
    setData(res[0]);
  };

  const date =
    new Date(Date.now()).getDate() +
    "-" +
    new Date(Date.now()).getMonth() +
    "-" +
    new Date(Date.now()).getFullYear();

  const time =
    new Date(Date.now()).getHours() +
    ":" +
    new Date(Date.now()).getMinutes() +
    ":" +
    new Date(Date.now()).getSeconds();

  const handleClick = async (otp) => {
    await axios.post("https://otpappserver.onrender.com/sendOTP", {
      // sending post request to backend server
      ...data,
      otp,
      date,
      time,
      timeStamp: Date.now(),
    });
  };

  useEffect(() => {
    getData();
  }, []);
  return (
    <div>
      <div className={styles.detailsBox}>
        <Heading className={styles.title}>
          {data.firstName} {data.lastName}
        </Heading>
        <Heading className={styles.title}>+91{data.number}</Heading>
        <SendMessageScreen handleClick={handleClick} />
      </div>
      <div className={styles.link}>
        <Link to={"/firstmenu"}>Go Back To List</Link>
      </div>
    </div>
  );
};

export default ContactInfo;
