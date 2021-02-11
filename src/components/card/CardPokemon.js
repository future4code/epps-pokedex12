import axios from "axios";
import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { Box, Flex, Heading, IconButton, Image } from "@chakra-ui/react";
import { CgCloseO, CgEye, CgPokemon } from "react-icons/cg";
import { goToDetails } from "../../routes/Coordinator";

const CardPokemon = (props) => {
  const history = useHistory();
  const [pokemon, setPokemon] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    getPokemon();
    // eslint-disable-next-line react-hooks/exhaustive-deps
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
          padding="10px"
          margin="10px"
          maxW="200px"
          maxH="200px"
          borderWidth="1px"
          borderRadius="lg"
          align="center"
          boxShadow="1px 1px 8px #ccc"
          transition="box-shadow 150ms ease"
          _hover={{
            boxShadow: "1px 1px 10px #aaa",
          }}
        >
          <Heading as="h4" fontSize="22px">
            {props.pokemon.name[0].toUpperCase() + props.pokemon.name.substr(1)}
          </Heading>
          {pokemon.sprites && (
            <Image src={pokemon.sprites.front_default} alt="" />
          )}
          <Flex>
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
        </Box>
      )}
    </>
  );
};

export default CardPokemon;
