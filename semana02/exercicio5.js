const readlineSync = require("readline-sync");

var ladoA = readlineSync.questionFloat("Digite lado A");
var ladoB = readlineSync.questionFloat("Digite lado B");
var ladoC = readlineSync.questionFloat("Digite lado C");

// regra de existencia

if (ladoA == ladoB && ladoB == ladoC) {
  console.log("Equilátero");
} else if (ladoA != ladoB && ladoB != ladoC && ladoA != ladoC) {
  console.log("Escaleno");
} else if (ladoA == ladoB || ladoB == ladoC || ladoC == ladoA) {
  console.log("Isósceles");
}
