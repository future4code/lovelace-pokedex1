import styled from 'styled-components'

const Container = styled.div`
display: flex;
align-items: center;
justify-content: center;
text-align: center;`

export default function Pagination(props) {

    const previous = (props.previous) ? (<li class="page-item"><a class="page-link" href="#" onClick={() => props.getNomePokemon(props.previous)}>Anterior</a></li>) : ""
    const next = (props.next) ? (<li class="page-item"><a class="page-link" href="#" onClick={() => props.getNomePokemon(props.next)}>Próximo</a></li>) : ""

    return (
        <Container>
            <nav aria-label="Navegação de página exemplo">
                <ul class="pagination">
                    {previous}
                    {next}
                </ul>
            </nav>
        </Container>
    )

}