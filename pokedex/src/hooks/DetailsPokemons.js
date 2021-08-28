import React, { useEffect, useState } from 'react'
import { useHistory, useParams } from 'react-router-dom'
import styled from 'styled-components'
import axios from 'axios'


const Container = styled.div``


export default function DetailsPokemons() {

    const [stats, setStats] = useState([])
    const [types, setTypes] = useState([])
    const [moves, setMoves] = useState([])
    const [urlForms, setUrlForms] = useState("")
    const [imageFront, setImageFront] = useState("")
    const [imageBack, setImageBack] = useState("")
    const { name } = useParams()

    const history = useHistory()

    const goToHome = () => {
        history.push("/")
    }

    const goToPokedex = () => {
        history.push("/pokedex")
    }


    const detailsPokemon = () => {
        const url = "https://pokeapi.co/api/v2/pokemon/" + name
        axios.get(url, {
        }).then((resp) => {
            setStats(resp.data.stats)
            setTypes(resp.data.types)
            setMoves(resp.data.moves)
            setUrlForms(resp.data.forms[0].url)
        }).catch((error) => {
            alert("Erro ao exibir detalhes")
        })
    }

    const formsPokemon = () => {
        axios.get(urlForms, {
        }).then((resp) => {
            setImageFront(resp.data.sprites.front_default)
            setImageBack(resp.data.sprites.back_default)
        }).catch((error) => {
            //alert("Erro ao exibir forms")
        })
    }


    useEffect(() => {
        detailsPokemon()
    }, [])

    useEffect(() => {
        formsPokemon()
    }, [urlForms])


    return (
        <Container>

            <div>
                <img src={imageFront}></img>
            </div>
            <div>
                <img src={imageBack}></img>
            </div>
            <div>
                <h4>Poderes</h4>
                {stats.map(stat => {
                    return (
                        <div>
                            <span><b>{stat.stat.name}: </b></span>
                            <span>{stat.base_stat}</span>
                        </div>
                    )
                })}
            </div>
            <div>
                {types.map(type => {
                    return (
                        <div>{type.type.name}</div>
                    )
                })}
            </div>
            <div>
                <h4>Principais ataques</h4>
                {moves.slice(0, 5).map(move => {
                    return (
                        <span>{move.move.name}</span>
                    )
                })}
            </div>

            <button onClick={goToHome}>Voltar</button>
            <button onClick={goToPokedex}>Pokedéx</button>

        </Container>
    )
}