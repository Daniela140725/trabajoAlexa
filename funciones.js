function saludar(){
    let nombre="sofia guzman";
    let mensaje="hola";
    let saludo=null;
    saludo=`${mensaje} ${nombre}`;
    

}
saludar();
// funcion con parametros
function saludarPersona(nombrePersona){
let mensajePersona="hola";
let saludoPersona=null;
saludoPersona=`${mensajePersona} ${nombrePersona}`;
return saludoPersona;
}
saludarPersona("Daniela murcia");// let daniela es igual a saludo persona
let Ana=saludarPersona("ana torres");
console.log(Ana);
let Luis=saludarPersona("luis ramirez");
console.log(Luis);
// typeof para saber el tipo de dato de una variable
let numeroDecimal=6.24;
let respuesta=typeof numeroDecimal;
console.log(respuesta);
let nombreCompleto="sofia guzman";
console.log(typeof nombreCompleto);