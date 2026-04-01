/* Crie um programa que peça ao usuário para digitar números inteiros
(pare de ler números quando o usuário digitar -1). Agora, ordene os
números dentro de um vetor utilizando o método sort. */

let array = [];

while (true) {

    let entrada = prompt("Digite somente números inteiros (Digite -1 para finalizar o programa): ");
    let numeroConvertido = parseInt(entrada);

    
    if(numeroConvertido === -1){
        console.log("Programa finalizado! ");
        break;
    }

    array.push(numeroConvertido);
}

//ordena do menor para o maior
array.sort((a,b) = a - b);

console.log("Numeros cadastrados: ", array);
