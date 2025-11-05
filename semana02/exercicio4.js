const readlineSync = require("readline-sync");

var rendaComprovada = readlineSync.question(
  "O cliente tem renda comprovada ? "
);
var ehRendaComprovada = rendaComprovada == "s" ? true : false;

var clientePreferencial = readlineSync.question("O cliente e preferencial ? ");
var ehClientePreferencial = clientePreferencial == "s" ? true : false;

var clienteAntigo = readlineSync.question("O cliente e antigo ? ");
var ehClienteAntigo = clienteAntigo == "s" ? true : false;

var clienteNegativado = readlineSync.question("O cliente e negativado ? ");
var ehClienteNegativado = clienteNegativado == "s" ? true : false;

if (ehClienteNegativado == true) {
  console.log("Emprestimo negado");
} else if (
  ehRendaComprovada == true ||
  (ehClienteAntigo == true && ehClientePreferencial == true)
) {
    console.log("Ganhou Emprestimo")
}
