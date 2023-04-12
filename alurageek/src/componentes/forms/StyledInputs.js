import styled from "styled-components";

export const Div = styled.div`
    width: 100%;
    height: 90%;
    padding: 1px;
    display: flex;
    flex-direction: column;
    flex: 1,1;
    justify-content: space-between;


`;

export const Input = styled.input`
    width: 100%;
    height: 4em;
    border: none;
    font-size : 14px;
    box-sizing: border-box;
    border-bottom:1px solid  ${props => props.theme.Themers.borderInpurt};
    ::placeholder{
        align-items:center;
        font-size : 14px;
    }
    :focus{ 
        outline: none;
        border: none;
        font-size : 14px;
        box-sizing: border-box;
        border-bottom:1px solid  ${props => props.theme.Themers.borderInpurt};   
        
    };
   

`;