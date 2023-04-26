import React from "react"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "../home/Home"
import { Allprodutos } from "../pageAllprodutos/allprodutos"
import { AdicionarProdutos } from "../componentes/adicionarProdutos/AdicionarProdutos"
import { Login } from "../componentes/login/Login"
export const RouterPages = () => {


    return(

        <BrowserRouter>
        <Routes>
          <Route index element = {<Home/>} />
          <Route path="/allProdutos" element ={<Allprodutos/> }/>
          <Route path="/login" element ={<Login  />} />
          <Route path="/adcProdutos" element ={<AdicionarProdutos/> }/>
          <Route path="/*" element = { <div><h1>Pagina não encontrada</h1></div>} />
        </Routes>
      </BrowserRouter>

    )


}