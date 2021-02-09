import React from "react";

import { Button as ChakraButton } from "@chakra-ui/react";
import { useHistory } from "react-router-dom";

const Button = ({ children, props }) => {
  const history = useHistory();
  // const goTo()
  return (
    <ChakraButton bgColor="tomato" onClick={() => props.goTo(history)}>
      {children}
    </ChakraButton>
  );
};

export default Button;
