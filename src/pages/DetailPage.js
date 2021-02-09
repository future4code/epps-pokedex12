import { Button, Flex, Heading } from "@chakra-ui/react";

import { useHistory } from "react-router-dom";

import { goHome } from "../routes/Coordinator";

const DetailPage = () => {
  const history = useHistory();
  return (
    <Flex as="main" h="80vh" w="100vw" justify="center" align="center">
      <Heading>DetailPage</Heading>
      <Button
        onClick={() => goHome(history)}
        variant="outline"
        colorScheme="grey"
      >
        Home
      </Button>
    </Flex>
  );
};

export default DetailPage;
