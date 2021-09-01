import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import DetailsPokemons from '../hooks/DetailsPokemons'
import HomePage from '../hooks/HomePage'
import Pokedex from '../hooks/Pokedex'

export default function Router() {


    return (

        <BrowserRouter>
            <Switch>
                <Route exact path={"/"}>
                    <HomePage/>
                </Route>
                <Route exact path={"/pokedex"}>
                    <Pokedex/>
                </Route>
                <Route exact path={"/details/:name"}>
                    <DetailsPokemons></DetailsPokemons>
                </Route>
            </Switch>
        </BrowserRouter>

    )
}
