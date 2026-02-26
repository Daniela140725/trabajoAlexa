let persona = {
  nombre: "Daniela",
  edad: 23,
  ciudad: "Popayán"
};

// Copia con spread y cambio de propiedad
let copia = { ...persona, edad: 20 };

console.log(persona);
console.log(copia);

/*
1. ¿Qué hace el operador spread (...)?
Copia las propiedades de un objeto dentro de otro objeto.

2. ¿La copia es profunda o superficial?
Es superficial (solo copia el primer nivel).
*/