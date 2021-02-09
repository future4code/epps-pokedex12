import React from "react";

import { Button as ChakraButton } from "@chakra-ui/react";
import { useHistory } from "react-router-dom";

const Button = (props) => {
  // const goTo()
  return (
    <ChakraButton bgColor="tomato" onClick={props.goTo}>
      {props.children}
    </ChakraButton>
  );
};

export default Button;
