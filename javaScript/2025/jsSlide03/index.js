//1. Escrever um programa que pergunte seu primeiro nome, nome do meio e
//sobrenome individualmente e soma todos os tamanhos.

let primeiroNome = prompt("Digite o seu primeiro nome:");
let nomeDoMeio = prompt("Digite o seu nome do meio:");
let sobrenome = prompt("Digite o seu sobrenome:");

let totalCaracteres = primeiroNome.length + nomeDoMeio.length + sobrenome.length;
let nomeCompleto = primeiroNome + " " + nomeDoMeio + " " + sobrenome;

alert("Seu nome completo:"+ nomeCompleto);