import axios from "axios";
import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { Box, Flex, IconButton, Image, Spinner } from "@chakra-ui/react";

import { CgEye, CgPokemon } from "react-icons/cg";

import { goToDetails } from "../routes/Coordinator";

const CardPokemon = (props) => {
  const history = useHistory();
  const [pokemon, setPokemon] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    getPokemon();
  }, []);

  const getPokemon = async () => {
    setIsLoading(true);
    try {
      const response = await axios.get(props.pokemon.url);
      setPokemon(response.data);
      setIsLoading(false);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      {isLoading ? (
        ""
      ) : (
        <Box
          borderWidth="1px"
          borderRadius="lg"
          padding="10px"
          margin="10px"
          maxW="200px"
          maxH="300px"
          align="center"
        >
          <p>{props.pokemon.name}</p>
          {pokemon.sprites && (
            <Image src={pokemon.sprites.front_default} alt="" />
          )}
          <Flex>
            <IconButton
              icon={<CgPokemon fontSize={30} />}
              margin="10px"
              colorScheme="red"
            />
            <IconButton
              icon={<CgEye fontSize={30} />}
              onClick={() => goToDetails(history, pokemon.name)}
              margin="10px"
              colorScheme="blackAlpha"
            />
          </Flex>
        </Box>
      )}
    </>
  );
};

export default CardPokemon;
