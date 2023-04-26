import React from "react";
import { ContainerInput, ContainerInputDescricao, Input2, Input3, Label, Label2 } from "./StyledInputAddProdutos";



export const InputAddProdutos = ({label ,type, valor , onchage }) => {

    return(
        <ContainerInput>
            <Label>{label}</Label>
            <Input2  required value={valor} onChange={onchage}  type={type} />
        </ContainerInput>

    )

};

export const InputDescricao = ({label ,type ,valor , onchage}) => {

    return(
        <ContainerInputDescricao>
            <Label2>{label}</Label2>
            <Input3   value={valor} onChange={onchage} required type={type} />
        </ContainerInputDescricao>

    )

};

