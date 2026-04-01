console.log("Metodo callback");
//1- Faça um código que determine se um número é ímpar usando callback
const verificaImpar = (numero,imprimir) => {
    if(numero % 2 !== 0){
        imprimir(numero);
    }
}

verificaImpar (5, (valor) => {
    console.log("Esse número é ímpar:",valor);
});

console.log("\n\n");
console.log("Metodo map");
//tenha uma lista de numbers e transforme-a numa nova lista contendo strings usando map
const lista = ["Arroz","Carne","Frango","Feijão"];
//primeiro parametro é o item e o segundo parametro é o indice
const listaString = lista.map ((valor,index) =>{
    return `o indice ${index} é o item ${valor}`;
});

console.log(listaString);

console.log("\n\n");

console.log("Metodo filter");

//Faça uma lista de números e crie dois novos arrays Um só com números maiores que 10
//○ Outro só com números pares usando filter
const array = [1,5,10,20,12,33,25,4];

const arrayFiltrarMaior = array.filter ((valor) =>{
    return valor > 10;
})

console.log(arrayFiltrarMaior);

const filtrarPar = array.filter((item) => {
    return item % 2 === 0;
})

console.log(filtrarPar);

console.log("\n\n");
console.log("Filter categoria limpeza ");
//retorne um novo array com o nome dos produtos da categoria Limpeza
const produtos = [
 { nome: "Alface Lavada", categoria: "Hortifruti", preco: 2.5 },
 { nome: "Guaraná 2l", categoria: "Bebidas", preco: 7.8 },
 { nome: "Veja Multiuso", categoria: "Limpeza", preco: 12.6 },
 { nome: "Dúzia de Banana", categoria: "Hortifruti", preco: 5.7 },
 { nome: "Leite", categoria: "Bebidas", preco: 2.99 },
 { nome: "Cândida", categoria: "Limpeza", preco: 3.30 },
 { nome: "Detergente Ypê", categoria: "Limpeza", preco: 2.2 },
 { nome: "Vinho Tinto", categoria: "Bebidas", preco: 55 },
 { nome: "Berinjela kg", categoria: "Hortifruti", preco: 8.99 },
 { nome: "Sabão em Pó", categoria: "Limpeza", preco: 10.80 }
]

const apenasProdutosLimpeza = produtos.filter((produto) => {
    return produto.categoria === "Limpeza";
})

console.log(apenasProdutosLimpeza);