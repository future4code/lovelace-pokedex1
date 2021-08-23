import React from 'react'
import { useHistory } from 'react-router-dom'
import styled from 'styled-components'


const Container = styled.div``


export default function DetailsPokemons() {

    const history = useHistory()

    const goToHome = () => {
        history.push("/")
    }

    const goToPokedex = () => {
        history.push("/pokedex")
    }

    return (
        <Container>

            <button onClick={goToHome}>Voltar</button>
            <button onClick={goToPokedex}>Pokedéx</button>

        </Container>
    )
}

