const readlineSync = require("readline-sync");

var contador = 1
var items = []

for(contador; contador <= 5; contador++) {
   var item = readlineSync.question("Qual o item da lista")
   items.push(item)
}

console.log(items)