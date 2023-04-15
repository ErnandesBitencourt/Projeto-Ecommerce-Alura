import React from "react";

import { ButtonVerProdutos, H4, Img, Main,P,Span } from "./StyledTodosProdutos";



export const TodosOsProdutos = (props) => { 

    return (
        <>
            {
             props.allprodutos.map((lista)=>{
                    return (
                        <Main key={lista.nomeProduto}>
                            <Img src={lista.img} alt="foto do produto" />
                            <Span>
                                <H4>{lista.nomeProduto}</H4>
                                <P>{lista.preco}</P>
                                <ButtonVerProdutos>Ver produto</ButtonVerProdutos>
                            </Span>
                        </Main>
                        )
                })
             }
    
        </>
    )

};