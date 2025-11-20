const readlineSync = require("readline-sync");

var aluno = {};

aluno.nome = readlineSync.question("Nome do aluno");
aluno.numero_matricula = readlineSync.question("Qual a matricula do aluno");
aluno.media_final = readlineSync.questionFloat("Qual é a media final");
aluno.curso = readlineSync.question("Qual curso do aluno");

if (aluno.media_final >= 7) {
  aluno.situacao = "Aprovado";
} else {
  aluno.situacao = "Reprovado";
}

console.log(aluno);
