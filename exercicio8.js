const readlineSync = require("readline-sync");

// Entrada
var letra = readlineSync.question("Digite uma letra: ");

// processamento 
// a, e, i , o u
if (
  letra == "a" ||
  letra == "e" ||
  letra == "i" ||
  letra == "o" ||
  letra == "u"
) {
    // Saida
  console.log("Letra é uma vogal");
} else {
  console.log("A letra é uma vogal")
}


