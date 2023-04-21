import React, { useState } from "react";
import { ButtonNav } from "./StyledButtonNav";
import { useNavigate} from "react-router-dom";
import { loginPage } from "../../../routes/coordenador";



export const ButtonLoginNav = ({nome}) => {
    const navigate = useNavigate();

    return(
        <ButtonNav nome={nome} onClick={()=> loginPage(navigate) } > {nome} </ButtonNav>
    )

}