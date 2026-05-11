//6- b) Crie um arquivo centralDeMissoes.js. Nele, importe o array vingadores do outro arquivo e use .filter() para encontrar todos os heróis com nivelPoder acima de 90.

import { vingadores } from "./herois.mjs";

const heroisMaisFortes = vingadores.filter(heroi => heroi.nivelPoder > 90);

console.log(heroisMaisFortes);

console.log("\n-----------------------------\n");

//missao 7
//a) .map(): Crie um novo array contendo apenas o codinome de cada herói.
const apenasCodinome = vingadores.map(herois => herois.codinome);

console.log(apenasCodinome);

console.log("\n-----------------------------\n");

//b) .filter(): Crie um novo array contendo apenas os heróis cujo status seja "Ativo"
const heroisAtivos = vingadores.filter(heroi => heroi.status === "Ativo");

console.log(heroisAtivos);

console.log("\n-----------------------------\n");

//c) .reduce(): Calcule o nivelPoder somado de todos os heróis da equipe "Vingadores"
const poderTotalVingadores = vingadores
.filter(heroi => heroi.equipe === "Vingadores")
.reduce((total,heroi) => total + heroi.nivelPoder, 0);

console.log(poderTotalVingadores);

console.log("\n-----------------------------\n");

//d) Encadeamento: Crie um array de strings com a mensagem "[CODINOME] está pronto para a batalha!" apenas para os heróis da equipe "Vingadores" que estão "Ativo"s. (Use .filter() e .map() juntos)
const chamadaDeBatalha = vingadores
.filter(heroi => heroi.equipe === "Vingadores" && heroi.status === "Ativo")
.map(heroi => `${heroi.codinome} está pronto para a batalha!`);

console.log(chamadaDeBatalha);