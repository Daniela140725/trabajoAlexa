let estudiante={
    matematicas:{
        nota1:4.7,
        nota2:3.6,
        nota3:4.0
    },
    ingles:{
        nota1:4.0,
        nota2:3.9,
        nota3:4.3
    }
}

console.log(`Matemáticas:
Nota 1: ${estudiante.matematicas.nota1}
Nota 2: ${estudiante.matematicas.nota2}
Nota 3: ${estudiante.matematicas.nota3}`);

console.log(`Inglés:
Nota 1: ${estudiante.ingles.nota1}
Nota 2: ${estudiante.ingles.nota2}
Nota 3: ${estudiante.ingles.nota3}`);

/*
¿Cómo se accede a una propiedad dentro de otro objeto?
Se accede usando punto (.) uno tras otro.
Ejemplo: objeto.propiedad1.propiedad2
*/