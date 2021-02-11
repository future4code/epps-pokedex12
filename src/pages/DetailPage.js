import {
  Flex,
  Heading,
  Text,
  Image,
  Spinner,
  List,
  ListItem,
  Box,
  Center,
} from "@chakra-ui/react";
import axios from "axios";
import { useEffect, useState } from "react";

import { useHistory, useParams } from "react-router-dom";
import Header from "../components/Header";

import Btn from "../components/sample/Button";

import { goHome, goToPokedex } from "../routes/Coordinator";

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
      console.log(pokemon.sprites);
      setIsLoading(false);
    } catch (err) {
      console.log(err);
    }
  };

  // TO DO: USEEFFECT GET POKEMON BY ID
  useEffect(() => {
    getPokemon(pathParams.pokeName);
  }, [pathParams.pokeName]);

  return (
    <Flex
      as="main"
      h="100vh"
      w="100vw"
      direction="column"
      justify="center"
      align="center"
    >
      <Header>
        <Btn goTo={() => goHome(history)}>Home</Btn>
        <Btn goTo={() => goToPokedex(history)}>pokéDex</Btn>
      </Header>

      {isLoading ? (
        <Spinner size="xl" />
      ) : (
        <Flex
          w="100%"
          h="90vh"
          direction="column"
          align="center"
          paddingBottom={4}
        >
          <Flex w="100%" direction="column" align="center">
            <Heading as="h2" fontSize="32px">
              {pokemon.name &&
                pokemon.name[0].toUpperCase() + pokemon.name.substr(1)}
            </Heading>
            {pokemon.sprites && (
              <Flex w="100%" justify="space-evenly">
                <Box w="45%">
                  <Heading as="h4" fontSize="20px" textAlign="center">
                    Normal
                  </Heading>
                  <Flex justify="center">
                    <Image src={pokemon.sprites.front_default} />
                    <Image src={pokemon.sprites.back_default} />
                  </Flex>
                </Box>
                <Box w="45%">
                  <Heading as="h4" fontSize="20px" textAlign="center">
                    Shiny
                  </Heading>
                  <Flex justify="center">
                    <Image src={pokemon.sprites.front_shiny} />
                    <Image src={pokemon.sprites.back_shiny} />
                  </Flex>
                </Box>
              </Flex>
            )}
          </Flex>

          <Flex w="100%" justify="space-evenly">
            <Flex
              paddingX={8}
              paddingY={8}
              marginBottom={4}
              borderWidth="1px"
              borderRadius="lg"
              w="45%"
              maxW="350px"
              flexWrap="wrap"
              direction="column"
              boxShadow="1px 1px 8px #ccc"
              transition="box-shadow 150ms ease"
              _hover={{
                boxShadow: "1px 1px 10px #aaa",
              }}
            >
              <Heading as="h3" fontSize="22px">
                Stats
              </Heading>
              <Text>
                type:{" "}
                {pokemon.types && (
                  <span>
                    {pokemon.types[0].type.name}{" "}
                    {pokemon.types[1] && " & " + pokemon.types[1].type.name}
                  </span>
                )}
              </Text>
              {pokemon.stats &&
                pokemon.stats.map((stat) => {
                  return (
                    <Text key={stat.stat.name}>
                      {stat.stat.name}: {stat.base_stat}
                    </Text>
                  );
                })}
              <Text>weight: {pokemon.weight}</Text>
              <Text>height: {pokemon.height}</Text>
            </Flex>

            <Flex
              paddingX={8}
              paddingY={8}
              marginBottom={4}
              borderWidth="1px"
              borderRadius="lg"
              w="45%"
              maxW="350px"
              flexWrap="wrap"
              direction="column"
              justify="flex-start"
              boxShadow="1px 1px 8px #ccc"
              transition="box-shadow 150ms ease"
              _hover={{
                boxShadow: "1px 1px 10px #aaa",
              }}
            >
              <Heading as="h3" fontSize="22px">
                Moves
              </Heading>
              {pokemon.moves ? (
                <Flex flexWrap="wrap">
                  {pokemon.moves.map((move, i) => {
                    if (i < 10) {
                      return <Text key={i}>{move.move.name}</Text>;
                    }
                    return true;
                  })}
                </Flex>
              ) : (
                <Spinner />
              )}
            </Flex>
          </Flex>
        </Flex>
      )}
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
