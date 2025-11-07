const readlineSync = require("readline-sync");

// digite um texto
// 1 - texto maisculo
// 2 - texto minisculo
// ......

var texto = readlineSync.question("Digite o texto")
var opcao = readlineSync.question("Digite a operacao que deseja realizar")

if(opcao == "1") {
    console.log("Voce escolheu UpperCase()")
    console.log(texto.toUpperCase())
} else if(opcao == "2") {
   console.log("Voce escolheu LowerCase()")
   console.log(texto.toLowerCase())
} else if(opcao == "3") {
    console.log("Voce escolheu Length()")
   console.log(texto.length)
} else if(opcao == "4") {    
   console.log("Voce escolheu Trim()")
   console.log(texto.trim())
} else if(opcao == "5") {
   console.log("Voce escolheu replace()")
   console.log(texto.replace("java", "javascript"))
} else if(opcao == "6") {
   console.log("Voce escolheu includes()")
   console.log(texto.includes("java"))
}