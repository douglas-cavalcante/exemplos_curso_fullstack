const readlineSync = require("readline-sync");

function exibirMensagemBemVindo() {
  var nome = readlineSync.question("Qual é o seu nome ?")
  console.log("Ola" + nome)
}

function somar(valorUm, valorDois) {
   return valorUm + valorDois
}

console.log(somar(10,50))
console.log(somar(50,30))
console.log(somar(34,34))



