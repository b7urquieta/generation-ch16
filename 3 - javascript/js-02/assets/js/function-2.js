`use strict`

function miFuncion (a, b){
    return (a + b);
}

let resultado = miFuncion(3, 6);

console.log("El resultado es: " + resultado);

/*************************Funcion Expresion o anonima***************************/

let suma = function (a, b){
    return (a + b);
};

/* suma = (10, 20);

console.log("El resultado de la suma es: " + suma ); */

let res = suma (2, 3);

console.log("La suma es: " + res);

let caracteres = "La suma es: "

console.log(caracteres + res);

// Operaciones basicas

//Resta

let resta = function (a, b) { return (a - b); };

res = resta (7, 3);

console.log("El resultado de la resta es: " + res);

// Multiplicacion

let multiplicacion = function (a, b) { return (a * b); };

res = multiplicacion (20, 50);

console.log("El resultado de la multiplicacion es: " + res);

// Division

let division = function (a, b) { return (a / b); };

res = division (1000, 48.5);

console.log("El resultado de la division es: " + res.toFixed(1));

// Raiz cuadrada

let raizCuadrada = function (a) { return Math.sqrt(a); }

res = raizCuadrada (100);

console.log("La raiz cuadrada del numero es: " + res);

/***********************************Self Invoking******************************************/

(function (a, b){
    console.log("El resultado de Self Invoking es " + (a + b)*4);
}
) (3, 4);