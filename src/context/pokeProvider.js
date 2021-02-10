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
    // setIsLoading(true);
    try {
      const response = await axios.get(`${base_url}/?limit=20`);
      console.log(response.data.results);

      setPokemons(response.data.results);

      console.log("curto circuito", pokemons && pokemons);
      // setIsLoading(false);
      return pokemons && pokemons;
    } catch (err) {
      throw new Error(err);
    }
  };

  useEffect(() => {
    getPokemons();
  }, []);

  useEffect(() => {
    console.log("useffect", pokemons);
  }, [pokemons]);

  // console.log(pokedex);
  // console.log(pokemons);

  const states = { pokemons, pokedex, isLoading };
  const setters = { setPokemons, setPokedex };
  const requests = { getPokemons };

  const data = { states, setters, requests };

  return (
    <PokeContext.Provider value={data}>{props.children}</PokeContext.Provider>
  );
};

export default PokeProvider;
