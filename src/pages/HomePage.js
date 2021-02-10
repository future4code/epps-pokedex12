import { Flex, Spinner } from "@chakra-ui/react";

import PokeContext from "../context/pokeContext";

import { useHistory } from "react-router-dom";

import { goToPokedex } from "../routes/Coordinator";
// import { BASE_URL } from "../parameters";
import { useContext, useEffect, useState } from "react";
import axios from "axios";
import CardPokemon from "../components/CardPokemon";

import Btn from "../components/sample/Button";

import Header from "../components/Header";

const HomePage = (props) => {
  const { states, setters, requests } = useContext(PokeContext);
  const history = useHistory();
  const { pokedex, setPokedex } = props;

  // TO DO: ADD TO POKEDEX
  const addToPokedex = (newPokemon) => {
    const index = pokedex.findIndex((pokemon) => {
      return pokemon.name === newPokemon.name;
    });
      if (index === -1) {
        const newPokedex = [...pokedex, newPokemon];
        newPokedex.filter((pokemon) => {
          if (pokemon.name !== newPokemon.name) return pokemon;
        });
        setPokedex(newPokedex);
        alert(`${newPokemon.name} was successfully added to your PokéDex!`);
        // getPokemons();
      } else {
        alert(`${newPokemon.name} is already on pokéDex`);
      }
    };
  };

  // TO DO: USEEFFECT POKEMONLIST
  useEffect(() => {
    requests.getPokemons();
  }, []);

  // TO DO: GO TO POKEMON DETAILS

  const pokeTrash = (name) => {
  
    setPokeList(
      pokeList.filter((pokemon) => {
        return pokemon.name !== name;
      }))
        console.log(pokeList)
  };

  const filteredPokeList = pokeList
    .sort(() => Math.random() - Math.random())
    .slice(0, pokeList.length);

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
              />
            );
          })}
          </>
        )}
    </Flex>
  );
};

export default HomePage;
