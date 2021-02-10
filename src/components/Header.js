import React from "react";

import { Flex } from "@chakra-ui/react";

const Header = ({ children }) => {
  return (
    <Flex as="header" w="100%" justify="space-evenly" align="center">
      {children}
    </Flex>
  );
};

export default Header;
