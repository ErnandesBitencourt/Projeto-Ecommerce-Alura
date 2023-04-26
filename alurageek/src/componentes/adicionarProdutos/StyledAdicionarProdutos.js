import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    max-width: 1200px;
    display: flex;
    flex: 1 1;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: ${props => props.theme.Themers.background};
`;

export const Form = styled.form`
    width: 100%;
    max-width: 45%;
    height: auto;
    box-sizing: border-box;
    margin-top:20px;
    display: flex;
    flex-direction: column;
    justify-content:center;

`;

export const H3 =  styled.h3`
    width: 100%;
    padding:1em;
    box-sizing: border-box;
    text-align: left;
    font-size: 25px;
    font-weight: ${props => props.theme.Themers.weightVerProdutosPrecos};
    color: ${props => props.theme.Themers.textProdutosPrecos};
`;

