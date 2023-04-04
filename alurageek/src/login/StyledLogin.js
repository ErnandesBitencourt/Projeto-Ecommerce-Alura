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
    height: 17em;
    margin-top:3em;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    
`;
export const DivLogin = styled.div`
    display:flex;
    flex-direction: column;
    width: 100%;
    height: 3em;
    align-items: center;
    h2{
        color:  ${props => props.theme.Themers.textProdutosPrecos};
        font-size: 18px ;
        font-weight:  ${props => props.theme.Themers.weightPromocao};
    } 

`;

export const SpanLogin = styled.span`
    width: 100%;
    height: 90%;
    padding: 1px;
    display: flex;
    flex-direction: column;
    flex: 1,1;
    justify-content: space-between;


`;

export const Inputs = styled.input`
    width: 100%;
    height: 4em;
    border: none;
    border-bottom:1px solid  ${props => props.theme.Themers.borderInpurt};
    ::placeholder{
        align-items:center;
        font-size : 14px;
    }
    :focus{ 
        outline: none;
        border: none;
        border-bottom:1px solid  ${props => props.theme.Themers.borderInpurt};
        
     
        
    }
   


`;

export const ButtonLogin = styled.button `
    width: 100%;
    height: 5em;
    color: ${props=>props.theme.Themers.textPromocao};
    background-color:  ${props => props.theme.Themers.buttonsTitulos};
    border: none;
    :hover{
        cursor: pointer;
    }

`


