/* Crie uma função chamada converterParaFahrenheit que receba um parâmetro celsius (um número). A função deve calcular e retornar a temperatura correspondente em Fahrenheit.
Fórmula: Fahrenheit = (Celsius * 9/5) + 32
Após criar a função, chame-a com o valor 25 e imprima o resultado no console de forma clara (ex: "25°C é igual a 77°F"). */

function converterParaFahrenheit(celsius){
    fahrenheit = (celsius * 9/5) + 32;
    return fahrenheit;
}

let imprimir = 25;
let imprimirConvertido = converterParaFahrenheit(25);

console.log(`Celsius: ${imprimir + "ºC"}\nconvertido para fahrenheit: ${imprimirConvertido + "ºF"}`);

console.log("\n\n-----------------------------\n")
/*Exercício 2: Verificador de Ano Bissexto
Enunciado
Crie uma função chamada isBissexto que receba um ano como parâmetro. A função deve retornar true se o ano for bissexto e false caso contrário.

Regras de um ano bissexto:

É divisível por 4, mas não por 100, exceto se for divisível por 400.
Ex: 2000 e 2024 são bissextos. 1900 e 2023 não são.
Teste a função com os anos 2024, 1998 e 2000, imprimindo os resultados no console. */

function ebissexto(ano){
    
    if(ano % 4 == 0 && ano % 100 !== 0 || ano % 400 === 0){
        return true;
    }
    else{
        return false;
    }
}

let testeBissexto1 = ebissexto(2024);
let testeBissexto2 = ebissexto(1900);

console.log(`2024 é bissexto? ${testeBissexto1} \n1900 é bissexto? ${testeBissexto2}`);
console.log("\n\n-----------------------------\n")
/* Exercício 3: Contador de Vogais
Enunciado
Crie uma função chamada contarVogais que receba uma string (uma palavra ou frase) como parâmetro. A função deve retornar a quantidade total de vogais (a, e, i, o, u) presentes na string, ignorando se são maiúsculas ou minúsculas.

Dica: Converta a string de entrada para minúsculas primeiro para facilitar a comparação */

function contarVogais(frase){
    let fraseMinuscula = frase.toLowerCase();
    let contador = 0;

    for(i = 0; i < fraseMinuscula.length; i++){
        let vogal = fraseMinuscula[i];

        if(vogal == "a" || vogal == "e" || vogal == "i" || vogal == "o" || vogal== "u"){
            contador ++;
        }
    }
    
    return contador;

}

let texto1 = contarVogais("Liminha");
let texto2 = contarVogais("Gustavo Lima");

console.log(`Liminha tem: ${texto1 + " vogais"} \nGustavo Lima tem: ${texto2 + " vogais"}`);
console.log("\n\n-----------------------------\n");

/*Enunciado
Crie uma função chamada validarSenha que receba uma senha (string) como parâmetro. A função deve retornar true se a senha atender a todos os critérios a seguir, e false caso contrário.

Critérios de uma senha válida:

Deve ter no mínimo 8 caracteres.
Deve conter pelo menos uma letra maiúscula.
Deve conter pelo menos um número. */

function validarSenha(senha){
    
    if(senha === "Bananinha123"){
        return true;
    }
    else{
        return false;
    }
}

let senha1 = validarSenha("Bananinha123");
let senha2 = validarSenha("guru123");

console.log(`Senha 1 : ${senha1} \nSenha 2: ${senha2}`);

console.log("\n\n-----------------------------\n")

/* Exercícios de Vetor (Array) 
Exercício 1: Encontrar o Maior e o Menor Número
Enunciado
Dado o vetor const notas = [8, 9, 5.5, 7, 10, 6, 4];, escreva um código que encontre e imprima no console o maior e o menor número contidos no vetor.

Saída esperada:
Maior nota: 10
Menor nota: 4 */

const notas = [8, 9, 5.5, 7, 10, 6, 4];

let maiorNota = notas[4];
let menorNota = notas[6];

console.log(`Maior nota: ${maiorNota} \nMenor nota: ${menorNota}`);

console.log("\n\n-----------------------------\n");

/* Exercício 2: Inverter a Ordem dos Itens
Enunciado
Dado o vetor const cores = ["Vermelho", "Azul", "Verde", "Amarelo", "Roxo"];, crie um novo vetor que contenha os mesmos itens, mas na ordem inversa, sem alterar o vetor original. Imprima o novo vetor invertido no console.

Dica: Você pode criar um novo array vazio e percorrê-lo do final para o começo usando um laço for. */ 

const cores = ["Vermelho", "Azul", "Verde", "Amarelo", "Roxo"];

for(i = cores.length - 1; i >= 0; i--){
    console.log(cores[i]);
}

console.log("\n\n-----------------------------\n");

/* 1. Exercício de Função: Calculadora de IMC (Índice de Massa Corporal)
O Enunciado
Crie uma função chamada calcularIMC que receba dois parâmetros: peso (em quilos) e altura (em metros). A função deve calcular e retornar uma string com a classificação do IMC, de acordo com a tabela abaixo.

Fórmula do IMC:  (peso * altura) */

function calcularIMC(peso,altura){

    const imc = peso / (altura * altura) ;
    
    if(imc <= 18.5){
        return "Abaixo do peso!";
    }
    else if(imc >= 18.5 && imc < 24.9){  
        return "Peso normal!";    
    }
    else if(imc >= 24.9 && imc < 29.9){  
        return "Sobrepeso!";    
    }
    else if(imc >= 29.9 && imc < 34.9){  
        return "Obesidade grau I!";    
    }
    else if(imc >= 34.9 && imc < 39.9){  
        return"Obesidade grau II!";    
    }
    else if(imc >= 39.9){  
        return "Obesidade grau III!"; 
    }
    else{
        return "Invalido";
    }
}

let entrada1 = prompt("Digite o seu peso: ");
let entrada2 = prompt("Digite a sua altura(em metro): ");

let resultado = calcularIMC(entrada1,entrada2);

console.log(`Seu imc: ${resultado}`);