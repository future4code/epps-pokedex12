import React from "react";

import { Button as ChakraButton } from "@chakra-ui/react";

const Button = (props) => {
  return (
    <ChakraButton
      colorScheme="grey"
      variant="outline"
      marginY={4}
      boxShadow="1px 1px 3px #ddd"
      transition="box-shadow 250ms ease"
      _hover={{
        boxShadow: "1px 3px 10px #aaa",
      }}
      onClick={props.goTo}
    >
      {props.children}
    </ChakraButton>
  );
};

export default Button;
