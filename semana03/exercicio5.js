const readlineSync = require("readline-sync");

/*
   1 - Quer coloca uma pessoa na fila de atendimento - push
   2 - Atender a pessoa no inicio da fila - shift
   3 - Exibir fila de atendimento  - console.log()
   4 - Retirar a ultima pessoa da fila por causa da desistencia - pop
   5 - Prioridade -  unshift
   6 - Finalizar o codigo 
*/

var fila_atendimento = [];
var loop_atendimento = true;
 
while (loop_atendimento == true) {
 
  var resposta = readlineSync.questionInt("Qual operacao deseja fazer ? ");
 
  if (resposta == 1) {

    var nome = readlineSync.question("Qual nome do cliente ? ");
    fila_atendimento.push(nome);
    console.log("✅ Adicionado na fila: " + nome);

  } else if (resposta == 2) {

    console.log("✅ Atendendo cliente ");
    console.log("Atendendo pessoa:" + fila_atendimento[0]);
    fila_atendimento.shift();

  } else if (resposta == 3) {

    // Concatena texto com um array -> console.log("Fila atual: " + fila_atendimento)
    var contador = 0;
    var tamanho_fila_atendimento = fila_atendimento.length;

    for (contador; contador < tamanho_fila_atendimento; contador++) {
      console.log(fila_atendimento[contador]);
    }

  } else if (resposta == 4) {

    var tamanho_fila_atendimento = fila_atendimento.length;
    console.log(
      fila_atendimento[tamanho_fila_atendimento - 1] + " esta indo embora ... "
    );
    fila_atendimento.pop();

  } else if (resposta == 5) {
    
    var nome = readlineSync.question("Qual é o nome do cliente prioridade ? ");
    fila_atendimento.unshift(nome);

  } else {

    loop_atendimento = false;
    console.log("Nenhuma opcao escolhida");

  }

  console.log(fila_atendimento);
}
