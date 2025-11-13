const readlineSync = require("readline-sync");

var numeros_pessoas = readlineSync.question("Quantas pessoas tem na casa ?")

var contador = 1
var salarios = []

for(contador; contador <= numeros_pessoas; contador++) {
    var renda =  readlineSync.questionFloat("Qual a renda da pessoa ?")
    salarios.push(renda)
    soma = soma + renda
}

/*
  SOLUCAO ALTERNATIVA PARA SOMAR o ARRAY
var soma = 0
var loop_soma = 0

for(loop_soma; loop_soma < numeros_pessoas;loop_soma++) {
    soma = soma + salarios[loop_soma]
}

*/

var media_salarios = soma / numeros_pessoas

if(media_salarios <= 1500) {
    console.log("Recebe beneficio")
} else {
    console.log("Nao recebe beneficio")
}

console.log(soma)
console.log(media_salarios)

// soma = 1000 + 0 
// soma = 2000 + 1000
// soma = 3000 + 500






