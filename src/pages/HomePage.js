import { Button, Flex, Heading, Spinner } from "@chakra-ui/react";

import { useHistory } from "react-router-dom";

import { goToPokedex } from "../routes/Coordinator";
import { BASE_URL } from "../parameters"
import { useEffect, useState } from "react";
import axios from "axios";
import CardPokemon from "../components/CardPokemon";

// import Btn from "../components/sample/Button";

const HomePage = () => {
  const history = useHistory();
  const [pokeList, setPokeList] = useState([]);
  const [isLoading, setIsLoading] = useState(false)
  // TO DO: LOADING STATE

  // TO DO: GETPOKEMONLIST

  // TO DO: USEEFFECT POKEMONLIST

  // TO DO: ADD TO POKEDEX

  // TO DO: GO TO POKEMON DETAILS

  // TO DO: LOADING SPINNER

  useEffect(() => { getPokemons() }, []);

  const getPokemons = async () => {
    setIsLoading(true)
    try {
      const response = await axios.get(`${BASE_URL}/?limit=20`)
      console.log(response.data.results);
      setPokeList(response.data.results);
      setIsLoading(false)
    }catch (err) {
      console.log(err);
    };

  };

  const showPokeList = pokeList

  return (
    <Flex
      as="main"
      h="80vh"
      w="100vw"
      flexWrap="wrap"
      justify="center"
      align="center"
    >
      {/* <Heading>HomePage</Heading>
      <Button variant="outline" onClick={() => goToPokedex(history)}>
        pokéDex
      </Button> */}
      {isLoading ? <Spinner/>: showPokeList.map((pokemon) => {
        return <CardPokemon key={pokemon.nome} pokemon={pokemon} />
      })}
    </Flex>
  );
};

export default HomePage;