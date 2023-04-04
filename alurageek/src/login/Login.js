import React from "react";
import { Button, ButtonForm, Div, DivForm, DivList, DivLogo, Footer, InputNome, LabelNome, Main2, Nav, Section2, Span, SpanNome, SpanTextArea, Textarea } from "../home/StyleHome";
import controle from "../img/Logo/controle.png"
import lupa from "../img/Logo/lupa.png"
import { ButtonLogin, DivLogin, Inputs, Main, Section, SpanLogin } from "./StyledLogin";


export const Login = () => { 

    return (
        <Section> 
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
                    
              </Span>
            </Nav>
            <Main>
                <DivLogin> <h2>Iniciar Sessão</h2></DivLogin>

                <SpanLogin>
                    <Inputs placeholder="Escreva seu nome"/>
                    <Inputs placeholder="Escreva sua senha"/>

                    <ButtonLogin>Entrar</ButtonLogin>
                </SpanLogin>
            </Main>
            <Section2>
                <Main2>
                        <DivLogo>
                            <img src= {controle} alt="Logo "  />
                            <h4> Alura<strong>Geek</strong></h4>
                        </DivLogo>
                        <DivList>
                            <ul>
                                <li>Quem somos nós</li>
                                <li>Política de privacidade</li>
                                <li>Programa fidelidade</li>
                                <li>Nossas Lojas</li>
                                <li>Quero ser franqueado</li>
                                <li>Anuncie aqui</li>
                            </ul>
                        </DivList>
                        <DivForm>
                            <p>Fale conosco</p>
                            <SpanNome>
                                <LabelNome>Nome</LabelNome>
                                <InputNome type="text" required/>
                            </SpanNome>
                            <SpanTextArea>
                                
                            <Textarea type="text" required placeholder="Escreva sua mensagem" />
                            </SpanTextArea>
                            <ButtonForm>Enviar mensagem</ButtonForm>
                        </DivForm>
                    </Main2>
            </Section2>
            <Footer> 
                <p>Desenvolvido por Ernandes Bitencourt  <strong> 2023</strong></p>
            </Footer> 


        </Section>

    )




}