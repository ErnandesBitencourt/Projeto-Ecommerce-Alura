import { StarWars,Consoles,Diversos} from "./produtos";


export const listProdutosStarWars = StarWars.map((lista)=>{
    return (
        <div>
            <img src={lista.img} alt="foto do produto" />
            <p> {lista.nomeProduto}</p>
            <span>{lista.preco} </span>
        </div>
    )
});

export const listProdutosConsoles = Consoles.map((lista)=>{
    return (
        <div>
            <img src={lista.img} alt="foto do produto" />
            <p> {lista.nomeProduto}</p>
            <span>{lista.preco} </span>
        </div>
    )
});
export const listProdutosDiversos = Diversos.map((lista)=>{
    return (
        <div>
            <img src={lista.img} alt="foto do produto" />
            <p> {lista.nomeProduto}</p>
            <span>{lista.preco} </span>
        </div>
    )
});



