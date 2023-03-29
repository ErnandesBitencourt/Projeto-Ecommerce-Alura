import { StarWars,Consoles,Diversos} from "./produtos";
import { ButtonVerProduto, Container, P1NomeProduto, P2PrecoProduto, Span } from "./stylesListaDeProdutos";




export const listProdutosStarWars = StarWars.map((lista)=>{
    return (
        <Container>
            <img src={lista.img} alt="foto do produto" />
            <Span>
                <P1NomeProduto >{lista.nomeProduto}</P1NomeProduto>
                    <P2PrecoProduto>{lista.preco}</P2PrecoProduto>
                <ButtonVerProduto>Ver produto</ButtonVerProduto>
            </Span>
        </Container>
    )
});

export const listProdutosConsoles = Consoles.map((lista)=>{
    return (
        <Container>
            <img src={lista.img} alt="foto do produto" />
            <Span>
                <P1NomeProduto> {lista.nomeProduto}</P1NomeProduto>
                <P2PrecoProduto>{lista.preco} </P2PrecoProduto>
                <ButtonVerProduto>Ver produto</ButtonVerProduto>
            </Span>
        </Container>
    )
});
export const listProdutosDiversos = Diversos.map((lista)=>{
    return (
        <Container>
            <img src={lista.img} alt="foto do produto" />
            <Span>
                <P1NomeProduto> {lista.nomeProduto}</P1NomeProduto>
                <P2PrecoProduto>{lista.preco} </P2PrecoProduto>
                <ButtonVerProduto>Ver produto</ButtonVerProduto>
            </Span>
        </Container>
    )
});



