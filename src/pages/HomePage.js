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
  // TO DO: LOADING STATE

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

  const removeFromPokelist = (name) => {
    // const index = pokeTrash.findIndex((pokemon) => pokemon.name === name);
    // //setPokeTrash(pokeList);
    // pokeTrash.splice(index, 1);
    // getPokemons();
  };

  // TO DO: GETPOKEMONLIST
  // const getPokemons = async () => {
  //   setIsLoading(true);
  //   try {
  //     const response = await axios.get(`${BASE_URL}/?limit=20`);
  //     setPokeList(response.data.results);
  //     setIsLoading(false);
  //     //setPokeTrash(pokeList);
  //   } catch (err) {
  //     console.log(err);
  //   }
  // };

  // TO DO: USEEFFECT POKEMONLIST
  useEffect(() => {
    requests.getPokemons();
  }, []);

  // TO DO: GO TO POKEMON DETAILS

  // const filterTrash = (name) => {
  //   const newPokeList = pokeList.filter((pokemon) => {
  //     return pokemon.name !== name;
  //   });

  //   console.log(newPokeList);
  //   // setPokeTrash(newPokeList);
  //   return newPokeList;
  // };

  // const filteredPokeList = pokeList
  //   .sort(() => Math.random() - Math.random())
  //   .slice(0, pokeList.length);

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
          {/* {pokeTrash.length === 0
            ? filteredPokeList.map((pokemon) => {
                return (
                  <CardPokemon
                    key={pokemon.nome}
                    pokemon={pokemon}
                    addToPokedex={() => addToPokedex(pokemon)}
                  ></CardPokemon>
                );
              })
            : pokeTrash.map((pokemon) => {
                return (
                  <CardPokemon
                    key={pokemon.nome}
                    pokemon={pokemon}
                    addToPokedex={() => addToPokedex(pokemon)}
                  ></CardPokemon>
                );
              })} */}
          {/* {pokeTrash
            ? pokeTrash.map((pokemon) => {
                return (
                  <CardPokemon
                    key={pokemon.nome}
                    pokemon={pokemon}
                    addToPokedex={() => addToPokedex(pokemon)}
                  >
                  </CardPokemon>
                );
              })
            : showPokeList.map((pokemon) => {
                return (
                  <CardPokemon
                    key={pokemon.nome}
                    pokemon={pokemon}
                    addToPokedex={() => addToPokedex(pokemon)}
                  >
                  </CardPokemon>
                );
              })} */}
        </>
      )}
    </Flex>
  );
};

export default HomePage;
