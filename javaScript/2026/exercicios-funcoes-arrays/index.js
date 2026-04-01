//Crie um novo array que contenha apenas o nome dos dogs
const pets = [
    { nome: "Lupin", raca: "Salsicha" },
    { nome: "Polly", raca: "Lhasa Apso" },
    { nome: "Madame", raca: "Poodle" },
    { nome: "Quentinho", raca: "Salsicha" },
    { nome: "Fluffy", raca: "Poodle" },
    { nome: "Caramelo", raca: "Vira-lata" },
]

const nomesDosPets = pets.map((item) => {
    return item.nome;
})

console.log(nomesDosPets);

console.log("\n");

//b) Crie um novo array apenas com os cachorros salsicha

const somenteSalsicha = pets.filter((salsichas) => {
    return salsichas.raca === "Salsicha";
});

console.log(somenteSalsicha);

console.log("\n");

/*c) Crie um novo array que possuirá mensagens para enviar para todos os clientes que são
poodles. A mensagem deve ser: "Você ganhou um cupom de desconto de 10% para tosar o/a
[NOME] !" */

const somentePoodle = pets.filter((poodles) => {
    return poodles.raca === "Poodle";
})

    .map((poodles) => {
        return `Você ganhou um cupom de desconto de 10% para tosar o/a ${poodles.nome} !`;
    });


console.log(somentePoodle);

console.log("\n----------------------------------");

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
    { nome: "Sabão em Pó Ypê", categoria: "Limpeza", preco: 10.80 }
]

//2- Crie um novo array que contenha apenas o nome de cada item
const apenasNomes = produtos.map((item) => {
    return item.nome;
});

console.log(apenasNomes);


console.log("\n----------------------------------");

/*b) Crie um novo array que contenha um objeto com o nome e o preço de cada item, aplicando 5%
de desconto em todos eles */
const produtosComDescontos = produtos.map((produto) => {
    return {
        produto: produto.nome,
        preco: produto.preco * 0.95
    }
});

console.log(produtosComDescontos);


console.log("\n----------------------------------");

//c) Crie um novo array que contenha apenas os objetos da categoria Bebidas
const apenasBebidas = produtos.filter((bebida) => {
    return bebida.categoria === "Bebidas";
});

console.log(apenasBebidas);


console.log("\n----------------------------------");

//d) Crie um novo array que contenha apenas os objetos cujo nome contenha a palavra "Ypê"
const apenasYpe = produtos.filter((itens) => {
    return itens.nome.includes("Ypê");
})

    /*e) Crie um novo array onde cada item é uma frase "Compre [NOME] por [PREÇO]". Esse array
    deve conter frases apenas dos itens cujo nome contenha a palavra "Ypê"*/
    .map((itens) => {
        return `Compre ${itens.nome} por ${itens.preco}`;
    });

console.log(apenasYpe);



console.log("\n----------------------------------");

const pokemons = [
    { nome: "Bulbasaur", tipo: "grama" },
    { nome: "Bellsprout", tipo: "grama" },
    { nome: "Charmander", tipo: "fogo" },
    { nome: "Vulpix", tipo: "fogo" },
    { nome: "Squirtle", tipo: "água" },
    { nome: "Psyduck", tipo: "água" },
]

console.log("\n----------------------------------");
//3- a) Crie um novo array que contenha apenas o nome dos pokémons em ordem alfabética

const nomesPokemons = pokemons.map((pokemon) => {
    return pokemon.nome;
})

.sort();

console.log(nomesPokemons);

console.log("\n----------------------------------");

//b) Crie um novo array apenas com os tipos dos pokémons, sem repetição

const tiposPokemons = pokemons.map((pokemon) =>{
    return pokemon.tipo;
});

const tiposUnicos =[...new Set(tiposPokemons)];

console.log(tiposUnicos);