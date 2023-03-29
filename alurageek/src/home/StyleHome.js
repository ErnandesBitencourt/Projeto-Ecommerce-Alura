import styled from "styled-components";
import promocoes1 from "../img/promocoes/promocoes1.png"

const imgPromocao = promocoes1

export const ContaineGeral = styled.div`
    width: 100%;
    max-width: 1200px;
    border: solid 2px black;
    display: flex;
    flex: 1 1;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: ${props => props.theme.Themers.background};
`;

export const Nav = styled.nav`
    width: 100%;
    height: 6em;
    display: flex;
    justify-content: center;
    flex: 1,1 ;
   
`;
export const Span = styled.span`
    width: 100%;
    max-width: 90%;
    height: 100%;
    display: flex;
    justify-content: space-between;
    flex: 1, 1 ;
    align-items: center;
    

`;

export const Div = styled.div`
    width: 100%;
    max-width: 35em;
    height: 100%;
    display: flex;
    justify-content:space-between;
    flex: 1,1 ;
    align-items: center;
    

    span { 
        width: 100%;
        max-width: 10em;
        height: 100%;
        display: flex;
        justify-content: space-between;
        flex: 1,1 ;
        align-items: center;
        
    };
    img { 
        width: 2.5em;
        height: 2em;
    };
    h1{
        color: ${props=>props.theme.Themers.buttonsTitulos};
        
        
    };
    strong {
        color: ${props=>props.theme.Themers.textProdutosPrecos};
        
        
    };

    div { 
        width: 20em;
        height: 2.8em;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding-left:5px;
        padding-right: 5px;
       
        input { 
        width: 100%;
        height: 2.8em;
        border: none;
        border-radius: 8px;
        font-size: 15px;
        color: ${props=>props.theme.Themers.colorTextPesquisa};
        :focus{
            outline: none;
            border: none;
            border-radius: 8px;
            font-size: 15px;
            color: ${props=>props.theme.Themers.colorTextPesquisa};
            
            
        };
    };

    img{ 
        width: 1.3em;
        height: 1.2em;
        
    };
        
    };

`;

export const Button =  styled.button`
    width: 10em;
    height: 3.5em;
    border: solid 1px ${props=>props.theme.Themers.buttonsTitulos};
    color: ${props=>props.theme.Themers.buttonsTitulos};
    font-weight: ${props=>props.theme.Themers.weightText};
    
    :hover {
        background-color: ${props=>props.theme.Themers.buttonsTitulos};
        transition: 1s;
        color: ${props=>props.theme.Themers.textPromocao};
    }
    cursor: pointer;
`;


export const Header = styled.header`
    width: 100%;
    height: 22em;
    
    background-image:url(${imgPromocao});
    background-repeat:no-repeat;
    background-repeat:round;
    display: flex;
    flex-direction: column;
    flex: 1 ,1 ;
    justify-content: center;
    align-items: center;

`;

export const DivHeader =  styled.div`
    width: 100%;
    max-width: 90%;
    height: 15em;
    display: flex;
    flex-direction: column;
    flex: 1,1;
    justify-content: flex-end;
    
    margin-top: 3em;
    
    h2{ 
        font-size: 40px;
        color: ${props=>props.theme.Themers.textPromocao};
        font-weight: ${props=>props.theme.Themers.weightPromocao};;
    };

    p{
        font-size: 20px;
        color: ${props=>props.theme.Themers.textPromocao};
        font-weight: ${props=>props.theme.Themers.weightPromocao};
        };

    button{ 
        width: 11em;
        height: 4em;
        border: solid 1px ${props=>props.theme.Themers.buttonsTitulos};
        background-color: ${props=>props.theme.Themers.buttonsTitulos};
        color: ${props=>props.theme.Themers.textPromocao};
  
        font-weight: ${props=>props.theme.Themers.weightText};
        :hover{ 
        cursor: pointer;
        
    }
        
    };
    

`;

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