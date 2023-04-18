import React from "react";
import { Div, Input } from "./StyledInputs";

export const Inputs = (props) => {

    return(
        <Div>
            <Input type={props.type} placeholder={props.placeholder} />
        </Div>
    )

};


