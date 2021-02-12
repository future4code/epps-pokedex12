import { SimpleGrid, Spinner, useToast } from "@chakra-ui/react";

import PokeContext from "../context/pokeContext";

import { useHistory } from "react-router-dom";

import { goToPokedex } from "../routes/Coordinator";
import { useContext, useEffect } from "react";
import CardPokemon from "../components/card/CardPokemon";

import Btn from "../components/sample/Button";

import Header from "../components/Header";

const HomePage = () => {
  const { states, setters } = useContext(PokeContext);
  const history = useHistory();
  const toast = useToast();

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

      console.log(states.pokemon);

      setters.setPokedex(newPokedex);
      localStorage.setItem("pokedex", JSON.stringify(newPokedex));

      toast({
        title: "Success!",
        description: `${newPokemon.name} was added to the pokéDex!`,
        status: "success",
        duration: 1000,
        isClosable: true,
      });

      setters.setPokemons(
        states.pokemons.filter((pokemon) => {
          return pokemon.name !== newPokemon.name;
        })
      );
    } else {
      toast({
        title: "Error!",
        description: `${
          newPokemon.name[0].toUpperCase() + newPokemon.name.substr(1)
        } is already on the pokéDex!`,
        status: "error",
        duration: 1000,
        isClosable: true,
      });
    }
  };

  return (
    <>
      <Header>
        <Btn goTo={() => goToPokedex(history)}>pokéDex</Btn>
      </Header>
      <SimpleGrid padding="10px" gap={5} as="main" minChildWidth="180px">
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
      </SimpleGrid>
    </>
  );
};

export default HomePage;
