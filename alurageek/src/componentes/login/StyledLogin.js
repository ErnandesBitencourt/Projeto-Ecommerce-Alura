import styled from "styled-components";


export const Section = styled.section`
    width: 100%;
    max-width: 1200px;
    height: auto;
    display: flex;
    flex: 1 1;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: ${props => props.theme.Themers.background};
    
`;



export const Main =  styled.main`
    width: 100%;
    max-width : 25em;
    height: 18em;
    margin-top:3em;
    padding: 10px;
    padding-bottom: 10px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    box-sizing: border-box;
    h3{
        color:  ${props => props.theme.Themers.textProdutosPrecos};
        font-size: 18px ;
        font-weight:  ${props => props.theme.Themers.weightPromocao};
    } 
    
`;



