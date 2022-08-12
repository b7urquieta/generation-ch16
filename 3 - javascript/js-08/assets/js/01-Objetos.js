`use strict`

let x = 10;
console.log(x);


let persona = {
    nombre: 'Brandon',
    apellido: 'Urquieta',
    edad: 29,
    email: 'b7urquieta@gmail.com',

    /* nombreCompleto: function () {
        return this.nombre + '' + this.apellido;
    } */

    idioma: 'es',
    get leng() {
        return this.idioma.toUpperCase();
    },
    set lang (Lang){
        this.idioma = Lang.toLowerCase();
    }
    
    }

    console.log (persona.leng);
    console.log (persona.leng);
    persona.lang = "ES";        
    console.log (persona.leng);
    console.log(persona.idioma);


persona.tel = '555567890'
persona.te1 = '8749287349'

console.log(persona);
console.log(persona.nombre);
/* console.log(persona.nombreCompleto()); */

// for in

for (varPropiedad in persona){
    console.log(persona[varPropiedad]);
}

let personaString = JSON.stringify(persona);
console.log(personaString);


/* let algo = new Object ();
console.log(persona.nombre);
console.log(persona.nombreCompleto());

console.log(persona.nombre);
console.log(persona.apellido);
console.log(persona.edad);
console.log(persona.email);
console.log(persona.tel);

let personas = new Object();
personas.nombre = "Juan"
personas.apellido = "Perez"
personas.edad = 27;
personas.email = 'perez.juan@gmail.com';

console.log(personas);

console.log(personas.nombre);
console.log(personas.apellido);
console.log(personas.edad);
console.log(personas.email); */



