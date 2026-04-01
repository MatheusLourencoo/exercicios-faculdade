/*● Crie uma função que receba dois números e retorne a
soma entre eles
● Crie uma variável soma no escopo da sua função e tente
acessá-la fora desse escopo */

function somar(a,b){
    
    let soma = a + b;
    return soma;
}

const resultado = somar(10,5);

console.log(`Resultado da soma: ${resultado} `);