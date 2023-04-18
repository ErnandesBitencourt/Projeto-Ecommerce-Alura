import styled from "styled-components";

export const ContainerInput =  styled.div`
    width: 100%;
    height: 4em;
    padding: 2em;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    
    
`;

export const Label =  styled.label`
    width: 100%;
    font-size: 12px;
    font-weight: ${props => props.theme.Themers.weightTextPesquisa};
    color: ${props => props.theme.Themers.colorTextPesquisa};
`;

export const Input2 = styled.input`
    width: 100%;
    padding:0.3em;
    box-sizing: border-box;
    border: none;
    border-bottom: 1px solid ${props=>props.theme.Themers.borderInpurt};
    font-size: 16px;
    font-weight: ${props => props.theme.Themers.weightTextPesquisa};
    color: ${props => props.theme.Themers.colorTextPesquisa};

    :focus { 
        border: none;
        border-bottom: 1px solid ${props=>props.theme.Themers.borderInpurt};
        outline: 0;
        font-size: 16px;
        font-weight: ${props => props.theme.Themers.weightTextPesquisa};
        color: ${props => props.theme.Themers.colorTextPesquisa};

    };

`;



export const ContainerInputDescricao =  styled.div`
    width: 100%;
    height: 6em;
    padding: 2em;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    
    
`;



export const Label2 =  styled.label`
    width: 100%;
    font-size: 12px;
    position: relative;
    bottom:15px;
    font-weight: ${props => props.theme.Themers.weightTextPesquisa};
    color: ${props => props.theme.Themers.colorTextPesquisa};
    
`;

export const Input3 = styled.input`
    width: 100%;
    padding:0.3em;
    box-sizing: border-box;
    border:none;
    border-bottom: 1px solid ${props=>props.theme.Themers.borderInpurt};
    font-size: 16px;
    font-weight: ${props => props.theme.Themers.weightTextPesquisa};
    color: ${props => props.theme.Themers.colorTextPesquisa};

    :focus { 
        border: none;
        border-bottom: 1px solid ${props=>props.theme.Themers.borderInpurt};
        outline: 0;
        font-size: 16px;
        font-weight: ${props => props.theme.Themers.weightTextPesquisa};
        color: ${props => props.theme.Themers.colorTextPesquisa};

    };

`;




