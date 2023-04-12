import styled from "styled-components";

export const Footer1 = styled.footer`
    width: 100%;
    max-width: 1200px;
    height: 7em;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 1em;
    p{ 
        width :18em ;
        align-items: center;
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        font-style: 16px;
        color: ${props=>props.theme.Themers.textProdutosPrecos};
        font-weight: ${props=>props.theme.Themers.weightText};
    };
    strong{
        color: ${props=>props.theme.Themers.textProdutosPrecos};
        font-weight: ${props=>props.theme.Themers.weightText};
    }

`;