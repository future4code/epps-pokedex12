import { Button, Flex, Heading } from "@chakra-ui/react";

import { useHistory } from "react-router-dom";

import { goHome } from "../routes/Coordinator";

const DetailPage = () => {
  const history = useHistory();

  // TO DO: GET POKEMON BY ID

  // TO DO: USEEFFECT GET POKEMON BY ID

  // TO DO: ADD POKEMON TO POKEDEX

  // TO DO: REMOVE POKEMON FROM POKEDEX

  return (
    <Flex
      as="main"
      h="80vh"
      w="100vw"
      direction="column"
      justify="center"
      align="center"
    >
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

// {pokemon.sprites && (
//   <div>
//     <img src={pokemon.sprites.front_default} alt={pokemon.name} />
//     <img src={pokemon.sprites.back_default} alt={pokemon.name} />
//   </div>
// )}
// <div>
//   <Text>
//     Type:{" "}
//     {pokemon.types && (
//       <span>
//         {pokemon.types[0].type.name}{" "}
//         {pokemon.types[1] && " & " + pokemon.types[1].type.name}
//       </span>
//     )}
//   </Text>
//   <Text>Weight: {pokemon.weight}kg</Text>
//   <Text>Height: {pokemon.height}"</Text>
//   <Text>Moves:</Text>
//   {pokemon.moves ? (
//     <List>
//       <ListItem>{pokemon.moves[0].move.name}</ListItem>
//       <ListItem>{pokemon.moves[1].move.name}</ListItem>
//       <ListItem>{pokemon.moves[2].move.name}</ListItem>
//       <ListItem>{pokemon.moves[3].move.name}</ListItem>
//     </List>
//   ) : (
//     ""
//   )}
