import { Box, Button, Flex, Heading, Spinner } from "@chakra-ui/react";

import { useHistory } from "react-router-dom";

import { goToPokedex } from "../routes/Coordinator";
import { BASE_URL } from "../parameters";
import { useEffect, useState } from "react";
import axios from "axios";
import CardPokemon from "../components/CardPokemon";

import Btn from "../components/sample/Button";

import Header from "../components/Header";

const HomePage = (props) => {
  const history = useHistory();
  const [pokeList, setPokeList] = useState([]);
  const { pokedex, setPokedex } = props;
  //const [pokeTrash, setPokeTrash] = useState([]);
  // TO DO: LOADING STATE
  const [isLoading, setIsLoading] = useState(false);
  //const pokeTrash = pokeList;

  // TO DO: ADD TO POKEDEX
  const addToPokedex = (newPokemon) => {
    const newPokedex = [...pokedex, newPokemon];
    setPokedex(newPokedex);
    pokeTrash(newPokemon.name);
    // removeFromPokelist(newPokemon.name);
    alert(`${newPokemon.name} was successfully added to your PokéDex!`);
  };

  const removeFromPokelist = (name) => {
    // const index = pokeTrash.findIndex((pokemon) => pokemon.name === name);
    // //setPokeTrash(pokeList);
    // pokeTrash.splice(index, 1);
    // getPokemons();
  };

  // TO DO: GETPOKEMONLIST
  const getPokemons = async () => {
    setIsLoading(true);
    try {
      const response = await axios.get(`${BASE_URL}/?limit=20`);
      setPokeList(response.data.results);
      setIsLoading(false);
      //setPokeTrash(pokeList);
    } catch (err) {
      console.log(err);
    }
  };

  // TO DO: USEEFFECT POKEMONLIST
  useEffect(() => {
    getPokemons();
  }, []);

  // TO DO: GO TO POKEMON DETAILS

  const pokeTrash = (name) => {
    pokeList
      .filter((pokemon) => {
        return pokemon.name !== name;
      })
      .map((pokemon) => {
        return (
          <CardPokemon
            key={pokemon.nome}
            pokemon={pokemon}
            addToPokedex={() => addToPokedex(pokemon)}
          ></CardPokemon>
        );
      });
  };
  const showPokeList = pokeTrash;

  console.log(pokeTrash);
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
      {isLoading ? (
        <Spinner size="xl" />
      ) : (
        <>
          {pokeTrash()}
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
