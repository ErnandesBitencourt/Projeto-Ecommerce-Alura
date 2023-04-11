import styled from "styled-components";

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