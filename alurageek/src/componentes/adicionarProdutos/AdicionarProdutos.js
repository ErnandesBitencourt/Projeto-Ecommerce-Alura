import React from "react";
import { Container, Form, H3 } from "./StyledAdicionarProdutos";
import { Footer2 } from "../footer/Footer";
import { Navegador } from "../nav/Nav";
import { Section2 } from "../section2/Section2";
import { InputAddProdutos, InputDescricao } from "../forms/inputAddProdutos";
import { ButtonAdd } from "../buttons/buttonAdicionarProdutos/ButtonAdicionarProdutos";



export const AdicionarProdutos = () => {


    return(
        <Container>
            <Navegador nome={"Menu administrador"} />
              <Form>
                <H3>Adicionar novo produto</H3>
                <InputAddProdutos label={"URL da imagem"} type={"text"}  />
                <InputAddProdutos label={"Categoria"} type={"text"}  />
                <InputAddProdutos label={"Nome do produto"} type={"text"}/>
                <InputAddProdutos label={"Preço do produto"} type={"text"}/>
                <InputDescricao label={"Descrição do produto"} type={"text"}/>
                <ButtonAdd />
             </Form>  
             <Section2/>    
            <Footer2/>
        </Container>
    )

}