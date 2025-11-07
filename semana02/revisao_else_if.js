const readlineSync = require("readline-sync");

function darBoasVindas() {
    return "Bom dia"
}

function verificarSeTemChurrasco(produto) {
  if (produto == "carne" || produto == "peixe" || produto == "frango") {
    return "Hoje tem churrasco"
  } else if (
    produto == "batata" ||
    produto == "milho" ||
    produto == "cenoura"
  ) {
    return "churrasco vegano"
  } else {
    return "hoje nao tem churrasco";
  }
}

// 1 carne peixe frango -> hoje tem churrasco
// 2 batata cenoura ou milho -> hoje tem churrasco vegano
// hoje nao tem churrasco

var produto = readlineSync.question("Digite o nome do produto");

var resultado = verificarSeTemChurrasco(produto)

console.log(verificarSeTemChurrasco())

