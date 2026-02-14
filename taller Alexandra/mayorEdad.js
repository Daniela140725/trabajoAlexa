function verificarEdad() {
    const edad = Number(prompt("Por favor escribe tu edad:"));
    const mensaje = edad >= 18 ? "Eres mayor de edad" : "Eres menor de edad";
    alert(mensaje);
}

verificarEdad();
