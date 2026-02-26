let persona={
    nombre:'Daniela',
    edad:23
}

function mostrarInfo({nombre, edad}){
    return `Nombre: ${nombre}, Edad: ${edad}`;
}

let personita=mostrarInfo(persona);

console.log(personita);

/*
1.	¿Qué significa desestructurar en el parámetro?
Significa extraer propiedades del objeto directamente en los parámetros de la función.
2.	¿Qué ventaja tiene esta técnica?
Hace el código más limpio y evita escribir objeto.propiedad dentro de la función
*/