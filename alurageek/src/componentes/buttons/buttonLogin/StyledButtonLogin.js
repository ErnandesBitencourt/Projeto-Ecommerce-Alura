import styled from "styled-components";

export const Button = styled.button `
    width: 100%;
    height: 8em;
    color: ${props=>props.theme.Themers.textPromocao};
    background-color:  ${props => props.theme.Themers.buttonsTitulos};
    border: none;
    cursor: pointer;
    padding:1.5em;
    box-sizing: border-box;
   
`;