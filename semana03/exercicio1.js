const readlineSync = require("readline-sync");

var limite_pacientes = readlineSync.questionInt("Quantos pacientes temos ? ");

var contador = 1;

for (contador; contador <= limite_pacientes; contador++) {
  var nome = readlineSync.question("Qual nome do paciente")
  var peso = readlineSync.questionFloat("Qual peso do paciente")
  var altura = readlineSync.questionFloat("Qual altura do paciente")

  var resultado = peso / (altura * altura) 
}

console.log("FIM")


