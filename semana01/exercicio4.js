const readlineSync = require('readline-sync')

var nome_titular = readlineSync.question("Qual o titular do cartao ?")
var numero_cartao = readlineSync.question("Qual o numero do cartao ?")
var validade_cartao = readlineSync.question("Digite a validade do cartao (MM/YYYY) ?")
var cvv_cartao = readlineSync.question("Qual o Cvv do cartao ?")

console.log("Salvando dados do cartao ....")
console.log("Nome: " + nome_titular)
console.log("Numero do cartao: " + numero_cartao)
console.log("Validade: " + validade_cartao)
console.log("CVV: " + cvv_cartao)
console.log(">>>>>> Salvo com sucesso <<<<<<<<")
