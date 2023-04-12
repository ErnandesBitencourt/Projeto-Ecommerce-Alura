import React from "react";
import { Div, Input } from "./StyledInputs";

export const Inputs = (props) => {

    return(
        <Div>
            <Input type={props.type} placeholder={props.placeholder} />
        </Div>
    )

};


export const InputAddProdutos = (props) => {

    return(
        <div>
            <label>{props.label}</label>
            <input type={props.type} placeholder={props.placeholder}/>
        </div>

    )

};