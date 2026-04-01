const racas = ["Bulldog","Pitbull","Salsicha","Golden","Poodlle"];
let opcao = prompt("Digite uma raça de cachorro (1 a 5)");

// transforma a variavel opcao em numero
opcao = Number(opcao);

//opcao do usuario -1 pois o array começa em 0
opcao = opcao -1;

//para escolher a opcao primerio vem o nome do array Exemplo: racas[opcao]
console.log(`Você escolheu a raça : ${racas[opcao]}`);

