const readlineSync = require("readline-sync");

function calcularImc(peso, altura) {
  var imc = peso / altura ** 2;
  return imc.toFixed(2);
}

function analisarSituacaoImc(imc) {
  if (imc < 18.5) {
    return "Abaixo do peso normal";
  } else if (imc >= 18.5 && imc <= 24.9) {
    return "Peso normal";
  } else if (imc >= 25 && imc <= 29.9) {
    return "Sobrepeso";
  } else if (imc >= 30 && imc <= 34.9) {
    return "Obesidade grau I";
  } else if (imc >= 35 && imc <= 39.9) {
    return "Obesidade grau II";
  } else {
    return "Obesidade grau II";
  }
}

var paciente = {
  nome: "",
  idade: "",
  peso: 0,
  altura: 0,
  saude: {},
  alergias: {},
};

paciente.nome = readlineSync.question("Qual o nome do paciente ?");
paciente.idade = readlineSync.questionInt("Qual o idade do paciente ?");
paciente.peso = readlineSync.questionFloat("Qual o peso do paciente ?");
paciente.altura = readlineSync.questionFloat("Qual o altura do paciente ?");

paciente.saude.imc = calcularImc(paciente.peso, paciente.altura);
paciente.saude.situacao = analisarSituacaoImc(paciente.saude.imc);

var fruto_do_mar = readlineSync.question(
  "O paciente tem alegia a fruto do mar ?"
);
paciente.alergias.fruto_do_mar = fruto_do_mar == "SIM" ? true : false;

var polen = readlineSync.question("O paciente tem alergia a polen ?");
paciente.alergias.polen = polen == "SIM" ? true : false;

var lactose = readlineSync.question("O paciente tem alergia a lactose ?");
paciente.alergias.lactose = lactose == "SIM" ? true : false;

var abelhas = readlineSync.question("O paciente tem alergia a abelhas ?");
paciente.alergias.abelhas = abelhas == "SIM" ? true : false;

/* FORMA 2
if (fruto_do_mar == "SIM") {
  paciente.alergias.fruto_do_mar = true;
} else {
  paciente.alergias.fruto_do_mar = false;
}
*/
console.log(`
    Nome: ${paciente.nome}
    Idade: ${paciente.idade}
    Peso: ${paciente.peso}
    Altura: ${paciente.altura}
  `);
