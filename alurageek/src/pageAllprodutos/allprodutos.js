import React from "react";
import { useState } from "react";
import { Producti} from "../endpoints/produtos"
import { ButtoAdcionarProdutos, ContaineGeral, Div, H3, Main, SpanH3Button } from "./StyledAllprodutos";
import { Navegador } from "../componentes/nav/Nav";
import { Section2 } from "../componentes/section2/Section2";
import { Footer2 } from "../componentes/footer/Footer";
import { TodosOsProdutos } from "../endpoints/listaDeProdutos/TodosProdutos";
 

export const Allprodutos = () =>{ 
    const [allprodutos1, setAllprodutos1] = useState(Producti)

    const novo = () => {
        return(setAllprodutos1([...allprodutos1, {img :" guriComOculos" ,
            nomeProduto: "NOVOPVOOOO" , 
            preco : "R$ 930,00",}]));     
        
    };

return(
    <ContaineGeral>
        <Navegador/>
        <Main>
            <SpanH3Button>
                <H3>Todos os produtos</H3>
                <ButtoAdcionarProdutos>Adicionar produto</ButtoAdcionarProdutos>
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