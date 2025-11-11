const readlineSync = require("readline-sync");



var frase = readlineSync.question("Digite a frase")

var fraseComLetrasMinisculas = frase.toLowerCase() 

/*
var palavraBurlarRegex = /burlar/gi
if(palavraBurlarRegex.test(frase)) {
    console.log("Existe a palavra")
}
*/

if(fraseComLetrasMinisculas.includes("burlar")) {
  frase =  frase.replaceAll(/burlar/gi, "[ADULTERAR]")
}

console.log(fraseComLetrasMinisculas)

if(fraseComLetrasMinisculas.includes("ladrao")) {
  frase =  frase.replaceAll(/ladrao/gi, "[MAU-CARÁTER]")
}

if(fraseComLetrasMinisculas.includes("empresax")) {
  frase =  frase.replaceAll(/empresax/gi, "[RAZÃO SOCIAL]")
}


// DESAFIO

var regexCpf = /\d{3}\.?\d{3}\.?\d{3}-?\d{2}/g
if(regexCpf.test(fraseComLetrasMinisculas)) {
    frase = frase.replaceAll(regexCpf, "[DADOS-PESSOAIS]")
}


console.log(frase)
