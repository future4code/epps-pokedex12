import React, { useContext, useEffect } from "react";
import { SimpleGrid, Spinner, useToast } from "@chakra-ui/react";
import { useHistory } from "react-router-dom";
import CardPokemon from "../components/card/CardPokemon";
import { goHome } from "../routes/Coordinator";
import Header from "../components/Header";
import Btn from "../components/sample/Button";
import PokeContext from "../context/pokeContext";

const PokedexPage = (props) => {
  const { states, setters } = useContext(PokeContext);
  const history = useHistory();
  const toast = useToast();

  let localPokedex = localStorage.getItem("pokedex");
  console.log(localPokedex);

  useEffect(() => {
    localPokedex = JSON.parse(localPokedex);
    if (localPokedex) setters.setPokedex(localPokedex);
  });

  const removeTest = (pokemon) => {
    setters.removeFromPokedex(pokemon);
    toast({
      title: "Success!",
      description: `${pokemon.name} was removed from the pokéDex!`,
      status: "warning",
      duration: 1000,
      isClosable: true,
    });
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
                removePokedex={() => removeTest(pokemon)}
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
