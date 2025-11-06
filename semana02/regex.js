var cpf = "999.999.999-99";

var regexCPF = /^\d{3}\.\d{3}\.\d{3}-\d{2}$/; // regex cpf
var regexCep = /^\d{5}-\d{3}$/; // regex para cep
var regexData = /^\d{2}[-\/]\d{2}[-\/]\d{4}$/;

if (regexCep.test(cpf)) {
  console.log("CEP valido");
} else {
  console.log("nao um cep valido");
}

var cpf = "99934543434";
var cpfFormatado = cpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, "$1.$2.$3-$4");

console.log(cpfFormatado);

var nome = "douglas";
