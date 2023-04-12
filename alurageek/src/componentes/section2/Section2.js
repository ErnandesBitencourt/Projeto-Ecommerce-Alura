import React from "react"
import controle from "../../img/Logo/controle.png"
import { ButtonForm, DivForm, DivList, DivLogo, InputNome, LabelNome, Main2, Section, SpanNome, SpanTextArea, Textarea } from "./StyledSection2"

 
 export const Section2 = () => {

    return (

        <Section>
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
    </Section>

    )

 }