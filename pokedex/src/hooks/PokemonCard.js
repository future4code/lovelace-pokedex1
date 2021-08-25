import React from 'react'
import styled from 'styled-components'

const ProductCard = styled.li`
list-style: none;
width: 250px;
`
const Card = styled.div`
display: grid;
grid-template-columns: 1fr;
grid-template-rows: 1fr repeat(3, 30px);
margin: 10px;
border: 1px dotted grey;
padding: 5px;
`
const Picture = styled.img`
display: flex;
align-content: center;
justify-content: center;
width: 100%;
max-height: 360px;
`
const Button = styled.button``
const Name = styled.span``

const PokemonCard = (props) => {
    return (
        <ProductCard>
            <Card>
                <Picture src={props.pokemon.sprites.front_default} />
                <Name>{props.pokemon.name}</Name>
                <Button>Adicionar ao Pokedex</Button>
                <Button>Ver detalhes</Button>
            </Card>
        </ProductCard>
    )
}

export default PokemonCard
