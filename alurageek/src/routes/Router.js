import React, { useState } from "react"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "../home/Home"
import { Allprodutos } from "../pageAllprodutos/allprodutos"
import { AdicionarProdutos } from "../componentes/adicionarProdutos/AdicionarProdutos"
import { Login } from "../componentes/login/Login"
import { Producti } from "../endpoints/produtos"


export const RouterPages = () => {

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
          preco : `R$ ${preco},00`,    
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

        <BrowserRouter>
        <Routes>
          <Route index element = {<Home/>} />
          <Route path="/allProdutos" element ={<Allprodutos allprodutos1={allprodutos1}   /> }/>
          <Route path="/login" element ={<Login  />} />
          <Route path="/adcProdutos" element ={<AdicionarProdutos 
            urlImg={urlImg} categoria={categoria} nomeProduto={nomeProduto}
            preco={preco} descricao={descricao} onchageUrlImg={onchageUrlImg}
            onchageCategoria={onchageCategoria}  onchageNomeProduto={onchageNomeProduto} 
            onchagePreco={onchagePreco} onchageDescicao={onchageDescicao}  novoPrdt={novoPrdt}
          /> }/>
          <Route path="/*" element = { <div><h1>Pagina não encontrada</h1></div>} />
        </Routes>
      </BrowserRouter>

    )


}