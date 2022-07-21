
function saludar ( ) {
    //console.log("Hola mundo");
}

/* saludar(); */

// Arreglos / Arrays

let num = [];
//console.log(num);

/* let arr1 = new Array ();
console.log(arr1); */


// usar un arreglo

const arr = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26];
// notacion de corchetes  []
//console.log(arr[22]);

arr[26] = 40;
arr[27] = 27;
arr[27] = 0;
//arr[28] = undefined
arr[29] = 100;

arr[7] = 9;

//console.log(arr);

// Propiedades de los arreglos
// descripciones de nuestro arreglo
//console.log(arr.length);

//  Metodos
//  acciones que puede realizar un arreglo

const frutas = ["Manzana", "platano", "fresa"]
/* console.log(frutas); */

// push()
// agrega un valor al final del arreglo

// Hay 3 maneras de agregar valor a una forma

let fruta = "Toronja";

frutas.push("Naranja");
frutas.push(fruta);

/* console.log(frutas); */

//pop()
// quita un elemento del final del arreglo

let elementoBorrado = frutas.pop();
/* console.log(frutas);
console.log(elementoBorrado); */


// unshift ()
// arega un elemento al inicio del arreglo

let devolver = frutas.unshift("Uva", "Pera");
/* console.log(frutas);
console.log(devolver); */


// shift ()
// quita un elemento al inicio del arreglo

let devolver2 = frutas.shift();
/* console.log(frutas);
console.log(devolver2); */

frutas.shift ();
frutas.shift ();
let frutaQuitada1 = frutas.shift();
let frutaQuitada = frutas.shift();
/* console.log(frutas);
console.log(frutaQuitada1);
console.log(frutaQuitada);
 */


let nombre= [];
/* console.log(nombre); */

const personas = ["Maria", "Dani", "Luis","Juan", "Camila"];
personas.splice(1, 1); 
/* console.log(personas); */

personas.splice(2, 1);
/* console.log(personas); */

/* personas.splice(1,1);

personas.unshift("Luis"); */

personas.unshift(personas.splice(1,1)[0]);
/* console.log(personas); */

personas.push("Brandon");
/* console.log(personas);
 */
/* personas.push("Maria");
console.log(personas); */

/* console.log(personas. indexOf("Maria"));
console.log(personas. indexOf("Brandon")); */

const newArr = [1, 45, "Hola", "Adiós", true, null, [
    30, 31, 32 ], [ "Azul", "Amarillo", "Verde" ]];


/* console.log(newArr);
console.log(newArr[6][1]);
console.log(newArr[7][1]); */



// Objetos
// estructura especial llamada objeto
// nos permiten guardar pares de valores
// nos permiten agregar elementos en pareja
// key - valor
// llave - valor

const obj = { 
    nombre : "Pedro", 
    edad : 25,
    sexo : "masculino",
    color: "azul",
    hobbies : [ "Leer" , "Escuchar música"],
    newArr : newArr 
};

console.log(obj.edad);
console.log(obj.hobbies[1]);
