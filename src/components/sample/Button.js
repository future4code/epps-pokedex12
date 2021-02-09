import React from "react";

import { Button as ChakraButton } from "@chakra-ui/react";

const Button = (props) => {
  return (
    <ChakraButton colorScheme="red" marginY={4} onClick={props.goTo}>
      {props.children}
    </ChakraButton>
  );
};

export default Button;
