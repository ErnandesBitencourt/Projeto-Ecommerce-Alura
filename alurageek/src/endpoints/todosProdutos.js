import React from "react"
import { useState } from "react"
import { listProdutosDiversos,listProdutosStarWars,listProdutosConsoles} from ".listaProdutos/"

const [allprodutos, setAllprodutos] = useState([listProdutosStarWars,listProdutosConsoles,listProdutosDiversos])

console.log(allprodutos)