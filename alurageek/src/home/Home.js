import React from "react"
import {listProdutosStarWars,listProdutosConsoles,listProdutosDiversos } from "../endpoints/listaProdutos"
import controle from "../img/Logo/controle.png"
import styled from "styled-components"

 const Home= () => {
    const Dasda = styled.h1`
        color: ${props => props.theme.Themers.buttonsTitulos};
    
    `

    return (
       <div>
            <header>
                <div>
                    <img src={controle} alt="logo" />
                    <Dasda>
                        AluraGeek
                    </Dasda>
                </div>
                <input type="text" placeholder="Pesquisar"/>
                <button>Login</button>
            </header>
            <section>
                <h2>Dezembro Promocional</h2>
                <p>Produtos selecionados com 33% de desconto</p>
                <button>Ver Consoles</button>
            </section>
            <section>
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

            </section>
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
       </div>
    )
}

export default Home;