/* eslint-disable react-hooks/exhaustive-deps */
import {
  Flex,
  Heading,
  Text,
  Image,
  Spinner,
  Box,
  Tag,
} from "@chakra-ui/react";
import { useContext, useEffect } from "react";

import { useHistory, useParams } from "react-router-dom";
import Header from "../components/Header";

import Btn from "../components/sample/Button";
import PokeContext from "../context/pokeContext";

import { goHome, goToPokedex } from "../routes/Coordinator";

const DetailPage = (props) => {
  const history = useHistory();
  const pathParams = useParams();
  const { states, setters, requests } = useContext(PokeContext);

  // TO DO: USEEFFECT GET POKEMON BY ID
  useEffect(() => {
    requests.getPokemon(pathParams.pokeName);
  }, [pathParams.pokeName]);

  const colorChanger = (pokeType) => {
    switch (pokeType) {
      case "fire":
        return (
          <Tag mx="2" color="white" bgColor="orangered">
            {pokeType.toUpperCase()}
          </Tag>
        );
      case "water":
        return (
          <Tag mx="2" color="white" bgColor="blue.500">
            {pokeType.toUpperCase()}
          </Tag>
        );
      case "ice":
        return (
          <Tag mx="2" color="white" bgColor="blue.300">
            {pokeType.toUpperCase()}
          </Tag>
        );
      case "grass":
        return (
          <Tag mx="2" color="white" bgColor="green.500">
            {pokeType.toUpperCase()}
          </Tag>
        );
      case "bug":
        return (
          <Tag mx="2" color="white" bgColor="yellowgreen">
            {pokeType.toUpperCase()}
          </Tag>
        );
      case "poison":
        return (
          <Tag mx="2" color="white" bgColor="purple.700">
            {pokeType.toUpperCase()}
          </Tag>
        );
      case "electric":
        return (
          <Tag mx="2" color="white" bgColor="yellow.400">
            {pokeType.toUpperCase()}
          </Tag>
        );
      case "flying":
        return (
          <Tag mx="2" color="white" bgColor="purple.300">
            {pokeType.toUpperCase()}
          </Tag>
        );
      case "dragon":
        return (
          <Tag mx="2" color="white" bgColor="purple.600">
            {pokeType.toUpperCase()}
          </Tag>
        );
      case "ghost":
        return (
          <Tag mx="2" color="white" bgColor="purple.900">
            {pokeType.toUpperCase()}
          </Tag>
        );
      case "rock":
        return (
          <Tag mx="2" color="white" bgColor="yellow.700">
            {pokeType.toUpperCase()}
          </Tag>
        );
      case "ground":
        return (
          <Tag mx="2" color="white" bgColor="yellow.600">
            {pokeType.toUpperCase()}
          </Tag>
        );
      case "normal":
        return (
          <Tag mx="2" color="white" bgColor="yellow.500">
            {pokeType.toUpperCase()}
          </Tag>
        );
      case "fighting":
        return (
          <Tag mx="2" color="white" bgColor="brown">
            {pokeType.toUpperCase()}
          </Tag>
        );
      case "fairy":
        return (
          <Tag mx="2" color="white" bgColor="pink.300">
            {pokeType.toUpperCase()}
          </Tag>
        );
      case "psychic":
        return (
          <Tag mx="2" color="white" bgColor="pink.500">
            {pokeType.toUpperCase()}
          </Tag>
        );
      case "steel":
        return (
          <Tag mx="2" color="white" bgColor="steelblue">
            {pokeType.toUpperCase()}
          </Tag>
        );
      case "dark":
        return (
          <Tag mx="2" color="white" bgColor="yellow.900">
            {pokeType.toUpperCase()}
          </Tag>
        );
      default:
        return <Tag>{pokeType}</Tag>;
    }
  };

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

      {states.isLoading ? (
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
              {states.pokemon.name &&
                states.pokemon.name[0].toUpperCase() +
                  states.pokemon.name.substr(1)}
            </Heading>
            {states.pokemon.sprites && (
              <Flex w="100%" justify="space-evenly">
                <Box w="45%" paddingBottom="4">
                  <Heading as="h4" fontSize="20px" textAlign="center">
                    Normal
                  </Heading>
                  <Flex justify="center">
                    <Image src={states.pokemon.sprites.front_default} />
                    <Image src={states.pokemon.sprites.back_default} />
                  </Flex>
                </Box>
                <Box w="45%" paddingBottom="4">
                  <Heading as="h4" fontSize="20px" textAlign="center">
                    Shiny
                  </Heading>
                  <Flex justify="center">
                    <Image src={states.pokemon.sprites.front_shiny} />
                    <Image src={states.pokemon.sprites.back_shiny} />
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
              <Flex align="center">
                <Text>Type:</Text>
                {states.pokemon.types && (
                  <>
                    {colorChanger(states.pokemon.types[0].type.name)}

                    {states.pokemon.types[1] && " & "}

                    {states.pokemon.types[1] &&
                      colorChanger(states.pokemon.types[1].type.name)}
                  </>
                )}
              </Flex>
              {states.pokemon.stats &&
                states.pokemon.stats.map((stat) => {
                  return (
                    <Text key={stat.stat.name}>
                      {stat.stat.name[0].toUpperCase() +
                        stat.stat.name.substr(1)}
                      : {stat.base_stat}
                    </Text>
                  );
                })}
              <Text>Weight: {states.pokemon.weight} kg</Text>
              <Text>Height: {states.pokemon.height}</Text>
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
              {states.pokemon.moves ? (
                <Flex flexWrap="wrap" direction="column">
                  {states.pokemon.moves.map((move, i) => {
                    if (i < 9) {
                      return (
                        <Text key={i}>
                          {move.move.name[0].toUpperCase() +
                            move.move.name.substr(1)}
                        </Text>
                      );
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
