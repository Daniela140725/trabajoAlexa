//alert mensaje html
alert("hola esta es una alerta");
//prompt para pedir datos al usuario
let n1=prompt("ingresa un numero");
console.log(n1);
let n2=prompt("ingresa otro numero");
//parseInt para convertir un string a numero entero
n1=parseInt(n1);
n2=parseInt(n2);
let resultado=n1+n2;
alert("La suma es: "+resultado);

//confirm para confirmar una accion
let respuesta=confirm("¿Deseas continuar?");
if(respuesta==false){//!no
    alert("Operacion cancelada");
}
if(respuesta==true){//si
    alert("Operacion confirmada");
}