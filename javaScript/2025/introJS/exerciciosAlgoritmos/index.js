//1) Escreva um programa que mostre na tela a mensagem "Olá, Mundo!"

console.log("Olá, Mundo!");

//2) Faça um programa que leia o nome de uma pessoa e mostre uma mensagem de boas vindas para ela:
//Ex:
//Qual é o seu nome? João da Silva
//Olá João da Silva, é um prazer te conhecer!

//let nome = prompt("Escreva o seu nome: ");

//console.log("Olá, "+ nome +", é um prazer te conhecer!");

//3) Crie um programa que leia o nome e o salário de um funcionário, mostrando no final uma mensagem.
//Ex:
//Nome do Funcionário: Maria do Carmo
//Salário: 1850,45
//O funcionário Maria do Carmo tem um salário de R$1850,45 em Junho.

//let funcionario = prompt("Digite o seu nome: ");
//let salario = prompt("Digite o seu salário: ");

//console.log(`O funcionário ${funcionario} tem um salário de R$${salario} em junho`); 

//4) Desenvolva um algoritmo que leia dois números inteiros e mostre o somatório entre eles.
//Ex:
//Digite um valor: 8
//Digite outro valor: 5
//A soma entre 8 e 5 é igual a 13.

/* let n1 = prompt("Digite um número:");
let n2 = prompt("Digite o segundo número:");

let resultado = Number(n1) + Number(n2);

console.log(`A soma entre ${n1} e ${n2} é igual a: ${resultado}`); */

//5) Faça um programa que leia as duas notas de um aluno em uma matéria e mostre na tela a sua média na disciplina.
//Ex:
//Nota 1: 4.5
//Nota 2: 8.5
//A média entre 4.5 e 8.5 é igual a 6.5

let nota1 = prompt("Digite a sua nota 1: ");
let nota2 = prompt("Digite a sua nota 2: ");

let media = (parseFloat(nota1) + parseFloat(nota2))/2;

console.log(`A média entre ${nota1} e ${nota2} é igual a: ${media}`);
