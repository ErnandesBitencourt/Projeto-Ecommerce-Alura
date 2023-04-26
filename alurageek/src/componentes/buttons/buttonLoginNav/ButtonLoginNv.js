import React from "react";
import { ButtonNav } from "./StyledButtonNav";
import { useNavigate} from "react-router-dom";
import { loginPage,allProdutosPage } from "../../../routes/coordenador";



export const ButtonLoginNav = ({nome}) => {
    const navigate = useNavigate();

    return(
        <ButtonNav nome={nome} onClick={ nome === "Login" ? ()=> loginPage(navigate) : ()=> allProdutosPage(navigate) } > {nome} </ButtonNav>
    )

}