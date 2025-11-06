const readlineSync = require("readline-sync");

var senha = readlineSync.question("Digite a senha").toUpperCase()
// var tamanhoSenha = senha.length

if(senha.length >= 8 && senha.length <= 16 ) {
    console.log("senha forte")
} else {
    console.log("senha fraca")
}

