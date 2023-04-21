import styled from "styled-components";

export const ButtonNav =  styled.button`
    width: 12em;
    height: 3.5em;
    border: solid 1px ${props=>props.theme.Themers.buttonsTitulos};
    color: ${props=>props.theme.Themers.buttonsTitulos};
    font-weight: ${props=>props.theme.Themers.weightText};
    cursor: pointer;
    display: none;
    display: ${props => props.nome === true ? "none" : "block"};
    
    :hover {
        background-color: ${props=>props.theme.Themers.buttonsTitulos};
        transition: 1s;
        color: ${props=>props.theme.Themers.textPromocao};
    }
    
`;