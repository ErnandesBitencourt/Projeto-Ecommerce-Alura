import styled from "styled-components";


export const Section = styled.section `

    width: 100%;
    max-width: 1200px;
    height: 400px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex: 1,1;

`;

export const Main2 = styled.main`
    width: 90%;
    height: 15em;
    display: flex;
    justify-content: center;
    gap:1.5em;
    
   

`;

export const DivLogo = styled.div`
    width: 30%;
    height: 4em;
    display: flex;
    
    justify-content: flex-start;
    align-items: center;
    h4{
        color: ${props=>props.theme.Themers.buttonsTitulos};
        font-size: 25px;
        font-weight: ${props=>props.theme.Themers.weightVerProdutosPrecos};
        font-style: normal;
        margin-left: 3px;
        
    };
    strong {
        color: ${props=>props.theme.Themers.textProdutosPrecos};
        font-weight: ${props=>props.theme.Themers.weightVerProdutosPrecos};
        font-style: normal;
        
    };
    img{
        
        width: 2.5em;
        height: 2em;
    
    }

`;

export const DivList = styled.div`
    width: 25%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    position: relative;
    right: 2em;
    
    
    
    ul{
        list-style: none;
        display: flex;
        flex-direction: column;
       justify-content: first baseline;
        align-items: flex-start;
        gap: 1em;
       width: 100%;
       color: ${props=>props.theme.Themers.textProdutosPrecos};
       font-style: normal;
        font-size: 16px;
       
       
       :hover{
        cursor: pointer;
       };
    };

`;

export const DivForm = styled.div`
    width: 70%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
   
`;

export const SpanNome = styled.span`
    width: 100%;
    height: 3.5em;
    display: flex;
    flex-direction: column;
    

`;
export const LabelNome = styled.label`
    font-size: 13px;
    font-weight: ${props=>props.theme.Themers.weightTextPesquisa};
    color: ${props=>props.theme.Themers.colorTextPesquisa};
    margin-left:1em;
   
`;

export const InputNome = styled.input`
    width: 90%;
    height: 2em;
    font-size :16px ;
   border: none;
   border-bottom: solid 1px ${props=>props.theme.Themers.borderInpurt};
   margin-left:1em;
   font-size: 16px;
   font-family: 'Raleway', sans-serif;
    color:${props=>props.theme.Themers.textProdutosPrecos};
    font-weight:${props=>props.theme.Themers.weightTextPesquisa} ;

    :focus{
        
        outline: 0;
        border: none;
        border-bottom: solid 1px ${props=>props.theme.Themers.borderInpurt};
        font-size :16px ;
        color:${props=>props.theme.Themers.textProdutosPrecos};
        font-weight:${props=>props.theme.Themers.weightTextPesquisa} ;
    };
`;


export const SpanTextArea = styled.span`
    width: 90%;
    height: 3.5em;
    display: flex;
    flex-direction: column;
    margin-left:1em;

`;

export const Textarea = styled.textarea`
    width: 100%;
    height: 100%;
    border: none;
    border-bottom: solid 1px ${props=>props.theme.Themers.borderInpurt};
    font-size: 16px;
    
    
        font-family: 'Raleway', sans-serif;
        color:${props=>props.theme.Themers.textProdutosPrecos};
        font-weight:${props=>props.theme.Themers.weightTextPesquisa} ;
        font-style: normal;
        ::placeholder {
            font-size: 15px;
            font-family: 'Raleway', sans-serif;
            color:${props=>props.theme.Themers.textProdutosPrecos};
        font-weight:${props=>props.theme.Themers.weightTextPesquisa}
        }
    :focus{
        outline: 0;
        border: none;
         border-bottom: solid 1px ${props=>props.theme.Themers.borderInpurt} ;
        font-size: 16px;
        font-family: 'Raleway', sans-serif;
        
        color:${props=>props.theme.Themers.textProdutosPrecos};
        font-weight:${props=>props.theme.Themers.weightTextPesquisa} ;
       
        
    }


`;

export const ButtonForm =  styled.button`
        margin-left:1em;
        width: 11em;
        height: 3.5em;
        border: solid 1px ${props=>props.theme.Themers.buttonsTitulos};
        background-color: ${props=>props.theme.Themers.buttonsTitulos};
        color: ${props=>props.theme.Themers.textPromocao};
        font-size: 16px;
        font-weight: ${props=>props.theme.Themers.weightText};
        cursor: pointer;
        :hover{ 
        cursor: pointer;
        };
`;