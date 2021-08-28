import React, { useState, useEffect, useContext } from 'react'
import { useHistory } from 'react-router'
import styled from 'styled-components'
import axios from 'axios'
import PokemonCard from './PokemonCard'
import { BASE_URL } from '../constants/url'
import GlobalStateContext from '../global/GlobalStateContext'

const Container = styled.div``

export const Header = styled.h3`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color : lightblue;
  padding: 10px 40px;

`
export const BoxProduto = styled.div`
  display:grid;
  grid-template-columns: repeat(3,2fr);
  row-gap: 20px;
  column-gap: 20px;
  margin:10px;
  padding: 20px 40px; 
  border-right: 1px solid #ebe7fb;
  max-height: calc(130vh - calc(100vh / 2));
  overflow: auto;  
 `
export const NextBefore = styled.div`
display: flex;
align-items: center;
justify-content: center;
text-align: center;`

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
export default function HomePage() {
    //rutas pages
    const history = useHistory()
    const goToPokedex = () => {
        history.push("/pokedex")
    }
    //Global State=======================
    // const { pokemons } = useContext(GlobalStateContext)
    const { state, setters } = useContext(GlobalStateContext)
    //===============================================================

    const execPrevious = (state.previous) ? 
          (<li className="page-item">
              <a className="page-link" onClick={() => setters.getPokemonNames(state.previous)} href="#">Anterior
                    </a></li>) : ""
    const execNext = (state.next) ? 
          (<li className="page-item">
              <a className="page-link" onClick={() => setters.getPokemonNames(state.next)} href="#">Próximo
              </a></li>) : ""

    return (
        <Container>
            <button onClick={goToPokedex}>Pokedéx</button>
            <BoxProduto>
            {state.pokemons &&
             state.pokemons.map((pokemon) => {
                return <PokemonCard key={pokemon.name} pokemon={pokemon} />;
                })}
            </BoxProduto>
            <NextBefore>
                    <nav aria-label="Navegação de página exemplo">
                        <ul className="pagination">
                            {execPrevious}             
                            {execNext}
                        </ul>
                    </nav>
            </NextBefore>
        </Container>
    )
}

