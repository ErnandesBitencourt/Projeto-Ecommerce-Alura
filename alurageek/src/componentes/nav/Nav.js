import React from "react";
import {Div, Nav, Span } from "./StyledNav";
import lupa from "../../img/Logo/lupa.png"
import controle from "../../img/Logo/controle.png"
import { ButtonLoginNav } from "../buttons/buttonLoginNav/ButtonLoginNv";
import { homePage } from "../../routes/coordenador";
import { useNavigate } from "react-router-dom";




export const Navegador = ({nome}) => { 
 const navigate = useNavigate()
return (
    <Nav>
    <Span >
      <Div>
          <span onClick={()=>homePage(navigate)} >
              <img src={controle} alt="logo" />
              <h1> Alura<strong>Geek</strong></h1>
          </span>
          <div>
              <input type="text" placeholder="O que deseja encontrar?"/>
              <img src={lupa} alt="Lupa de pesquisa" />
          </div>
       </Div>
        <ButtonLoginNav nome = {nome}  /> 

         
    </Span>
  </Nav>
)


}