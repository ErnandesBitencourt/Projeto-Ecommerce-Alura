import styled from "styled-components";

export const ContainerButtonadd = styled.div`
    width: 100%;
    height: 5em ;
    padding: 1em;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    justify-content: center;
`

export const Buttonadd = styled.button`
    width: 100%;
    height: 100% ;
    padding: 1em;
    box-sizing: border-box;
    text-align: center;
    border: none;
    cursor: pointer;
    background-color: ${props => props.theme.Themers.buttonsTitulos};
    color:  ${props => props.theme.Themers.textPromocao} ;
    font-size: 16px;
    font-weight: ${props => props.theme.Themers. weightTextPesquisa};
`