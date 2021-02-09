import { Button, Flex, Heading } from "@chakra-ui/react";

import { useHistory } from "react-router-dom";

import { goToPokedex } from "../routes/Coordinator";

const HomePage = () => {
  const history = useHistory();

  return (
    <Flex as="main" h="80vh" w="100vw" justify="center" align="center">
      <Heading>HomePage</Heading>
      <Button
        onClick={() => goToPokedex(history)}
        variant="outline"
        colorScheme="grey"
      >
        pokéDex
      </Button>
    </Flex>
  );
};

export default HomePage;
