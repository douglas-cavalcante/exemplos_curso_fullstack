const readlineSync = require("readline-sync");

var contador = 1

while(contador <= 6) {
    var estado = readlineSync.question("Qual o seu estado ? ")
    var cidade = readlineSync.question("Qual é o sua cidade ? ")
    console.log("No estado de " + estado + " fica a cidade de " + cidade)
    console.log("\n \n")
    contador++
}