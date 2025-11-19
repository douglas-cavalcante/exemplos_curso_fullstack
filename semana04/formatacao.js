var nome = "Henrique";
var sobrenome = "Cavalcante";

console.log("O nome é \n " + nome + " " + sobrenome); // concatenacao
console.log(`
    O nome é ${nome} 
    ${sobrenome}`); // interpolacao

var idade = 16;

console.log(`a pessoa é ${idade > 18 ? "Maior idade" : "menor de idade"}`);

console.log(`
        >>>>>>> MENU DO ALGORITMO <<<<<<<
        1 - Cadastrar
        2 - Consultar
        3 - Sair
`);

var pessoas = ["maria", "pedro", "joao"];

function teste() {
  if (1 === 1) {
    return "teste";
  }
}

console.log(`a lista é ${teste()}`);
