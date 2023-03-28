import React from "react"
import {listProdutosStarWars,listProdutosConsoles,listProdutosDiversos } from "../endpoints/listaProdutos"
import controle from "../img/Logo/controle.png"
import lupa from "../img/Logo/lupa.png"
import { Button, ContaineGeral, Div, DivHeader, Header, Nav, Section, Span } from "./StyleHome"

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
                    <h3>Star Wars</h3>
                    <div>{listProdutosStarWars}</div>
                </main>
                <main>
                    <h3>Consoles</h3>
                    {listProdutosConsoles}
                </main>
                <main>
                    <h3>Diversos</h3>
                    {listProdutosDiversos}
                </main>

            </Section>
            <section>
                <main>
                        <div>
                            <img src= {controle} alt="Logo "  />
                            <h4>AluraGeek</h4>
                        </div>
                        <div>
                            <ul>
                                <li>Qeum somos nós</li>
                                <li>Política de privacidade</li>
                                <li>Programa fidelidade</li>
                                <li>Nossas Lojas</li>
                                <li>Quero ser franqueado</li>
                                <li>Anuncie aqui</li>
                            </ul>
                        </div>
                        <div>
                            <p>Fale conosco</p>
                            <span>
                                <label>Nome</label>
                                <input type="text" required/>
                            </span>
                            <span>
                                <label>Escreva sua mensagem</label>
                            <textarea/>
                            </span>
                            <button>Enviar mensagem</button>
                        </div>
                    </main>
            </section>
            <footer> 
                <p>Desenvolvido por Ernandes Bitencourt 2023</p>
            </footer>   
       </ContaineGeral>
    )
}

export default Home;