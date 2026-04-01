/* 1. Filtragem e Média em Arrays (Lógica JavaScript)
Crie uma função JavaScript chamada calcularMediaTemperaturas que receba um array contendo temperaturas
medidas por um sensor. No entanto, o sensor às vezes retorna valores inválidos (abaixo de -10°C ou acima de
50°C). Sua função deve calcular a média apenas das temperaturas válidas. */

function calcularMediaTemperaturas(temperaturas){
    let soma = 0;
    let contador = 0;

    for(i = 0; i < temperaturas.length; i++){
        let temp = temperaturas[i];

        if(temp >= -10 && temp <= 50){
            soma += temp;
            contador ++;
        }
    }
    
    if(contador == 0){
        return "Temperaturas inválidas";
    }

    return soma / contador;
}
const temperaturas = [10,20,60,15,-10];
let resultado = calcularMediaTemperaturas(temperaturas);

console.log(`A media das temperaturas validas é: ${resultado}`);

console.log("\n\n-----------------------------\n");
/* 2. Seleção de Elemento Único (DOM)
Suponha que você tenha um botão HTML com a classe "btn-enviar" . Escreva um código JavaScript usando o
método apropriado para selecionar apenas este botão (considere que há apenas um botão com essa classe)
e alterar seu texto para "Enviado!".*/

document.querySelector(".btn-enviar").textContent = "Enviado!";

console.log("\n\n-----------------------------\n");
/* 3. Estruturas Condicionais Encadeadas
Crie um sistema JavaScript que exibe uma mensagem com base na pontuação de um jogo:
"Campeão" (pontuação ≥ 1000)
"Jogador intermediário" (pontuação entre 500 e 999)
"Jogador iniciante" (pontuação abaixo de 500)
Explique brevemente por que a ordem das condições importa nesse caso. */

let entrada = prompt("Digite sua pontuação: ");
const pontuacao = Number(entrada);

if(pontuacao >= 1000){
    console.log("Campeão!");
}
else if(pontuacao >= 500 && pontuacao <= 999){
    console.log("Jogador Intermediário!");
}
else{
    console.log("Jogador iniciante!");
}

console.log("\n\n-----------------------------\n");
/* 4. Alteração de Texto (DOM)
Você tem o seguinte elemento HTML:
<h2 id="status">Pendente</h2>
Implemente em JavaScript um botão que, ao ser clicado, altere o texto do elemento acima para "Completo". */

document.querySelector("button").addEventListener("click", function() {
  document.getElementById("status").textContent = "Completo";
});

console.log("\n\n-----------------------------\n");
/* 5. Sintaxe Correta e Estrutura Condicional
Corrija e explique o erro neste trecho de código:

if (idade = 18) {
 console.log('Maior de idade');
} else {
 console.log('Menor de idade');
}
Explique por que o código estava errado e mostre a correção correta. */


console.log("\n\n-----------------------------\n");
/* 6. Operadores Estritos vs. Não Estritos
Dado o código abaixo:
Exercícios de Revisão para Desenvolvimento Web Front-End 1
let valor = "10";
console.log(valor == 10); // true
console.log(valor === 10); // false
Explique claramente por que os dois resultados são diferentes. */

let valor = "10";
console.log(valor == 10);  // true
console.log(valor === 10); // false

// Explicação:

// == compara valores, mesmo com tipos diferentes (conversão implícita).

// === compara valor e tipo. Aqui, "10" (string) !== 10 (número).

console.log("\n\n-----------------------------\n");
/* 7. Eventos (click) com JavaScript
Crie o código JavaScript necessário para que, ao clicar em um botão com a classe "salvar" , seja exibido no
console a mensagem: "Os dados foram salvos com sucesso!". */

document.querySelector(".salvar").addEventListener("click", function() {
  console.log("Os dados foram salvos com sucesso!");
});

console.log("\n\n-----------------------------\n");
/* 8. Modificação do DOM (Múltiplos Elementos)
Escreva um código JavaScript que selecione todos os elementos com a classe "erro" e troque o texto desses
elementos para "Corrija este campo". */

const erros = document.querySelectorAll(".erro");
erros.forEach(function(elemento) {
  elemento.textContent = "Corrija este campo";
});

console.log("\n\n-----------------------------\n");
/* 9. Declaração de variáveis ( let vs const )
Explique com suas palavras qual o erro neste código:
const contador = 0;
contador = contador + 1;
Como você corrigiria esse código? */


//Explicação:
//const cria variáveis que não podem ser reatribuídas.
//Usando let

console.log("\n\n-----------------------------\n");
/* 10. Manipulação avançada de eventos e DOM
Escreva um exemplo em JavaScript no qual clicar em um botão com o id "trocarImagem" alterne dinamicamente
o atributo src de uma imagem com o id "foto" entre "foto1.jpg" e "foto2.jpg" */

document.getElementById("trocarImagem").addEventListener("click", function() {
  const imagem = document.getElementById("foto");
  imagem.src = imagem.src.includes("foto1.jpg") ? "foto2.jpg" : "foto1.jpg";
});