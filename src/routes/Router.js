import { BrowserRouter, Route, Switch } from "react-router-dom";
import DetailPage from "../pages/DetailPage";
import HomePage from "../pages/HomePage";
import PokedexPage from "../pages/PokedexPage";


const Router=()=>{

    return(
        <BrowserRouter>
        <Switch>
            <Route exact path="/">
                <HomePage/>
            </Route>
            <Route exact path="/PokedexPage">
                <PokedexPage/>
            </Route>
            <Route exact path="/DetailPage">
                <DetailPage/>
            </Route>
        </Switch>
        </BrowserRouter>

    )
}

export default Router