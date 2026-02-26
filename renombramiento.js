let propietario = {
  nombre: "Daniela",
  edad: 23
};

// Desestructuración con renombramiento
let { nombre: nombrePersona, edad: edadPersona } = propietario;

console.log(nombrePersona);
console.log(edadPersona);

/*
1. ¿Qué es el renombramiento?
Es cambiar el nombre de una propiedad al guardarla en una nueva variable
durante la desestructuración.

2. ¿Cuándo es útil cambiar el nombre de una variable?
Cuando queremos evitar conflictos de nombres o hacer el código más claro.
*/