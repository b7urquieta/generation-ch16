

/* Bucles */
/* Estuctura que nos permite repetir nuestro codigo */

/* For */
/* De que es un ciclo controlado */

/* Se le tiene que indicar lo siguiente:

    * La variable con la que va a trabajar
    i,j, k, l
    * Condicion para que se ejecute


*/

for(let i = 0; i < 10; i++  ) {

    console.log("El valor de la i es " + i);


}

for(let i = 0; i < 10;i= i + 2  ) {

    console.log("El valor de la i es " + i);


}

/* while */
/* Porque es un ciclo no controlado */

/*
    Se necesita:

    * Una condicion => True o False
*/

// Mientras
/* while (condition) {
    
} */

let saludo;

while(saludo !== "Hola") {

    saludo = prompt("Saludame")
}


