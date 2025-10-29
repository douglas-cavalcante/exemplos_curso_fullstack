const readlineSync = require("readline-sync");

var valor_produto = readlineSync.questionFloat("Digite o valor do produto ");
var valor_frete = readlineSync.questionFloat("Digite o valor do frete ")

var valor_total = valor_produto + valor_frete

console.log("O valor do frete: " + valor_total)

/*
   <<<<<< Forma 1 de converte um valor de strint para número >>>>>
   var valor_produto = Number(
   readlineSync.question("Digite o valor do produto ?")
   );
*/