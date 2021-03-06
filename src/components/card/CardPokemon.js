import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import {
  Flex,
  GridItem,
  Heading,
  IconButton,
  Image,
  Text,
} from "@chakra-ui/react";
import { CgCloseO, CgEye, CgPokemon } from "react-icons/cg";
import { goToDetails } from "../../routes/Coordinator";
import PokeContext from "../../context/pokeContext";

const CardPokemon = (props) => {
  const history = useHistory();
  const [pokemon, setPokemon] = useState({});
  const [pokemonId, setPokemonId] = useState("");
  const { states, requests } = useContext(PokeContext);
  // const { size, variant, ...rest } = props;
  // const styles = useStyleConfig("CardPokemon", { size, variant });

  useEffect(() => {
    getPokemon();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const getPokemon = async () => {
    //setters.setIsLoading(true);
    try {
      const response = await axios.get(props.pokemon.url);
      //console.log(response.data);
      setPokemon(response.data);
      requests.replaceUrl(response.data);
      setPokemonId(response.data.id);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      {states.isLoading ? (
        ""
      ) : (
        <GridItem
          padding="10px"
          margin="10px"
          borderWidth="1px"
          borderRadius="lg"
          align="center"
          boxShadow="1px 1px 8px #ccc"
          transition="box-shadow 150ms ease"
          maxWidth="220px"
          // sx={styles}
          // {...rest}
          _hover={{
            boxShadow: "1px 1px 10px #aaa",
          }}
        >
          <Heading as="h4" fontSize="22px">
            {props.pokemon.name[0].toUpperCase() + props.pokemon.name.substr(1)}
          </Heading>
          {/* {pokemonId && (
            <Image
              maxH="150px"
              src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemonId}.png`}
            />
          )} */}
          {pokemon.sprites && <Image src={pokemon.sprites.front_default} />}
          <Flex justify="center">
            {props.visible ? (
              <IconButton
                icon={<CgCloseO fontSize={30} />}
                colorScheme="red"
                onClick={props.removePokedex}
                margin="10px"
              />
            ) : (
              <IconButton
                icon={<CgPokemon fontSize={30} />}
                margin="10px"
                colorScheme="red"
                onClick={props.addToPokedex}
              />
            )}
            <IconButton
              icon={<CgEye fontSize={30} />}
              onClick={() => goToDetails(history, pokemon.name)}
              margin="10px"
              colorScheme="blackAlpha"
            />
          </Flex>
        </GridItem>
      )}
    </>
  );
};

export default CardPokemon;
