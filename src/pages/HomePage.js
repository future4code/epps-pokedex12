import { Flex, Spinner } from "@chakra-ui/react";

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
    const index = pokedex.findIndex((pokemon) => { return pokemon.name === newPokemon.name })
    if (index === -1) {
      const newPokedex = [...pokedex, newPokemon];
      setPokedex(newPokedex);
      pokeTrash(newPokemon.name);
      alert(`${newPokemon.name} was successfully added to your PokéDex!`);
      // getPokemons();
    }
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
  
    setPokeList(
      pokeList.filter((pokemon) => {
        return pokemon.name !== name;
      }))
      
      // pokeList.map((pokemon) => {
      //   return (
      //     <CardPokemon
      //     key={pokemon.nome}
      //     pokemon={pokemon}
      //     addToPokedex={() => addToPokedex(pokemon)}
      //     ></CardPokemon>
      //     );
      //   });

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
      {isLoading ? (
        <Spinner size="xl" />
      ) : (
          <>
            {filteredPokeList.map((pokemon) => {
              return (
                <CardPokemon
                  key={pokemon.url}
                  pokemon={pokemon}
                  addToPokedex={() => addToPokedex(pokemon)}
                ></CardPokemon>
              );
            })}
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
