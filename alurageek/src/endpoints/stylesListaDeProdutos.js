import styled from "styled-components";
import { Button } from "../home/StyleHome";

export const Container = styled.div`

    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    flex:1,1;
   
    


    img{ 
        margin-top: 10px;
        width: 90%;
        height: 160px;
        position: relative;
        top: 1px;
        
    }


`;
export const Span = styled.header`
         
        margin-bottom: 10px;
        width: 90%;
        height: 6em;
        display: flex;
        flex-wrap:nowrap;
        flex-direction: column;
        align-items: flex-start;
        justify-content: space-around;
        flex: 1,1;
        position: relative;
        bottom: 4px;
        

`;

export const P1NomeProduto = styled.p`
        position: relative;
        bottom:  5px;
        font-size: 14px;
        font-weight: ${props=>props.theme.Themers.weightText};
        
`;

export const P2PrecoProduto = styled.p`
        position: relative;
        bottom:  25px;
        font-style: normal;
        font-weight: 700;
        font-size: 16px;
        line-height: 19px;
        color: ${props=>props.theme.Themers.textProdutosPrecos};
`;

export const ButtonVerProduto = styled.a`
       
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