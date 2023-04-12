import styled from "styled-components";

export const Section =  styled.section`
    margin-top: 4em;
    width: 100%;
    max-width: 90%;
    height: auto;
    display: flex;
    flex-direction:column;
    justify-content: center;
    gap: 1em;

    main { 
        width: 100%;
        height: 25em;
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        flex-wrap: wrap;
        flex: 1 , 1 ;
        
        

        span{
        width: 100%;
        height: 3em;
        display: flex;
        justify-content: space-between;
        align-items: center;
        
       
    }
    div{
        width: 100%;
        height: 20em;
        display: flex;
        align-items: center;
        justify-content: space-around;
        
        gap: 1em;
       
    }

    };
  
`;

export const H3 = styled.h3`
    font-style: normal;
    font-size: 32px;
    line-height: 38px;
    font-weight: ${props => props.theme.Themers.weightVerProdutosPrecos};
    color: ${props=>props.theme.Themers.textProdutosPrecos};
`;

export const ButtonVerTudo = styled.button`

    display: flex;
    flex: 1,1;
    justify-content: space-between;
    align-items: center;
    width: 120px;
    height: 2em;
    font-size: 19px;
    font-weight: ${props => props.theme.Themers.weightPromocao};
    color: ${props => props.theme.Themers.buttonsTitulos};
    border: none;
    :hover{
        cursor: pointer;
    }
    img{
        width: 1.5em;
        height: 1.5em;
    }

`;  