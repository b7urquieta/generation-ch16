
// Control de flujo

/* let nombre = "Brandon"
let edad = 28; */

let nombre = prompt("Escribe tu nombre");
console.log(nombre);

// casteo - convertir un tipo de dato
let edad = parseInt( prompt("Escribe tu edad") );
console.log(edad);

if(nombre === "Brandon" && edad === 28){
    // scope - contexto
    console.log("Eres un ");
    console.log("ADMIN 😎😉");

} else if (nombre === "Maria") {

    console.log("Eres una mentora");
}


else if (nombre === "Marina") {

    console.log("Eres la jefa 😜");
} else {
   
    console.log("Eres un alumno");
}

console.log("Fin del programa");





