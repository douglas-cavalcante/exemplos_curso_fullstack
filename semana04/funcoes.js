// Nem receber parametro, nem retornar nada
export function mostrarMenu() {
  console.log(`
       =============================
        MENU DO SOFTWARE

        🥹 cadastrar paciente
        consultar
        sair
       ==============================
    `);
}

// receber parametro, nem retornar nada
export function mostrarSaudacao(nome) {
  console.log(`Olá, ${nome} `);
}

// receber parametro e retorna algo

export function raizQuadrada(numero) {
  var resultado = Math.sqrt(numero);
  return resultado;
}
