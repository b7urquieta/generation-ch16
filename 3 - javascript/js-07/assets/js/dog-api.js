`use strict`

/* URLs para consumir */
const urlAleatorios = 'https://dog.ceo/api/breeds/image/random'

/* Elementos del DOM */
const imagenPerrito = document.getElementById("img-perrito");
console.log(imagenPerrito);

const btn = document.getElementById ("btn-perrito")
console.log(btn);

btn.addEventListener("click", () => {

    console.log("Boton presionado");

    // Agregar la funcionalidad
    obtenerPerritoAleatorio(urlAleatorios)



})

/* Funciones */
async function obtenerPerritoAleatorio(url){

    const respuesta = await fetch(url)
    const datos = await respuesta.json()

    console.log(datos);
    console.log(datos.message);
    console.log(datos.status);

    imagenPerrito.src = datos.message

}

/* obtenerPerritoAleatorio(urlAleatorios); */

/*  

    Instrucciones:

    * Utilizar la API cat
        - https://api.thecatapi.com/v1/images/search

    * Con un boton se debe mostrar una imagen de un gato
    * Que las imagenes tengan un tamaño de 600x400 sin deformar la imagen

    Nota:
    Cuidado con el tipo de dato que se recibe

*/




