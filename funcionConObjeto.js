let persona = {
    nombre: 'Daniela',
    profesion: 'Desarrolladora'
}

function saludar(nombre,profesion) {
    return `Hola ${nombre}, tu profesión es ${profesion}`;
}

let personita = saludar(persona.nombre, persona.profesion);

console.log(personita);

/*
1.	¿Por qué enviamos el objeto completo?
Para poder usar todas sus propiedades dentro de la función sin enviarlas una por una.
2.	¿Qué ventaja tiene enviar objetos a funciones?
Hace el código más organizado, limpio y fácil de mantener.
Además, permite trabajar con muchos datos usando un solo parámetro
*/