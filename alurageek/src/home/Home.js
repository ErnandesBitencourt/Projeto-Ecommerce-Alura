import React from "react"
import { ContaineGeral} from "./StyleHome"
import { Navegador } from "../componentes/nav/Nav"
import { Headers } from "../componentes/header/Header"
import { Section1 } from "../componentes/section1/Section1"
import { Section2 } from "../componentes/section2/Section2"
import { Footer2 } from "../componentes/footer/Footer"



 const Home= () => {
   

    return (
       <ContaineGeral>
            <Navegador/>
            <Headers/>
            <Section1/>
            <Section2/>
             <Footer2/>
       </ContaineGeral>
    )
}

export default Home;