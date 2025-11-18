const readlineSync = require("readline-sync");

function ordenarCrescente(a, b) {
  return a - b;
}

function ordenarDescrecente(a, b) {
  return b - a;
}

var idades = [];
var contador_idades = 1;
var soma_idades = 0;

for (contador_idades; contador_idades <= 5; contador_idades++) {
  var idade = readlineSync.questionInt(
    "Digite a idade de nº " + contador_idades + ": "
  );
  idades.push(idade);
  soma_idades = soma_idades + idade;
}

idades.sort(ordenarCrescente);

var tamanho_array_idades = idades.length;

console.log("O menor valor: " + idades[0]);
console.log("O maior valor: " + idades[tamanho_array_idades - 1]);

// media
var media = soma_idades / tamanho_array_idades;
console.log("A media das idades é : " + media);

// descobrir a quantidade de idades menores que 18 anos

var contador_loop_menor_idade = 0;
var numeros_pessoas_menor_idade = 0

for (
  contador_loop_menor_idade;
  contador_loop_menor_idade < tamanho_array_idades;
  contador_loop_menor_idade++
) {  
   if(idades[contador_loop_menor_idade] < 18) {
     numeros_pessoas_menor_idade++
   }
}

console.log("O numero de pessoas menor de idade:" + numeros_pessoas_menor_idade)
