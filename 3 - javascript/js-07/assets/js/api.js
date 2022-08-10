`use strict`
/*  

    Instrucciones:

    * Utilizar la API cat
        - https://api.thecatapi.com/v1/images/search

    * Con un boton se debe mostrar una imagen de un gato
    * Que las imagenes tengan un tamaño de 600x400 sin deformar la imagen

    Nota:
    Cuidado con el tipo de dato que se recibe

*/


const urlAleatorios = "https://api.thecatapi.com/v1/images/search"

const imagenGatito = document.getElementById("img-kitty");
console.log(imagenGatito);

const btn = document.getElementById ("btn-michi")
console.log(btn);

btn.addEventListener("click", () => {

    console.log("Boton presionado");

    obtenerGatitoAleatorio(urlAleatorios)

})

async function obtenerGatitoAleatorio(url){

    const respuesta = await fetch(url)
    const datos = await respuesta.json()

    console.log(datos[0].id);

    console.log(datos[0].url);

    imagenGatito.src = datos[0].url

}

obtenerGatitoAleatorio(urlAleatorios)