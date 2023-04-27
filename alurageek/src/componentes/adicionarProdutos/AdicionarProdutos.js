import React from "react";
import { Container, Form, H3 } from "./StyledAdicionarProdutos";
import { Footer2 } from "../footer/Footer";
import { Navegador } from "../nav/Nav";
import { Section2 } from "../section2/Section2";
import { InputAddProdutos, InputDescricao } from "../forms/inputAddProdutos";
import { ButtonAdd } from "../buttons/buttonAdicionarProdutos/ButtonAdicionarProdutos";






export const AdicionarProdutos = ({urlImg,categoria,nomeProduto,preco,descricao,novoPrdt,onchageUrlImg,onchageCategoria,onchageNomeProduto,onchagePreco,onchageDescicao }) => {
    
    return(
        <Container>
           
            <Navegador nome={"Menu administrador"} />
              <Form onSubmit={novoPrdt} >
              
                <H3>Adicionar novo produto</H3>
                <InputAddProdutos valor={urlImg}  onchage={onchageUrlImg} label={"URL da imagem"} type={"text"}  />
                <InputAddProdutos valor={categoria}  onchage={onchageCategoria}  label={"Categoria"} type={"text"}  />
                <InputAddProdutos valor={nomeProduto}  onchage={onchageNomeProduto}  label={"Nome do produto"} type={"text"}/>
                <InputAddProdutos valor={preco}  onchage={onchagePreco}  label={"Preço do produto"} type={"text"}/>
                <InputDescricao valor={descricao}  onchage={onchageDescicao} label={"Descrição do produto"} type={"text"}/>
                <ButtonAdd/>  
             </Form>  
             <Section2/>    
            <Footer2/>
           
        </Container>
    )

};