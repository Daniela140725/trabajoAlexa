let carro={
    marca:'Toyota',
    modelo:'Corolla',
    propietario:{
        nombre:'jherson',
        edad:24
    }
}

const {propietario:{nombre,edad}} = carro;
console.log(nombre);
console.log(edad);

/*
1.	¿Por qué se usan llaves dentro de llaves?
Porque estás desestructurando un objeto dentro de otro objeto
2.	¿Qué significa el anidamiento en desestructuración?
Significa extraer propiedades que están dentro de otros objetos (niveles internos)
*/