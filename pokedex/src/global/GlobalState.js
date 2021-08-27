import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { BASE_URL } from '../constants/url'
import styled from 'styled-components'
import GlobalStateContext from './GlobalStateContext'

export const Spinner = styled.div`  
border: 4px solid rgba(0,0,0, .1);
width: 100px;
height: 100px;
border-radius: 50%;
border-left-color: #09f;
margin-top: 5em;
margin-left: 7em;  
animation: spin 1s ease infinite;    
@keyframes spin {
    0%{
        transform: rotate(0deg);
    }
    100%{
        transform: rotate(360deg)
    }
}
`

const GlobalState = (props) => {
    const [pokemonNames, setPokemonNames] = useState([])
    const [pokemons, setPokemons] = useState([])
    const [pokedex, setPokedex] = useState([]);
    const [previous, setPrevious] = useState(null)
    const [next, setNext] = useState(null)

    useEffect(() => {
        getPokemonNames(`${BASE_URL}/pokemon?offset=0&limit=20`);
      }, []);
    
      useEffect(() => {
        const newListPokemon = [];
        pokemonNames.forEach((item) => {
          axios
            .get(`${BASE_URL}/pokemon/${item.name}`)
            .then((res) => {
                newListPokemon.push(res.data);
              if (newListPokemon.length === 20) {
                const arrumarLista = newListPokemon.sort((a, b) => {
                  return a.id - b.id;
                });
                setPokemons(arrumarLista);
              }
            })
            .catch((err) => {
                  console.log(err.message)
                  })
        });
      }, [pokemonNames]);
    
      const getPokemonNames = (link) => {
        axios
          .get(link)
          .then((res) => {
            setPokemonNames(res.data.results);
            setPrevious(res.data.previous)
            setNext(res.data.next)
          })
          .catch((error) => console.log(error.message));
      };

      const state = {
        pokemons,
        setPokemons,
        pokedex,
        setPokedex,
        previous,
        next
      }
      const setters = {
        getPokemonNames
      }

      return (
        <GlobalStateContext.Provider value={{state, setters}}>
          {props.children}
        </GlobalStateContext.Provider>
      );
}

export default GlobalState
