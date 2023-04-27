import React from "react";
import { ButtoAdcionarProdutos, ContaineGeral, Div, H3, Main, SpanH3Button } from "./StyledAllprodutos";
import { Navegador } from "../componentes/nav/Nav";
import { Section2 } from "../componentes/section2/Section2";
import { Footer2 } from "../componentes/footer/Footer";
import { TodosOsProdutos } from "../endpoints/listaDeProdutos/TodosProdutos";
import { useNavigate } from "react-router-dom";
import { addProdutosPage } from "../routes/coordenador";
 

export const Allprodutos = ({allprodutos1}) =>{ 

    const navigate = useNavigate()



return(
    <ContaineGeral>
        <Navegador nome={true}  />
        <Main>
            <SpanH3Button>
                <H3>Todos os produtos</H3>
                <ButtoAdcionarProdutos onClick={()=> addProdutosPage(navigate)}  >Adicionar produto</ButtoAdcionarProdutos>
            </SpanH3Button>
            <Div>
                <TodosOsProdutos allprodutos={allprodutos1} />
            </Div>
        </Main>
        <Section2/>
        <Footer2/>
    </ContaineGeral>
)


}