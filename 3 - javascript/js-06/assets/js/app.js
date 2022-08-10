/* console.log(document.URL); */

//getElementById()

console.log(document.getElementById("parrafo1"));

const $parrafo1 = document.getElementById("parrafo1");

console.log(parrafo1.textContent);

parrafo1.textContent = "Hola desde el parrafo 1";

console.log(parrafo1.textContent);

console.log(parrafo1.style);

parrafo1.style.color = "red";
parrafo1.style.backgroundColor = "yellow";


//querySelector()
//etiqueta = p
//clase = .parrafo
//id = parrafo1


const parrafo2 = document.querySelector(".parrafo");
console.log(parrafo2.textContent);

parrafo2.textContent + "\n Modificando el contenido desde JavaScript ";

// \n -- inserta un salto de linea === <br>
// \t

//querySelectorAll() lista de nodos - nodeList

const parrafos = document.querySelectorAll("p");

console.log(parrafos[2]);

parrafos[2].style.fontSize = "2rem";

//css - font-size
//js - (camelCase) fontSize - lower camel case}


//Modificar los atributos de html
const enlace = document.getElementById("enlace");
console.log(enlace.href);

enlace.href = "https://www.youtube.com/";
enlace.target = "blank";
enlace.textContent = "Enlace de Youtube";


//----------------------------------------------------------------------------------------//

/* console.log(document.getElementById("actividad"));

const interactiveWeb = document.getElementById("actividad") */

//----------------------------------------------------------------------------------------//

/* Reemplazar contenido */

const parrafo4 = document.getElementById("parrafo4");

console.log(parrafo4.nodeName);
console.log(parrafo4.textContent);
console.log(parrafo4.innerHTML); // muestra el html que haya en el interior del elemento
console.log(parrafo4.outerHTML); // muestra el contenido html, incluyendo al elemento

/* parrafo4.innerHTML = '<a href="https://google.com/">Enlace</a>'; // reemplaza el elemento completo

parrafo4.outerHTML = '<a href="https://google.com/">Enlace</a>'; // reemplaza el contenido del elemento completo 
*/

//parrafo4.outerHTML = '<div class="elemento">Este es un div</div>';

//JS permite modificar las clases css
//utilzando style
//usando classlist

console.log(parrafo4.classList.contains("elemento"));
/* parrafo4.classList.add('elemento') */

const cambiarColor = () => {
    parrafo4.classList.toggle('elemento');

}

cambiarColor(); //se agrega la clase
cambiarColor(); //se quita la clase










