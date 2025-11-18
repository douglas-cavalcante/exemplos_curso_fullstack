const readlineSync = require("readline-sync");

var renda_anual = [];
var contador_renda_anual = 1;

var soma_meses = 0;

for (contador_renda_anual; contador_renda_anual <= 12; contador_renda_anual++) {
  // DESAFIO 1 - EXIBIR O NOME DO MES
  var renda_mes = readlineSync.questionFloat(
    "Qual foi o faturamento do mes " + contador_renda_anual + ": "
  );
  renda_anual.push(renda_mes);
  soma_meses = soma_meses + renda_mes;
}



// for

var quantidade_funcionarios = readlineSync.questionInt(
  "Quantos funcionarios tem a empresa ? "
);

var meta = readlineSync.questionFloat("Qual a meta da empresa ? ");

if (soma_meses >= meta) {
  var resultado = (soma_meses - meta) / quantidade_funcionarios;
  console.log(
    "O decimo quarto para " + quantidade_funcionarios + " e: " + resultado,
    toFixed(2)
  );
} else {
  console.log("SEM decimo quarto :(");
}
