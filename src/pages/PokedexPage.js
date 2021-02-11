import React, { useState, useEffect, useContext } from "react";
import { Flex, SimpleGrid, Spinner } from "@chakra-ui/react";
import { useHistory } from "react-router-dom";
import CardPokemon from "../components/card/CardPokemon";
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

  const removeFromPokedex = (poke) => {
    setters.setPokedex(
      states.pokedex.filter((pokemon) => {
        return pokemon.name !== poke.name;
      })
    );
    console.log(states.pokedex);
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
                  addPokedex={() => addToPokedex(pokemon)}
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
