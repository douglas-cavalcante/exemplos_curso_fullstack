const readlineSync = require("readline-sync");

var loop = true

while(loop == true) {

    var tipo_sangue = readlineSync.question("Qual seu tipo sangue ?")

    if(tipo_sangue == "A" || tipo_sangue == "B" || tipo_sangue == "O") {
        loop = false
    }
}


 