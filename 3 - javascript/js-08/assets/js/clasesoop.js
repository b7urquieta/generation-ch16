`use strict`

class Persona{

    constructor(nombre, apellido){
        this._nombre = nombre;
        this._apellido = apellido;
    }

get nombre(){
    return this._nombre;
}
set nombre(nombre){
    this._nombre = nombre;

}

}


let persona1 = new Persona("Brandon", "Urquieta");
console.log(persona1);

persona1.nombre = 'David Guzman'
console.log(persona1.nombre);

let persona2 = new Persona("Ana", "Guzman");
console.log(persona2);

let persona3 = new Persona("Benito", "Ortiz");
console.log(persona3);