function pedirCiudad() {
	const ciudad = prompt("Por favor escribe tu ciudad:")?.trim();
	alert(ciudad ? "vives en " + ciudad : "Hola");
}

pedirCiudad();