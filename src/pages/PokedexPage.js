import React, { useState, useEffect, useContext } from "react";
import { Flex, Spinner } from "@chakra-ui/react";
import { useHistory } from "react-router-dom";
import CardPokemon from "../components/CardPokemon";
import { goHome } from "../routes/Coordinator";
import Header from "../components/Header";
import Btn from "../components/sample/Button";
import PokeContext from "../context/pokeContext";

const PokedexPage = (props) => {
  const { states, setters } = useContext(PokeContext);
  const history = useHistory();
  const [isLoading, setIsLoading] = useState(false);
  // TO DO: LOADING STATE

  // TO DO: GO TO POKEMON DETAILS

  // TO DO: LOADING SPINNER

  // TO DO: ADD TO POKEDEX
  const addToPokedex = (newPokemon) => {
    const index = states.pokedex.findIndex((pokemon) => {
      return pokemon.name === newPokemon.name;
    });
    if (index === -1) {
      const newPokedex = [...states.pokedex, newPokemon];
      // eslint-disable-next-line array-callback-return
      newPokedex.filter((pokemon) => {
        if (pokemon.name !== newPokemon.name) return pokemon;
      });
      setters.setPokedex(newPokedex);
      alert(`${newPokemon.name} was successfully added to your PokéDex!`);
    } else {
      alert(`${newPokemon.name} is already on pokéDex`);
    }
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
                  onClick={() => addToPokedex(pokemon)}
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
