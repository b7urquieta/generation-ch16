`use strict`

function miSuma(a, b){
    let resultado = (a + b);
    console.log("la suma es:", resultado);
}

miSuma(2,3)

function miSuma(a, b){
    console.log("la suma es:" + (a + b));
}
miSuma(4,6);

function miProducto(a, b){
    return (a * b);
}

console.log("el producto es " + miProducto(4 , 5));

let res;

function miResta(a, b){
    return (a - b);
}

res= miResta(10, 4);

console.log("La resta es " + res);


const a = "Brandon ";
const b = "Urquieta ";
const c = "Navarro ";


function miNombre(a, b, c){
    return a + b + c
}

console.log("Mi nombre completo es " + (a + b +c));

miNombre(a, b, c);


let div;

function miDivision(a, b){
    return a / b;

}

div = miDivision(40, 4)

console.log("La division es " + div);