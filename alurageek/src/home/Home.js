import React from "react"
import { StarWars,Consoles,Diversos} from "../endpoints/produtos";
import controle from "../img/Logo/controle.png"


 const Home= () => {
    const starWars = {StarWars}
    const consoles  = {Consoles}
    const diversos = {Diversos}
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
                        
                    </div>
                </main>
                <main>
                    <h3>Consoles</h3>
                </main>
                <main>
                    <h3>Diversos</h3>
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