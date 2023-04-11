import React from "react";
import { Button, Div, Nav, Span } from "./StyledNav";
import lupa from "../../img/Logo/lupa.png"
import controle from "../../img/Logo/controle.png"


export const Navegador = () => { 
return (
    <Nav>
    <Span>
      <Div>
          <span>
              <img src={controle} alt="logo" />
              <h1> Alura<strong>Geek</strong></h1>
          </span>
          <div>
              <input type="text" placeholder="O que deseja encontrar?"/>
              <img src={lupa} alt="Lupa de pesquisa" />
          </div>
       </Div>
          <Button>Login</Button>
    </Span>
  </Nav>
)

}