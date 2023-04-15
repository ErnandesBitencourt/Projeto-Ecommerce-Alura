import styled from "styled-components";
import { Button } from "../componentes/buttons/buttonLogin/StyledButtonLogin";


export const ContaineGeral = styled.div`
    width: 100%;
    max-width: 1200px;
    display: flex;
    flex: 1 1;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: ${props => props.theme.Themers.background};
`;

export const Main = styled.main`
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    flex-wrap: wrap;
    padding: 4em;
    box-sizing:border-box;
   
    gap:  1em;

`;

export const SpanH3Button = styled.span`

    width: 100%;
    height: 4em;
    display: flex;
    justify-content: space-between;
    align-items: center;
   

`;
export const H3 = styled.h3 `
    font-size: 25px;
    font-weight: 700;
`;

export const ButtoAdcionarProdutos = styled.button`
    width: 12em;
    height: 4em;
    border: none;
    color: ${props=>props.theme.Themers.textPromocao};
    background-color:  ${props => props.theme.Themers.buttonsTitulos};
    padding: 5px;
    box-sizing: border-box;
    font-size: 15px;


`;

export const Div = styled.div`
    width: 100%;
    height: auto;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    box-sizing:border-box;
    gap:  1em;

`;




