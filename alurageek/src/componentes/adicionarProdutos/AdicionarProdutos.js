import React, { useState } from "react";
import { Container, Form, H3 } from "./StyledAdicionarProdutos";
import { Footer2 } from "../footer/Footer";
import { Navegador } from "../nav/Nav";
import { Section2 } from "../section2/Section2";
import { InputAddProdutos, InputDescricao } from "../forms/inputAddProdutos";
import { ButtonAdd } from "../buttons/buttonAdicionarProdutos/ButtonAdicionarProdutos";
import { Producti } from "../../endpoints/produtos";





export const AdicionarProdutos = () => {
    
   
   const [allprodutos1, setAllprodutos1] = useState(Producti);
    const [ urlImg, setUrlImg] = useState("");
    const [categoria,setCategoria]=useState("");
    const[nomeProduto,setNomeProduto] = useState("");
    const [preco, setPreco] = useState("");
    const [descricao,setDescricao] = useState("")
    
  

    const onchageUrlImg= (event) => {
        setUrlImg(event.target.value)
    };
    const onchageCategoria = (event) => {
        setCategoria(event.target.value)
    };
    const onchageNomeProduto = (event) => { 
        setNomeProduto(event.target.value)
    };
    const onchagePreco = (event) => {
        setPreco(event.target.value)
    };
    const onchageDescicao = (event) => {
        setDescricao(event.target.value)
    };
    

    const novoPrdt = (event) => {
        event.preventDefault()
        return(setAllprodutos1([...allprodutos1, 
            {img :urlImg ,
            nomeProduto: nomeProduto , 
            preco : `R$ ${preco}`,    
            descricao : descricao,
            setor : categoria
        
        }] ),
         alert("Produto adcionado com sucesso"),
            setUrlImg(" "),
            setCategoria(" "),
            setNomeProduto(" "),
            setPreco(""),
            setDescricao("")
            
        );     
        
    };
    

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

}