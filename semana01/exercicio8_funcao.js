const readlineSync = require("readline-sync");

function verificarEhVogal(letra) {
  if (
    letra == "a" ||
    letra == "e" ||
    letra == "i" ||
    letra == "o" ||
    letra == "u"
  ) {
    // Saida
    return "Letra é uma vogal"
  } else {
    return "A letra nao é uma vogal"
  }
}

var letra = readlineSync.question("Digite letra:")

console.log(verificarEhVogal(letra));
verificarEhVogal("b");
verificarEhVogal("t");
verificarEhVogal("e");
verificarEhVogal("q");
