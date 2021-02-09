import { Button, Flex, Heading } from "@chakra-ui/react";

import { useHistory } from "react-router-dom";

import { goToDetails } from "../routes/Coordinator";

const PokedexPage = () => {
  const history = useHistory();
  // TO DO: LOADING STATE

  // TO DO: GET POKEMON BY ID

  // TO DO: USEEFFECT GET POKEMON

  // TO DO: REMOVE POKEMON FROM POKEDEX

  // TO DO: GO TO POKEMON DETAILS

  // TO DO: LOADING SPINNER

  return (
    <Flex
      as="main"
      h="80vh"
      w="100vw"
      direction="column"
      justify="center"
      align="center"
    >
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
