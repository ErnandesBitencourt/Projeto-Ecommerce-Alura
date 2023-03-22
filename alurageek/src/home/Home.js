import React from "react"
import {listProdutosStarWars,listProdutosConsoles,listProdutosDiversos } from "../endpoints/listaProdutos"
import controle from "../img/Logo/controle.png"


 const Home= () => {

    return (
       <div>
            <header>
                <div>
                    <img src={controle} alt="logo" />
                    <h1>
                        AluraGeek
                    </h1>
                </div>
                <input type="text" placeholder="Pesquisar"/>
                <button>Login</button>
            </header>
            <section>
                <main>
                    <h3>Star Wars</h3>
                    <div>
                     {listProdutosStarWars}
                    </div>
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
            </section>
            <footer> 
            </footer>   
       </div>
    )
}

export default Home;