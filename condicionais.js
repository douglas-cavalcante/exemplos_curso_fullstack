const readlineSync = require("readline-sync");

console.log(">>>>>>>>>> Escolinha javascript <<<<<<<<<<<<<");

var idade = readlineSync.questionFloat("Qual a idade do aluno ?");

if (idade < 12) {
  console.log("O aluno foi matriculado na turma infantil");
}

if (idade >= 12 && idade <= 14) {
  console.log("O aluno foi matriculado na turma A");
}

// menor 12 -> turma infantil
// 12 e 14 anos -> turma A
// 15 e 17 -> turma B
// maior que 17 -> turma C
