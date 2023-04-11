import React from "react";

export const Forms = (props) => {

    return(
        <div>
            <label>{props.label}</label>
            <input type={props.type}/>
        </div>


    )

}