import React from "react";
import { useState } from "react";
import { Allprodutos2} from "../endpoints/produtos"


export const Allprodutos = () =>{ 
    const [allprodutos1, setAllprodutos1] = useState(Allprodutos2)

    const protudos = allprodutos1.map((produtos12)=>{
            return(
               <p>{produtos12.nomeProduto}</p>
            )
    })
    console.log(protudos)

    const novo = () => {
        return(setAllprodutos1([...allprodutos1, {img :" guriComOculos" ,
            nomeProduto: "NOVOPVOOOO" , 
            preco : "R$ 930,00",}]));     
        
    };

return(
    <>
        <h1>All produtos</h1>
        {protudos }
        <button onClick={()=> novo()}  >novo</button>
    </>
)


}