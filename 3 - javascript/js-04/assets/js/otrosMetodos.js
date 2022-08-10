//sort()
//ordenar los elementos de un arreglo

const arr = ["X","A","H", "a", "W", "b"];

arr.sort();

console.log(arr);

const arr2 = ["Hola", "adios", "bienvenido", "Calle"]

arr2.sort();

console.log(arr2);

const arr3 = [5, 1231, 567, 1, 80]

arr3.sort((a, b) => b - a); // ordena numero de forma descendente - de mayor a menor

arr3.sort((a, b) => a - b); // ordena numero de forma ascendente - de menor a mayor

console.log(arr3);


//funcion declarada
//hoisting
//Un proceso de reacomodo automatico de javascript
function sumar(a, b){
    
    return a + b;

}
console.log(sumar(5, 7));

let a = 2;
console.log(a);

//funcion expresada
//hoisting no fucniona

const multiplicar = function(a, b){
    return a * b;
}
console.log(multiplicar(3,5));

//funciones flecha
//surgio a partir del 2015 / nueva variacion, se considera mas elegante

/* const dividir = (a, b) => {
    return a / b;
}

console.log(dividir(10,2)); */

//apunta a una localidad en la memoria donde se encuentra el proceso a invocar, y asi se le asignan los parametros
const dividir = (a, b) => a / b;

console.log(dividir(10,2));

//forEach()
// un ciclo que recorre en automatico todo nuestro arreglo

const arrNumeros = [1,4,6,8,10, 20, 30];

/* //metodo for

for( let i = 0; i < arrNumeros.length; i++){
    arrNumeros[i] = arrNumeros [i] *2;

} */

arrNumeros.forEach((elemento) =>
        console.log(elemento *=2)); // elemento = elemento * 2

//Este bucle se suele usar en favor del bucle for cuando necesitamos encapsular código ya que pasamos una función como parámetro al bucle foreach ,esta función se puede sustituir por una arrow (flecha) function

//La ventaja de este tipo de bucles es que el código es mucho más mantenible ya que no tienes que declarar contadores todo el rato, sobre todo si es para recorrer arrays y listas