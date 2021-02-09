import { Button, Flex, Heading } from "@chakra-ui/react";

import { useHistory } from "react-router-dom";

import { goToDetails } from "../routes/Coordinator";

const PokedexPage = () => {
  const history = useHistory();
  return (
    <Flex as="main" h="80vh" w="100vw" justify="center" align="center">
      <Heading>PokedexPage</Heading>
      <Button
        onClick={() => goToDetails(history)}
        variant="outline"
        colorScheme="grey"
      >
        details
      </Button>
    </Flex>
  );
};

export default PokedexPage;
