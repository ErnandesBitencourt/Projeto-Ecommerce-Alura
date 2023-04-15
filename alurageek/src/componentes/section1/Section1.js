import { ListaDeProdutos5 } from "../../endpoints/listaDeProdutos/listaProdutos"
import {  Producti } from "../../endpoints/produtos"
import { ButtonVerTudo, H3, Section } from "./StyledSection1"
import seta from "../../img/Logo/seta.png"

export const Section1 = () => {
    return (
        <Section>
                <main>

                    <span>
                         <H3>Star Wars</H3>
                        <ButtonVerTudo>Ver tudo <img src={ seta } alt="seta esquerda" /> </ButtonVerTudo>
                    </span>
                    <div><ListaDeProdutos5 produtos={Producti.filter(produtos => produtos.setor==="StarWars")} /></div>
                </main>
                <main>
                    <span>
                        <H3>Consoles</H3>
                        <ButtonVerTudo>Ver tudo <img src={ seta } alt="seta esquerda" /> </ButtonVerTudo>
                    </span>
                    
                    <div><ListaDeProdutos5 produtos={Producti.filter(produtos => produtos.setor==="Consoles")}/></div>
                    
                </main>
                <main>
                    <span>
                        <H3>Diversos</H3>
                        <ButtonVerTudo>Ver tudo <img src={ seta } alt="seta esquerda" /> </ButtonVerTudo>
                    </span>
                    
                    <div><ListaDeProdutos5 produtos={Producti.filter(produtos => produtos.setor==="Diversos")}/></div>
                </main>

            </Section>


    )
}