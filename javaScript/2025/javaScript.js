// Escreva um programa que peça o nome de uma pessoa, depois o sobrenome. 
// Por fim, faça com que ele cumprimente a pessoa usando seu nome completo.

/*let nome = prompt("Digite o seu nome: ");
let sobreNome = prompt("Digite o seu sobrenome: ");
let nomeCompleto = nome + ' ' + sobreNome; 

alert("Olá, " + nomeCompleto + " !"); */

//Escreva um programa que pergunte pelo número favorito de uma pessoa.
//Some um ao número, e sugira o resultado como um número favorito
//muito melhor.

/*let numero = prompt("Digite o seu numero preferido");
let numeroFavorito = Number(numero) + 1;

alert('Esse número é muito melhor: ' + numeroFavorito ); */

//Faça um algoritmo que leia um número e escreva seu sucessor e seu antecessor.

/*let numero = prompt('Digite um número');
let antecessor = Number(numero) - 1;
let sucessor = Number(numero) + 1;

alert("Antecessor: " + antecessor + " Sucessor: " + sucessor); */

//Faça um algoritmo que possa entrar com o saldo de uma aplicação e
//forneça o novo saldo, considerando o reajuste de 1%.

let saldo = prompt('Digite o seu saldo atual: ');
let saldoAtual = Number(saldo) + Number(saldo * 0.01);

alert("Seu saldo atual: " + saldoAtual);