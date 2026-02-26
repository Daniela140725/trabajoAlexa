let carro={
    marca:'hyundai',
    modelo:'Tucson',
    propietario:{
        nombre:'Daniela',
        edad:18
    }
}

function mostrarInfoPropietario({propietario:{nombre, edad}}) {
    return `El propietario es ${nombre} y tiene ${edad} años.`;
}

let infoPropietario = mostrarInfoPropietario(carro);

console.log(infoPropietario);

/*
1.	¿Por qué no necesitas usar punto dentro del return?
Porque ya extrajiste las propiedades en los parámetros, entonces las usas como variables normales
2.	¿Qué ocurre si el objeto no tiene esa propiedad?
La variable queda como undefined y puede causar error si intentas usar algo dentro de ella
*/