const readlineSync = require("readline-sync");
const { mostrarMenu, mostrarSaudacao, raizQuadrada } = require("./funcoes");

var repeticao = true;
var pacientes = [];

mostrarSaudacao("Junim");

console.log(raizQuadrada(25));

while (repeticao == true) {
  mostrarMenu();
  var operacao = readlineSync.question("Qual a operacao");

  if (operacao == "cadastrar paciente") {
    var nome_paciente = readlineSync.question("Qual nome do paciente");
    mostrarSaudacao(nome_paciente);
    var sintoma = readlineSync.question("Qual o sintoma");

    var paciente = {
      nome: nome_paciente,
      sintoma: sintoma,
    };

    pacientes.push(paciente);
  } else if (operacao == "consultar") {
    console.log(pacientes);
  } else if (operacao == "sair") {
    repeticao = false;
  }
}
