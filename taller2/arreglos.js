let numeros=[1,2,3,4,5];
console.log(numeros);
console.log(numeros.length);
/*ver dato 3 */
console.log(numeros[2]);
/*adicionar un nuevo datos en la ultima posicion sin uso de push*/
numeros[5]=6;
/*verificar*/
console.log(numeros);
/*adicionar un nuevo datos con  push*/
numeros.push(10);
/*verificar*/
console.log(numeros);
/*eliminar el ultimo dato*/
numeros.pop();
/*verificar*/
console.log(numeros);
/*adicionar un nuevo dato al inicio del arreglo*/
numeros.unshift(20);
/*verificar*/
console.log(numeros);
numeros[0]=0;/*modificar el primer dato del arreglo*/
/*verificar*/
console.log(numeros);
/*eliminar el primer dato del arreglo*/
numeros.shift();
/*verificar*/
console.log(numeros);
/*includes*/
let buscar12=numeros.includes(12);
console.log(buscar12);
let buscar6=numeros.includes(6);
console.log(buscar6);
/*indexOf*/