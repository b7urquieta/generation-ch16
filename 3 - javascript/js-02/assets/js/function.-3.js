`use strict`

/********Funciones como Objetos *********/

function miFuncion (a = 6, b = 7){
    let res = 0; // atributo/propiedad
    res = (a * b) // accion/proceso
    return res; // resultado
}

console.log( typeof miFuncion);
var miFuncionTexto = miFuncion.toString();
console.log(miFuncionTexto);

