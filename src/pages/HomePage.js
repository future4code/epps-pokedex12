import { Flex, Spinner } from "@chakra-ui/react";

import PokeContext from "../context/pokeContext";

import { useHistory } from "react-router-dom";

import { goToPokedex } from "../routes/Coordinator";
import { useContext } from "react";
import CardPokemon from "../components/CardPokemon";

import Btn from "../components/sample/Button";

import Header from "../components/Header";

const HomePage = () => {
  const { states, setters } = useContext(PokeContext);
  const history = useHistory();

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

      setters.setPokemons(
        states.pokemons.filter((pokemon) => {
          return pokemon.name !== newPokemon.name;
        })
      );
    } else {
      alert(`${newPokemon.name} is already on pokéDex`);
    }
  };

  return (
    <Flex
      as="main"
      h="80vh"
      w="100vw"
      flexWrap="wrap"
      justify="center"
      align="center"
    >
      <Header>
        <Btn goTo={() => goToPokedex(history)}>pokéDex</Btn>
      </Header>
      {states.isLoading ? (
        <Spinner size="xl" />
      ) : (
        <>
          {states.pokemons.map((pokemon) => {
            return (
              <CardPokemon
                key={pokemon.name}
                pokemon={pokemon}
                addToPokedex={() => addToPokedex(pokemon)}
                visible={false}
              />
            );
          })}
        </>
      )}
    </Flex>
  );
};

export default HomePage;
