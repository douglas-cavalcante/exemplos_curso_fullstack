let ladoA = 5;
let ladoB = 5;
let ladoC = 3; // Exemplo de Entrada

// 1. Condição de Existência (a primeira coisa a ser checada)
if (ladoA + ladoB <= ladoC || ladoA + ladoC <= ladoB || ladoB + ladoC <= ladoA) {
    console.log("Não é um triângulo válido.");
}


// 2. Classificação (só checa se for um triângulo válido)
else if (ladoA === ladoB && ladoB === ladoC) {
    console.log("O triângulo é Equilátero: todos os lados são iguais.");
}
else if (ladoA === ladoB || ladoA === ladoC || ladoB === ladoC) {
    console.log("O triângulo é Isósceles: apenas dois lados são iguais.");
}
else {
    console.log("O triângulo é Escaleno: todos os lados são diferentes.");
}