import React, { useContext, useState } from 'react'
import { useHistory } from 'react-router-dom'
import styled from 'styled-components'
import PokemonCard from './PokemonCard'
import GlobalStateContext from '../global/GlobalStateContext'

const Container = styled.div``

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

export default function Pokedex() {
    //Rutas pages =================================
    const history = useHistory()
    const goBack = () => {
        history.goBack()
    }
    const goToDetails = () => {
        history.push("/details/:name")
    }
    //Global State ===============================
    const { state, setter } = useContext(GlobalStateContext)


    return (
        <Container>

            <button onClick={goBack}>Voltar</button>
            <button onClick={goToDetails}>Ver detalhes</button>
            <BoxProduto>
                {state.pokedex && 
                        state.pokedex.map((pokemon) => {
                return <PokemonCard isPokedex key={pokemon.name} pokemon={pokemon} />;
            })}

            </BoxProduto>

        </Container>
    )
}


