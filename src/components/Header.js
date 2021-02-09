import React from "react";

import { Flex, Heading } from "@chakra-ui/react";

const Header = ({ children }) => {
  return (
    <Flex
      as="header"
      w="100%"
      direction="column"
      justify="center"
      align="center"
    >
      {children}
    </Flex>
  );
};

export default Header;
