import React from "react";
import { Button } from "./StyledButtonLogin";
import { Link, useNavigate } from "react-router-dom";
import { homePage } from "../../../routes/coordenador";


export const ButtonLogin = (props) => { 
    const navigate = useNavigate()
    return (
        
         <Button onClick={()=>homePage(navigate) } >{props.nomebutton} </Button>
    )

} 

