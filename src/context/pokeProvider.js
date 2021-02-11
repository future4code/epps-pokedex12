import React, { useState } from "react";

import PokeContext from "./pokeContext";

import axios from "axios";

import { BASE_URL } from "../parameters";
import { useEffect } from "react";

const PokeProvider = (props) => {
  const [pokemons, setPokemons] = useState([]);
  const [pokedex, setPokedex] = useState([]);
  const [pokemon, setPokemon] = useState({});
  const [moves, setMoves] = useState([]);
  const [move, setMove] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const base_url = BASE_URL;

  // TO DO: GETPOKEMONLIST
  const getPokemons = async () => {
    setIsLoading(true);
    try {
      const response = await axios.get(`${base_url}/?limit=151`);
      setPokemons(
        response.data.results
          .sort(() => Math.random() - Math.random())
          .slice(0, 20)
      );
      setIsLoading(false);
    } catch (err) {
      throw new Error(err);
    }
  };

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

  const states = { pokemons, pokedex, isLoading, pokemon, moves, move };
  const setters = { setPokemons, setPokedex, setPokemon, setMoves, setMove };
  const requests = { getPokemons, getPokemon, getMoveByName };

  const data = { states, setters, requests };

  return (
    <PokeContext.Provider value={data}>{props.children}</PokeContext.Provider>
  );
};

export default PokeProvider;
