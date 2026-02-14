function edadFutura() {
    const edadActual = parseInt(prompt("¿Cuál es tu edad actual?"));
    
    if (isNaN(edadActual) || edadActual < 0) {
        alert("Por favor, ingresa una edad válida");
        return;
    }
    
    const edadFutura = edadActual + 10;
    alert(`En 10 años tendrás ${edadFutura} años`);
}

edadFutura();