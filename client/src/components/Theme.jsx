import React from "react";
import { useColorMode } from "@chakra-ui/react";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";

const Theme = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  //using theme from Chakra UI to change the entire app to light or dark mode

  return (
    <div style={{ cursor: "pointer" }}>
      {colorMode === "light" ? (
        <SunIcon onClick={toggleColorMode} />
      ) : (
        <MoonIcon onClick={toggleColorMode} />
      )}
    </div>
  );
};

export default Theme;
