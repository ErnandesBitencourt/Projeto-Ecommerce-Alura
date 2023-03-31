import React from "react"
import {listProdutosStarWars,listProdutosConsoles,listProdutosDiversos } from "../endpoints/listaProdutos"
import controle from "../img/Logo/controle.png"
import lupa from "../img/Logo/lupa.png"
import { Button, ButtonForm, ButtonVerTudo, ContaineGeral, Div, DivForm, DivHeader, DivList, DivLogo, Footer, H3, Header, InputNome, LabelNome, Main2, Nav, Section, Section2, Span, SpanNome, SpanTextArea, Textarea } from "./StyleHome"
import seta from "../img/Logo/seta.png"

 const Home= () => {
   

    return (
       <ContaineGeral>
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
            <Header>
                <DivHeader>
                    <h2>Dezembro Promocional</h2>
                    <p>Produtos selecionados com 33% de desconto</p>
                    <button>Ver Consoles</button>
                </DivHeader>
            </Header>
            <Section>
                <main>
                    <span>
                        <H3>Star Wars</H3>
                        <ButtonVerTudo>Ver tudo <img src={ seta } alt="seta esquerda" /> </ButtonVerTudo>
                    </span>
                    <div>{listProdutosStarWars}</div>
                </main>
                <main>
                    <span>
                        <H3>Consoles</H3>
                        <ButtonVerTudo>Ver tudo <img src={ seta } alt="seta esquerda" /> </ButtonVerTudo>
                    </span>
                    
                    <div>{listProdutosConsoles}</div>
                </main>
                <main>
                    <span>
                        <H3>Diversos</H3>
                        <ButtonVerTudo>Ver tudo <img src={ seta } alt="seta esquerda" /> </ButtonVerTudo>
                    </span>
                    
                    <div>{listProdutosDiversos}</div>
                </main>

            </Section>
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
       </ContaineGeral>
    )
}

export default Home;