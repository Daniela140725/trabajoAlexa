function pedirNombre() {
	const nombre = prompt("Por favor escribe tu nombre:")?.trim();
	alert(nombre ? "Hola, " + nombre : "Hola");
}

pedirNombre();