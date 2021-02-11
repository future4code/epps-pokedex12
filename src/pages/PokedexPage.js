import React, { useState, useEffect, useContext } from "react";
import { Flex, Spinner, useToast } from "@chakra-ui/react";
import { useHistory } from "react-router-dom";
import CardPokemon from "../components/card/CardPokemon";
import { goHome } from "../routes/Coordinator";
import Header from "../components/Header";
import Btn from "../components/sample/Button";
import PokeContext from "../context/pokeContext";

const PokedexPage = (props) => {
  const { states, setters } = useContext(PokeContext);
  const history = useHistory();
  const toast = useToast();

  const removeFromPokedex = (poke) => {
    setters.setPokedex(
      states.pokedex.filter((pokemon) => {
        return pokemon.name !== poke.name;
      })
    );
    toast({
      title: "Success!",
      description: `${poke.name} was removed from the pokéDex!`,
      status: "success",
      duration: 5000,
      isClosable: true,
    });
  };

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
        <Btn goTo={() => goHome(history)}>home</Btn>
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
          {states.isLoading ? (
            <Spinner size="xl" />
          ) : (
            states.pokedex.map((pokemon) => {
              return (
                <CardPokemon
                  key={pokemon.url}
                  pokemon={pokemon}
                  removePokedex={() => removeFromPokedex(pokemon)}
                  visible={true}
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
