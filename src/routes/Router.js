import { useState } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import DetailPage from "../pages/DetailPage";
import HomePage from "../pages/HomePage";
import PokedexPage from "../pages/PokedexPage";

const Router = () => {
  const [pokedex, setPokedex] = useState([]);

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <HomePage pokedex={pokedex} setPokedex={setPokedex} />
        </Route>
        <Route path="/pokedex">
          <PokedexPage pokedex={pokedex} setPokedex={setPokedex} />
        </Route>
        <Route path="/details/:pokeName">
          <DetailPage />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default Router;
