import React, { useState, useEffect, useContext } from "react";

import { Flex, Spinner, useToast, SimpleGrid } from "@chakra-ui/react";

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
  <>
    <Header>
      <Btn goTo={() => goHome(history)}>home</Btn>
      <Btn goTo={() => goHome(history)}>pokemons</Btn>
    </Header>
    <SimpleGrid
        padding="10px"
        gap={5}
        minChildWidth="180px"
        maxChildWidth="220px"
      >
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
    </SimpleGrid>
    </>
  );
};

export default PokedexPage;
