const readlineSync = require('readline-sync')

var cidade = readlineSync.question("Qual e sua cidade ?")
var estado = readlineSync.question("Qual e seu estado ?")

console.log("Voce reside em " + cidade + "/" + estado)

