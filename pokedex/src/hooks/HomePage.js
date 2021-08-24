import React from 'react'
import { useHistory } from 'react-router'
import styled from 'styled-components'


const Container = styled.div``


export default function HomePage() {

    const history = useHistory()

    const goToPokedex = () => {
        history.push("/pokedex")
    }

    const goToDetails = () => {
        history.push("/details")
    }

    return (

        <Container>
            <button onClick={goToPokedex}>Pokedéx</button>
            <button onClick={goToDetails}>Detalhes</button>
        </Container>

    )
}

