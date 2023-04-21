import React from "react";
import {  Main, Section } from "./StyledLogin";
import { Navegador } from "../nav/Nav";
import { Footer2 } from "../footer/Footer";
import { Section2 } from "../section2/Section2";
import { Inputs } from "../forms/inputs";
import { ButtonLogin } from "../buttons/buttonLogin/ButtonLogin";
import { Link } from "react-router-dom";



export const Login = () => { 

    return (
        <Section > 
            <Navegador nome={true} />
            <Main>
                <h3>Iniciar Sessão </h3>
                <Inputs placeholder={"Escreva seu email"} type={"text"} />
                <Inputs placeholder={"Escreva sua senha"} type={"text"} />
                <ButtonLogin nomebutton={"Entrar"}/>
            </Main>
            <Section2/>
            <Footer2/>
        </Section>

    )




}