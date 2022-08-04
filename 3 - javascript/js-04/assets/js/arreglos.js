// Arreglos
//Coleccion de elementos
//Cada elemento ocupa una posicion
//Esa posicion se conoce como indice y comienza a partir de 0

let arr = [1,2,3,4];
console.log(arr);

//propiedades - describen
//métodos - acciones que puede realizar

console.log(arr[2]);
arr[4] = 190;
arr[4] = "Hola"
console.log(arr);

//metodos de arreglos

const arreglo = ["adios"];

//push()
/* agrega elementos al final */

arreglo.push(2);
arreglo.push(true);

let num = 500;

arreglo.push(num);

console.log(arreglo);

//unshift
// agrega elementos al inicio del arreglo
arreglo.unshift("A");
arreglo.unshift("B");

console.log(arreglo);

console.log(typeof (arreglo[4]));

//Metodos para quitar elementos
//pop()
//quita un elemento del final del arreglo

let dato1 = arreglo.pop();
console.log(dato1);

console.log(arreglo);

//shift()
//Quitar un elemento del inicio del arreglo

let dato2 = arreglo.shift();
console.log(dato2);
console.log(arreglo);

//splice()
//quita una parte de cualquier posicion de nuestro arreglo

arreglo.splice(1, 1, "parangaricutirimicuaro", 5614654);
//splice(
//   posicion de inicio,
//   cantidad de elementos a afectar,
//   elemento/s que queremos insertar)

console.log(arreglo);

// modifican el arreglo original

//Metodos que no modifican el arreglo original
//hacen una copia, modifican esa copia

//slice()
// cortar partes de un arreglo
let dato3 = arreglo.slice(0, 2);

//debemos indicar un rango
//

console.log(dato3);

console.log(arreglo);