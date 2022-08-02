
'use strict';
// Javascript de manera estricta y es una buena practica // 


/*  Agregar comentarios en js - shift + alt + a, option + alt + a, ctrl + k y ctrl + c */

/* tipos de variables */
let a = 20; // local
const B = 0; // constante y local

var c; // global

const PI = 3.1416

/*
Scope - definir el contexto
espacio en el que vive la variable
*/

if(true){
    let d = 15;
}

//var d = "hola";

/* d = "hola";

console.log(d); */

/* Tipos de datos */

// String
let cadena = "Hola Mundo!";
let cadena2 = "Hola mundo"; // una comilla //

//Number
let numero = 5;
let numero1 = 5.89;
let numero3 = -5.89;

//Boolean
let booleano = true;
let booleano2 = false;

//undefined
let variable;
console.log(variable + 5);

//null
let vacio = null
console.log(vacio);
// Tiene el valor de no valor

//NaN - Not a Number
//no es un número
//tratar de realizar una operacion aritmetica con algun dato que no es un numero (es un error)

/* Plantillas literales
template strings
literal strings */

console.log(`Esta es una cadena ${5 + 4}`);
console.log("!Esta es una cadena normal ${5+4}");

/* let nombre = "Raul";

/* let presentacion = ``
console.log("Mi nombre es " + nombre);
console.log(`Yo me llamo ${nombre}`);

console.log("<h1>Hola</h1>");
console.log(`<h1>Hola</h1>`); */

/* Arreglos - matrices - arrays */
let arr = [1, "A", null, undefined, [true,false]];

/* let arr = [1, "A", null, undefined, [false,false]]; */

// notacion de corchetes
/* console.log(arr[4][0]); */

if (arr[4][0] === true){
    console.log("es verdad");
}

let arr2 = new Array("B", 2)
/* console.log(arr2); */

/* Objetos */
// clave / valor

const persona = { 
    nombre: "Raul",
    edad: 31,
    hobbies: [
        "Leer",
        "Ver Shrek 1 y 2",
        "Comer"
    ],
    auto: {
        marca: "VW",
        modelo: "Pointer",
        year: 2000
    },   
    
    saludar: function(){
        return "Saludar"
    }
}; 

persona.nombre = "Panchito";

//Notacion de punto
console.log(persona.nombre);
console.log(`Mi nombre es ${persona.nombre}`);
console.log(`Uno de sus hobbies es ${persona.hobbies[1]}`);

console.log(`La marca de mi carro es es ${persona.auto.marca}`);

console.log(`La accion que realizo es: ${persona.saludar()}`);








//Arreglo de objetos
/* [{}, {}, {}] */

















