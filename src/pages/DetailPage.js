import {
  Button,
  Flex,
  Heading,
  Text,
  Image,
  Spinner,
  Box,
  List,
  ListItem,
} from "@chakra-ui/react";
import axios from "axios";
import { useEffect, useState } from "react";

import { useHistory, useParams } from "react-router-dom";
import Details from "../components/Details";

import { goHome } from "../routes/Coordinator";

const DetailPage = (props) => {
  const history = useHistory();
  const pathParams = useParams();
  const [pokemon, setPokemon] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  // TO DO: GET POKEMON BY ID
  const getPokemon = async (pokeName) => {
    setIsLoading(true);
    try {
      const response = await axios.get(
        `https://pokeapi.co/api/v2/pokemon/${pokeName}/`
      );
      setPokemon(response.data);
      setIsLoading(false);
    } catch (err) {
      console.log(err);
    }
  };

  // TO DO: USEEFFECT GET POKEMON BY ID
  useEffect(() => {
    getPokemon(pathParams.pokeName);
  }, []);

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

      {isLoading ? (
        <Spinner />
      ) : (
        <Flex direction="column">
          <Text>{pokemon.name}</Text>
          <Text>{pokemon.weight}</Text>
          <Text>{pokemon.height}</Text>
          {pokemon.stats &&
            pokemon.stats.map((stat) => {
              return (
                <Text key={stat.stat.name}>
                  {stat.stat.name}: {stat.base_stat}
                </Text>
              );
            })}
          {pokemon.sprites && (
            <Flex>
              <Image src={pokemon.sprites.front_default} />
              <Image src={pokemon.sprites.back_default} />
            </Flex>
          )}

          <Text>
            Type:{" "}
            {pokemon.types && (
              <span>
                {pokemon.types[0].type.name}{" "}
                {pokemon.types[1] && " & " + pokemon.types[1].type.name}
              </span>
            )}
          </Text>

          {pokemon.moves ? (
            <List>
              <ListItem>{pokemon.moves[0].move.name}</ListItem>
              <ListItem>{pokemon.moves[1].move.name}</ListItem>
              <ListItem>{pokemon.moves[2].move.name}</ListItem>
              <ListItem>{pokemon.moves[3].move.name}</ListItem>
            </List>
          ) : (
            <Spinner />
          )}
        </Flex>
      )}
      <Details />
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
