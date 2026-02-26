function calcularPromedio() {
    const nota1 = Number(prompt("Escribe la primera nota:"));
    const nota2 = Number(prompt("Escribe la segunda nota:"));
    const nota3 = Number(prompt("Escribe la tercera nota:"));
    
    const promedio = (nota1 + nota2 + nota3) / 3;
    
    alert("El promedio es " + promedio);
}

calcularPromedio();
