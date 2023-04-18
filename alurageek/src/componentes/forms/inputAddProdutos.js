import React from "react";
import { ContainerInput, ContainerInputDescricao, Input2, Input3, Label, Label2 } from "./StyledInputAddProdutos";



export const InputAddProdutos = ({label ,type }) => {

    return(
        <ContainerInput>
            <Label>{label}</Label>
            <Input2  required type={type} />
        </ContainerInput>

    )

};

export const InputDescricao = ({label ,type }) => {

    return(
        <ContainerInputDescricao>
            <Label2>{label}</Label2>
            <Input3  required type={type} />
        </ContainerInputDescricao>

    )

};

