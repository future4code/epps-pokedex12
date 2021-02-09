import { Button, Flex, Heading } from "@chakra-ui/react";

import { useHistory } from "react-router-dom";

import { goToPokedex } from "../routes/Coordinator";

import Btn from "../components/sample/Button";

const HomePage = () => {
  const history = useHistory();
  // TO DO: LOADING STATE

  // TO DO: GETPOKEMONLIST

  // TO DO: USEEFFECT POKEMONLIST

  // TO DO: ADD TO POKEDEX

  // TO DO: GO TO POKEMON DETAILS

  // TO DO: LOADING SPINNER

  return (
    <Flex
      as="main"
      h="80vh"
      w="100vw"
      direction="column"
      justify="center"
      align="center"
    >
      <Heading>HomePage</Heading>
      <Btn goTo={() => goToPokedex(history)}>pokéDex</Btn>
    </Flex>
  );
};

export default HomePage;

// const getPokeList = () => {
//   axios
//     .get("https://pokeapi.co/api/v2/pokemon/?limit=151")
//     .then((response) => {
//       // console.log(res.data.results);
//       setPokeList(response.data.results);
//     })
//     .catch((err) => {
//       console.log(err);
//     });
// };

// useEffect(() => {
//   getPokeList();
// }, [pokeName]);

// {pokeList.map((pokemon) => {
//   return (
//     <Option key={pokemon.name} value={pokemon.name}>
//       {pokemon.name}
//     </Option>
//   );
// })}
