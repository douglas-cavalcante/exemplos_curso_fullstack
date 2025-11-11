
const readlineSync = require("readline-sync");

var limite_contagem = readlineSync.questionInt("Quanto vc quer contar?")

var contador = 1

for(contador; contador <= limite_contagem; contador++) {
    console.log("Agora é" + contador )
}
