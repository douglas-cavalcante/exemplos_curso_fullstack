const readlineSync = require("readline-sync");

function definirConceitoNota(nota) {
  if (nota >= 0 && nota < 5) {
    return "Conceito D: Reprovado.";
  } else if (nota >= 5 && nota <= 6.9) {
    return "Conceito C: Suficiente.";
  } else if (nota >= 7 && nota <= 8.9) {
    return "Conceito B: Bom!";
  } else if (nota >= 9 && nota <= 10) {
    return "Conceito A: Excelente!";
  } else {
    return "Erro ! Nota invalida";
  }
}

var nota = readlineSync.questionFloat("Digite a nota:");
console.log(definirConceitoNota(nota))