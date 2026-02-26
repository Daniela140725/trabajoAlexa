let carro={
    marca:'Toyota',
    modelo:'Corolla',
    propietario:{
        nombre:'juan',
        edad:30
    }
}

carro.propietario.edad=20;

console.log(carro.propietario.edad);

/*
1.	¿Cómo se modifica una propiedad?
Usando el punto o corchetes: objeto.propiedad = nuevoValor; o objeto['propiedad'] = nuevoValor;
2.	¿Qué diferencia hay entre modificar y copiar un objeto como harías la copia sin spread investiga?
Modificar: Cambias el mismo objeto original.
Copiar: Creas un nuevo objeto independiente.
*/