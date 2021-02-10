import React, { useState } from "react";

import PokeContext from "./pokeContext";

import axios from "axios";

import { BASE_URL } from "../parameters";
import { useEffect } from "react";

// const PokeContext = React.createContext();

const PokeProvider = (props) => {
  const [pokemons, setPokemons] = useState([]);
  const [pokedex, setPokedex] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const base_url = BASE_URL;

  // TO DO: GETPOKEMONLIST
  const getPokemons = async () => {
    setIsLoading(true);
    try {
      const response = await axios.get(`${base_url}/?limit=151`);
      setPokemons(response.data.results.sort(() => Math.random() - Math.random()).slice(0, 20))
      setIsLoading(false);
    } catch (err) {
      throw new Error(err);
    }
  };

  useEffect(() => {
    getPokemons();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const states = { pokemons, pokedex, isLoading };
  const setters = { setPokemons, setPokedex };
  const requests = { getPokemons };

  const data = { states, setters, requests };

  return (
    <PokeContext.Provider value={data}>{props.children}</PokeContext.Provider>
  );
};

export default PokeProvider;
