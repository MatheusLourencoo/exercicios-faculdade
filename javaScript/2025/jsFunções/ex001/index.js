/*Crie uma função que:
● Receba um nome
● Imprima no console a frase `Olá, [nome]!`
● Invoque-a com 3 nomes diferentes */

function imprimirNome(nome){
    console.log(`Ola, ${nome}!`);
}

imprimirNome("Júlia");
imprimirNome("Rafael");
imprimirNome("Matheus");

let nomeUsuario = prompt("Digite o seu nome: ");

imprimirNome(nomeUsuario);