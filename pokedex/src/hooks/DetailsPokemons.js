import styled from 'styled-components'
import { useEffect, useState } from 'react'
import { useHistory, useParams } from 'react-router-dom'
import axios from 'axios'

export const Container = styled.main`
    height: 80vh;
    width: 100vh;
    margin: 20px 10vw;
    display: flex;
    justify-content: space-between;
`

export const ImageConteiner = styled.div`
    display: flex;
    align-self: flex-start;
    justify-content: flex-start; 
    flex-direction: column;
    margin: 10px;
    border: 1px  grey;
    padding: 5px;
    box-shadow : 0 0 20px -5px rgb(0,0,0, .5);
    background-color : #E7E0C9;
`
export const Img = styled.img`
  height: 15vh;
`;



export default function DetailsPokemons() {

    const [stats, setStats] = useState([])
    const [types, setTypes] = useState([])
    const [moves, setMoves] = useState([])
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
            formsPokemon(resp.data.forms[0].url)
        }).catch((error) => {
            alert("Erro ao exibir detalhes")
        })
    }

    const formsPokemon = (urlForms) => {
        axios.get(urlForms, {
        }).then((resp) => {
            setImageFront(resp.data.sprites.front_default)
            setImageBack(resp.data.sprites.back_default)
        }).catch((error) => {
            alert("Erro ao exibir forms")
        })
    }


    useEffect(() => {
        detailsPokemon()
    }, [])


    return (
        <div>
                <button onClick={goToHome}>Voltar</button>
                <button onClick={goToPokedex}>Pokedéx</button>
            <Container>
                <ImageConteiner>
                    <Img src={imageFront}/>            
                    <Img src={imageBack}/>
                </ImageConteiner>
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
                    <h4>Tipo</h4>
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
            </Container>
        </div>
    )
}

