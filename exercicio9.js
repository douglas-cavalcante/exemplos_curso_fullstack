const readlineSync = require("readline-sync");

function verificarAprovacao() {
  // Entrada
  var notaUm = readlineSync.questionFloat("Digite a nota 1: ");
  var notaDois = readlineSync.questionFloat("Digite a nota 2: ");
  var notaTres = readlineSync.questionFloat("Digite a nota 3: ");
  var notaQuarto = readlineSync.questionFloat("Digite a nota 4: ");

  var media = (notaUm + notaDois + notaTres + notaQuarto) / 4;

  if (media >= 6) {
    console.log("Aprovado com media " + media);
  } else {
    console.log("Reprovado com media" + media);
  }
}

verificarAprovacao()