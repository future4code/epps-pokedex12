import React, { useState, useEffect } from "react";
import { Box, Button, Flex, Heading, Spinner } from "@chakra-ui/react";
import { useHistory } from "react-router-dom";
import CardPokemon from "../components/CardPokemon";
import { goHome } from "../routes/Coordinator";
import Header from "../components/Header";
import Btn from "../components/sample/Button";

const PokedexPage = (props) => {
  const history = useHistory();
  const [isLoading, setIsLoading] = useState(false);
  const { pokedex, setPokedex } = props;
  // TO DO: LOADING STATE

  // TO DO: GO TO POKEMON DETAILS

  // TO DO: LOADING SPINNER

  return (
    <Flex
      as="main"
      h="100vh"
      w="100vw"
      direction="column"
      justify="space-between"
      align="center"
    >
      <Header>
        <Btn goTo={() => goHome(history)}>pokemons</Btn>
      </Header>
      <Flex
        h="100%"
        w="100%"
        flexWrap="wrap"
        alignItems="flex-start"
        justify="center"
      >
        <>
          {isLoading ? (
            <Spinner size="xl" />
          ) : (
            pokedex.map((pokemon) => {
              return (
                <CardPokemon
                  key={pokemon.nome}
                  pokemon={pokemon}
                  onClick={props.addToPokedex}
                />
              );
            })
          )}
        </>
      </Flex>
    </Flex>
  );
};

export default PokedexPage;
