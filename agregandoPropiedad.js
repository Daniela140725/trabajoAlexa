let persona={
    nombre:'Daniela',
    edad:19,
    profesion:'desarrollladora'
}
persona.telefono='3113428327';

console.log(`Nombre: ${persona.nombre}
            Edad: ${persona.edad}
            Profesión: ${persona.profesion}
            telefono: ${persona.telefono}`);

/*
1.	¿Cómo se agrega una propiedad a un objeto?
Usando la notación de punto (objeto.propiedad = valor) o corchetes (objeto['propiedad'] = valor).

2.	¿Se puede modificar un objeto declarado con const? Explica.
const no permite cambiar la referencia del objeto, pero sí su contenido
*/
//ejemplo
const persona2={
    nombre:'juan',
    edad:24,
    profesion:'aprendiz'
}
persona2.telefono='3046618506';

console.log(`Nombre: ${persona2.nombre}
            Edad: ${persona2.edad}
            Profesión: ${persona2.profesion}
            telefono: ${persona2.telefono}`);