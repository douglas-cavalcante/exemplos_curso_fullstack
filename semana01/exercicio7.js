const readlineSync = require("readline-sync");

function calcularIMC(peso, altura) {
  var imc = peso / (altura * altura);
  return imc;
}

var peso = readlineSync.questionFloat("Qual seu Peso?");
var altura = readlineSync.questionFloat("Qual sua altura?");

// var resultado = calcularIMC(peso, altura)
//console.log(resultado.toFixed(2))

console.log("Seu imc é: " + calcularIMC(peso, altura).toFixed(2));
