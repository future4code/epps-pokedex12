import { Box, Button, Flex, Heading, Spinner } from "@chakra-ui/react";

import { useHistory } from "react-router-dom";

import { goToPokedex } from "../routes/Coordinator";
import { BASE_URL } from "../parameters";
import { useEffect, useState } from "react";
import axios from "axios";
import CardPokemon from "../components/CardPokemon";

import Btn from "../components/sample/Button";

import Header from "../components/Header";

const HomePage = () => {
  const history = useHistory();
  const [pokeList, setPokeList] = useState([]);
  // TO DO: LOADING STATE
  const [isLoading, setIsLoading] = useState(false);

  // TO DO: ADD TO POKEDEX

  // TO DO: GETPOKEMONLIST
  const getPokemons = async () => {
    setIsLoading(true);
    try {
      const response = await axios.get(`${BASE_URL}/?limit=20`);
      setPokeList(response.data.results);
      setIsLoading(false);
    } catch (err) {
      console.log(err);
    }
  };

  // TO DO: USEEFFECT POKEMONLIST
  useEffect(() => {
    getPokemons();
  }, []);

  // TO DO: GO TO POKEMON DETAILS

  const showPokeList = pokeList;

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
        showPokeList.map((pokemon) => {
          return <CardPokemon key={pokemon.nome} pokemon={pokemon} />;
        })
      )}
    </Flex>
  );
};

export default HomePage;
