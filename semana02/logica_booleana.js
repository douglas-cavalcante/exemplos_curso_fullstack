var produtoSazonal = false;
var produtoExcessoEstoque = false;
var valorDoProduto = 140;

if (
  (produtoSazonal == true && produtoExcessoEstoque == false) ||
  valorDoProduto >= 50
) {
    console.log("Ganhou Desconto")
}

/* Operador logico && 
if(produtoSazonal === true || produtoExcessoEstoque === true) {
    console.log("Ganhou desconto")
} else {
    console.log("Nao Ganhou desconto")
}
*/

/* Operador logico && 
if(produtoSazonal === true && produtoExcessoEstoque === true) {
    console.log("Ganhou desconto")
} else {
    console.log("Nao Ganhou desconto")
}
*/
