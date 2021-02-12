import React, { useContext } from "react";

import { Spinner, SimpleGrid } from "@chakra-ui/react";

import { useHistory } from "react-router-dom";
import CardPokemon from "../components/card/CardPokemon";
import { goHome } from "../routes/Coordinator";
import Header from "../components/Header";
import Btn from "../components/sample/Button";
import PokeContext from "../context/pokeContext";

const PokedexPage = (props) => {
  const { states, setters } = useContext(PokeContext);
  const history = useHistory();

  const test = (pokemon) => {
    setters.removeFromPokedex(pokemon);
  };

  return (
    <>
      <Header>
        <Btn goTo={() => goHome(history)}>home</Btn>
        <Btn goTo={() => goHome(history)}>pokemons</Btn>
      </Header>
      <SimpleGrid padding="10px" gap={5} minChildWidth="180px">
        {states.isLoading ? (
          <Spinner size="xl" />
        ) : (
          states.pokedex.map((pokemon) => {
            return (
              <CardPokemon
                key={pokemon.url}
                pokemon={pokemon}
                removePokedex={() => test(pokemon)}
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
