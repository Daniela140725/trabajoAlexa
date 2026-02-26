let persona = {
  nombre: "Daniela",
  edad: 23,
  direccion: {
    ciudad: "Popayán",
    pais: "Colombia"
  }
};


let copia = {...persona,direccion: {
    ...persona.direccion,
    ciudad: "cali"
  }
};

console.log(persona.direccion.ciudad); 
console.log(copia.direccion.ciudad);   

/*
1. ¿Por qué se debe copiar también el objeto interno?
Porque si no, ambos objetos compartirían la misma referencia del objeto interno.

2. ¿Qué pasa si no lo haces?
Al modificar la propiedad interna, también cambiaría en el objeto original.
*/