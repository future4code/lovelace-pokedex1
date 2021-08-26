import React from 'react'
import { useHistory } from 'react-router-dom'
import styled from 'styled-components'


const Container = styled.div``


export default function Pokedex() {

    const history = useHistory()

    const goBack = () => {
        history.goBack()
    }

    const goToDetails = () => {
        history.push("/details")
    }

    return (
        <Container>

            <button onClick={goBack}>Voltar</button>
            <button onClick={goToDetails}>Ver detalhes</button>

        </Container>
    )
}


