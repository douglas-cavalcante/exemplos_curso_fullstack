const readlineSync = require("readline-sync");

var produtoSazonal = readlineSync.question("O produto é sazonal ? ");
var ehProdutoSazonal = produtoSazonal == "v" ? true : false; // if ternario

var produtoExcessoEstoque = readlineSync.question(
  "O produto tem excesso de estoque ? "
);
var ehProdutoExcessoEstoque = produtoExcessoEstoque == "v" ? true : false;

var valorDoProduto = readlineSync.questionFloat("Qual o valor do produto ?");

if (
  (ehProdutoSazonal == true && ehProdutoExcessoEstoque == true) ||
  valorDoProduto >= 80
) {
  console.log("Ganhou desconto");
} else {
    console.log("Nao Ganhou desconto");
}
