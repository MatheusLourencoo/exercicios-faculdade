//missao 1 
//a) Modo Imperativo: Crie a lista usando um loop for e condicionais if.

const heroisAtivos = [];

for (let i = 0; i < vingadores.length; i++) {
    const heroi = vingadores[i];

    if (heroi.status === "Ativo") {
        heroisAtivos.push(heroi.codinome);
    }
}

console.log(heroisAtivos);

console.log("\n-----------------------------\n");

//b) Modo Declarativo: Crie a mesma lista, mas agora encadeando .filter() e .map().

const heroisAtivosDeclarativo = vingadores
.filter(heroi => heroi.status === "Ativo")
.map(heroi => heroi.codinome);

console.log(heroisAtivosDeclarativo);

console.log("\n-----------------------------\n");

//misao 3
//Crie uma função gerarRelatorio(heroi) que recebe um objeto de herói e retorna uma string formatada usando Template Strings:
function gerarRelatorio(heroi) {
    return `Relatório de Herói: ${heroi.codinome} (${heroi.nome}) - Equipe: ${heroi.equipe} - Status: ${heroi.status}` 
};

const relatorioStark = gerarRelatorio(vingadores[0]);
console.log(relatorioStark);

console.log("\n-----------------------------\n");

//missao 4 
//a) Use Destructuring de Objeto para extrair as propriedades codinome e reino em variáveis separadas.
const panteraNegra = { nome: "T'Challa", codinome: "Pantera Negra", equipe: "Vingadores", status: "Ativo", nivelPoder: 92, reino: "Wakanda" };

const {codinome,reino} = panteraNegra;
console.log(codinome,reino);
//b) Use Destructuring de Objeto para extrair a propriedade nome e renomeá-la para rei.
const {nome: rei} = panteraNegra;
console.log(rei);

console.log("\n-----------------------------\n");

//missao 5 (Spread e Rest)
//Crie um novo array aliancaCosmica que contenha todos os membros de ambas as equipes usando o Spread Operator.
const aliancaCosmica = [...vingadores];

console.log(aliancaCosmica);

//b) Spread em Objetos: Crie um novo objeto para o Capitão América chamado capitaoAposentado, copiando todas as propriedades do original, mas alterando seu status para "Viajante do Tempo".
const capitaoAmerica = aliancaCosmica.find(capitao => capitao.codinome === "Capitão América");

const capitaoAposentado = {...capitaoAmerica, status : "Viajante do Tempo"};

console.log(capitaoAposentado);

//c) Rest em Funções: Crie uma função liderarMissao(lider, ...equipeDeApoio) que recebe o líder como primeiro argumento e o resto dos heróis em um array equipeDeApoio.
function liderarMissao(lider, ...equipeDeApoio){
    const codinomes = equipeDeApoio.map(herois => herois.codinome);

    console.log(`Missão liderada por ${lider.codinome}. Equipe de apoio: ${codinomes.join(", ")}`);
};

 liderarMissao(vingadores[1], vingadores[2], vingadores[6],);

 console.log("\n-----------------------------\n");
