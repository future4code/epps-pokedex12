import { Box, Button, Flex, Heading, Spinner } from "@chakra-ui/react";
import axios from "axios";
import { useEffect, useState } from "react";
const CardPokemon = (props) => {
    const [pokemon, setPokemon] = useState({})
    const [isLoading, setIsLoading] = useState(false)


    const getPokemon = async () => {
        setIsLoading(true)
        try {
            const response = await axios.get(props.pokemon.url)

            setPokemon(response.data);
            console.log("poke", pokemon)
            setIsLoading(false)
        } catch (err) {
            console.log(err);
        }

    }
    useEffect(() => { getPokemon() }, []);
    console.log("p", pokemon)
    return (
        <Flex>
            {isLoading ? <Spinner /> : <p>{pokemon.sprites.front_default}</p>
                // <Box
                //     borderWidth="1px"
                //     borderRadius="lg"
                //     padding="10px"
                //     margin="10px"
                //     align="center"
                // >
                //     <p>{props.pokemon.name}</p>
                //     <img src={pokemon.sprites.front_default} alt=""/>
                //     <Button margin="10px">Add Pokedex</Button>
                //     <Button margin="10px">Detalhes</Button>
                // </Box>
            }
        </Flex>)



};

export default CardPokemon;
