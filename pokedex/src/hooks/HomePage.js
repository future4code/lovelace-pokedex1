import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router'
import styled from 'styled-components'
import axios from 'axios'
import PokemonCard from './PokemonCard'
import Pagination from './Pagination'

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



export default function HomePage() {
    //rutas pages
    const history = useHistory()
    const goToPokedex = () => {
        history.push("/pokedex")
    }
    const goToDetails = () => {
        history.push("/details")
    }
    //============================

    //====variaveis de estado
    const [pokemonNames, setPokemonNames] = useState([])
    const [pokemons, setPokemons] = useState([])
    const [pokedex, setPokedex] = useState([])
    const [previous, setPrevious] = useState(null)
    const [next, setNext] = useState(null)
    //==========================================

    useEffect(() => {
        getNomePokemon("https://pokeapi.co/api/v2/pokemon?offset=0&limit=20")
    }, []);

    useEffect(() => {
        const newListPokemon = []
        pokemonNames.forEach((item) => {
            axios.get(`https://pokeapi.co/api/v2/pokemon/${item.name}`)
                .then((res) => {
                    newListPokemon.push(res.data)
                    if (newListPokemon.length === 20) {
                        const arrumarLista = newListPokemon.sort((a, b) => {
                            return a.id - b.id
                        })
                        setPokemons(arrumarLista)
                    }
                })
                .catch((err) => {
                    console.log(err.message)
                })
        })

    }, [pokemonNames]);

    const getNomePokemon = (link) => {
        axios.get(link)
            .then((res) => {
                setPokemonNames(res.data.results)
                setPrevious(res.data.previous)
                setNext(res.data.next)
            })
            .catch((err) => {
                console.log(err)
            })
    }



    return (
        <Container>
            <button onClick={goToPokedex}>Pokedéx</button>
            <button onClick={goToDetails}>Detalhes</button>
            <BoxProduto>
                {pokemons &&
                    pokemons.map((pokemon) => {
                        return <PokemonCard key={pokemon.name} pokemon={pokemon} />
                    })}
            </BoxProduto>
            <Pagination getNomePokemon={getNomePokemon} previous={previous} next={next}></Pagination>
        </Container>






    )
}

