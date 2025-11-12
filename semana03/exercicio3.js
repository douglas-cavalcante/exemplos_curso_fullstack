const readlineSync = require("readline-sync");

var nomes = []
var contador = 1

for(contador; contador <= 5; contador++) {
    var nome = readlineSync.question("Qual nome do convidado ?")
    nomes.push(nome)
}

var tamanho_nomes = nomes.length

console.log("primeira nome:" + nomes[0])
console.log("ultimo nome:" + nomes[tamanho_nomes - 1])