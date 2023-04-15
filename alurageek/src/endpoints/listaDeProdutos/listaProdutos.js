
import { ButtonVerProduto, Container, P1NomeProduto, P2PrecoProduto, Span } from "./stylesListaDeProdutos";




export const ListaDeProdutos5= (props) => { 

    return (
        <>
            {
             props.produtos.map((lista)=>{
                    return (
                        <Container key={lista.nomeProduto}>
                            <img src={lista.img} alt="foto do produto" />
                            <Span>
                                <P1NomeProduto >{lista.nomeProduto}</P1NomeProduto>
                                <P2PrecoProduto>{lista.preco}</P2PrecoProduto>
                                <ButtonVerProduto>Ver produto</ButtonVerProduto>
                                </Span>
                        </Container>
                        )
                })
             }
    
        </>
    )

};


