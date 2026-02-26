function verificarNumero() {
    const numero = Number(prompt("Por favor escribe un número:"));
    
    if (numero > 0) {
        alert("Es positivo");
    } else if (numero < 0) {
        alert("Es negativo");
    } else {
        alert("Es cero");
    }
}

verificarNumero();
