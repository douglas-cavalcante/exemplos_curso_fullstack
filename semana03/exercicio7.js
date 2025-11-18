const readlineSync = require("readline-sync");

// Enem em Linguagens,
//  Matemática,
// Ciências Humanas,
// Ciências da Natureza e
//  Redação

var nota_linguagens = readlineSync.questionFloat(
  "Qual a sua nota em Linguagens ?"
);

var nota_matematica = readlineSync.questionFloat(
  "Qual a sua nota em Matemática ?"
);

var nota_ciencia_humanas = readlineSync.questionFloat(
  "Qual a sua nota em Ciências Humanas ?"
);

var nota_ciencia_natureza = readlineSync.questionFloat(
  "Qual a sua nota em Ciências da Natureza ?"
);

var nota_redacao = readlineSync.questionFloat("Qual a sua nota em Redacao ?");

// calcular media do aluno

var media =
  (nota_linguagens +
    nota_ciencia_humanas +
    nota_redacao +
    nota_ciencia_natureza +
    nota_matematica) /
  5;

console.log(media);

if (media >= 870.62) {
  console.log("A sua nota passou para Odontologia");
}

if (media >= 873.47) {
  console.log("A sua nota passou para Direito");
}

if (media >= 918.34) {
  console.log("A sua nota passou para Medicina");
}

if (media >= 625.85) {
  console.log("A sua nota passou para Quimica");
}

if (media >= 652.25) {
  console.log("A sua nota passou para Pedagogia");
}

function ordenarCrescente(a, b) {
  return a - b;
}

function ordenarDescrecente(a, b) {
  return b - a;
}

[5, 4, 10, 3, 2].sort(ordenarDescrecente);
