import styled from "styled-components";


export const Main =  styled.main ` 
    width: 100%;
    max-width: 10em;
    height: 17em ;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 5px;
    box-sizing: border-box;
    

`;
export const Img =  styled.img`
    width: 100%;
    height: 10em;

`;

export const Span = styled.span`
         
        width: 100%;
        height: 6em;
        display: flex;
        flex-wrap:nowrap;
        flex-direction: column;
        align-items: flex-start;
        justify-content: space-around;
        flex: 1,1;
        padding: 5px;
        box-sizing: border-box;
        
`;

export const H4  = styled.h4`
        position: relative;
        bottom:  5px;
        font-size: 14px;
        font-weight: ${props=>props.theme.Themers.weightText};
        
`;

export const P = styled.p`
        position: relative;
        bottom:  25px;
        font-style: normal;
        font-weight: 700;
        font-size: 16px;
        line-height: 19px;
        color: ${props=>props.theme.Themers.textProdutosPrecos};
`;

export const ButtonVerProdutos = styled.a`
       
        position: relative;
        bottom:  28px;
        border: none;
        text-align: left;
        font-size: 16px;
        font-weight: ${props=>props.theme.Themers.weightPromocao};
        color: ${props=>props.theme.Themers.buttonsTitulos};
        :hover{ 
            cursor: pointer;
        }
`;