import React, { useEffect, useState } from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  useDisclosure,
  Button,
  Text,
  ModalBody,
} from "@chakra-ui/react";
import styles from "./MessageList.module.css";

const bodyStyle = {
  display: "flex",
  flexDirection: "column",
  gap: "30px",
};

const SendMessageScreen = ({ handleClick }) => {
  // using chakra UI modal component to make sendMessageScreen
  const { isOpen, onOpen, onClose } = useDisclosure(); // chakra ui modal
  const [otp, setOtp] = useState("");

  const getOTP = () => {
    let num = Math.floor(Math.random() * (999999 - 100000 + 1)) + 100000; // random 6 digit number
    setOtp(num);
  };
  useEffect(() => {
    getOTP();
  }, [isOpen]);

  return (
    <div>
      <Button
        className={styles.sendButton}
        colorScheme={"blue"}
        onClick={onOpen}
      >
        Send Message
      </Button>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent textAlign={"center"}>
          <ModalHeader>Compose</ModalHeader>
          <ModalCloseButton />
          <ModalBody style={bodyStyle}>
            <Text>Hi. Your OTP is: {otp}</Text>
            <Button
              onClick={() => {
                handleClick(otp);
                onClose();
              }}
              width={"100px"}
              margin={"auto"}
              colorScheme={"blue"}
            >
              Send
            </Button>
          </ModalBody>
        </ModalContent>
      </Modal>
    </div>
  );
};

export default SendMessageScreen;
