import React, { useState } from "react";

import PokeContext from "./pokeContext";

import axios from "axios";

import { BASE_URL } from "../parameters";
import { useEffect } from "react";
import { useToast } from "@chakra-ui/react";

const PokeProvider = (props) => {
  const [pokemons, setPokemons] = useState([]);
  const [pokedex, setPokedex] = useState([]);
  const [stringImg, setStringImg] = useState([]);
  const [pokemon, setPokemon] = useState({...pokemons,artWork:""});
  const [moves, setMoves] = useState([]);
  const [move, setMove] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const base_url = BASE_URL;
  const toast = useToast();

  // TO DO: GETPOKEMONLIST
  const getPokemons = async () => {
    setIsLoading(true);
    try {
      const response = await axios.get(`${base_url}/?limit=151`);
      setPokemons(
        response.data.results
          .sort(() => Math.random() - Math.random())
          .slice(0, 10)
      );
      setIsLoading(false);
    } catch (err) {
      throw new Error(err);
    }
  };

  const replaceUrl = (poke) => {
    const aux1 = JSON.stringify(poke.sprites.other)
    const aux2 = aux1.replace("official-artwork", "official_artwork")
    setStringImg(JSON.parse(aux2))
  }
  // TO DO: GET POKEMON BY ID
  const getPokemon = async (pokeName) => {
    // console.log(pokeName);
    setIsLoading(true);
    try {
      const response = await axios.get(
        `https://pokeapi.co/api/v2/pokemon/${pokeName}/`
      );
      setPokemon(response.data);
      setIsLoading(false);
    } catch (err) {
      console.log(err);
    }
  };

  const removeFromPokedex = (poke) => {
    setters.setPokedex(
      states.pokedex.filter((pokemon) => {
        return pokemon.name !== poke.name;
      })
    );
    localStorage.removeItem("pokedex");
    setters.setPokedex(localStorage.getItem("pokedex"));

    toast({
      title: "Success!",
      description: `${poke.name} was removed from the pokéDex!`,
      status: "success",
      duration: 1000,
      isClosable: true,
    });
  };

  const getMoveByName = async (moveName) => {
    try {
      const response = await axios.get(
        `https://pokeapi.co/api/v2/move/${moveName}/`
      );
      console.log(response.data);
      setMove(response.data);
      console.log(move);
      setMoves(move);
    } catch (err) {
      throw new Error(err);
    }
  };

  useEffect(() => {
    getPokemons();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);


  const states = { pokemons, pokedex, isLoading, pokemon, moves, move, stringImg };
  const setters = {
    setPokemons,
    setPokedex,
    setPokemon,
    setMoves,
    setMove,
    removeFromPokedex,
    setIsLoading,

  };
  const requests = { getPokemons, getPokemon, getMoveByName, replaceUrl };

  const data = { states, setters, requests };

  return (
    <PokeContext.Provider value={data}>{props.children}</PokeContext.Provider>
  );
};

export default PokeProvider;
