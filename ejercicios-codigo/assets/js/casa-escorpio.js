
/* Crea un programa llamado Número mágico, donde generas un número aleatorio y el usuario tendrá que adivinarlo.

Considera lo siguiente:

Si el numero ingresado es mayor, mostrar “El número que ingresaste es mayor al número mágico”
Si el numero ingresado es menor, mostrar “El número que ingresaste es menor al número mágico”
Si el número ingresado es igual al número mágico, mostrar “Felicidades, adivinaste el número mágico”
Agregar una opción para finalizar el programa */

alert("Bienvenido a la casa de Escorpio, vamos a jugar un juego")

let elNumeroEs = 369;
console.log(elNumeroEs);

elNumeroEs = parseInt(elNumeroEs)
/* console.log("El numero aleatorio es: " + elNumeroEs); */

while (true) {

    let numeroMagico;
    numeroMagico = prompt("No permitire que llegues al al patriarca, Tendras que adivinar el numero magico oculto, ¿Podras?, el tiempo se acaba tik tak - ESCRIBE -e- PARA FINALIZAR EL PROGRAMA");
    /* console.log(numeroMagico); */
    
    if(numeroMagico == elNumeroEs) {
    
        alert("Felicidades, adivinaste el número mágico, Lograste resolverlo, no tendras tanta suerte la proxima vez ")
        break;

    } if(numeroMagico === "e") {
    
        alert("Hasta la vista baby 😎 FIN DEL PROGRAMA")
        break;
    
    }  else if(numeroMagico > elNumeroEs) {

        alert("El numero que ingresaste es mayor al número magico")
        
    
    } else if (numeroMagico < elNumeroEs) {
    
        alert("El numero que ingresaste es menor al número magico")
        
    }
    
}

/* var max = 10; //NUMERO MAXIMO QUE SE VA A GENERAR
var min = 1; // NUMERO MINIMO QUE SE VA A GENERAR
var numerom = Math.random()*(max-min) + min; // ECUACION QUE GENERA UN NUMERO ENTRE EL NUMERO MAXIMO (MAX) Y EL NUMERO MINIMO QUE ES (MIN)
numerom = parseInt(numerom); // LA FUNCION parseInt RECIBE UN PARAMETRO Y LO CONVIERTE EN UN NUMERO ENTERO, EN ESTE CASO LA VARIABLE numerom GENERA UN NUMERO ENTRE 1 Y 100 QUE VA A SER CONVERTIDO A ENTERO EN CASO DE QUE ESTE SEA FLOTANTE.
console.log("El numero aleatorio es:"+ numerom);
while(true){ //EL WHILE TRUE VA A PERMITIR QUE SE EJECUTE TODO EL CODIGO HASTA QUE EXISTA UN BREAK. EN ESTE CASO EL USUARIO VA A SEGUIR COLOCANDO EL NUMERO HASTA QUE LO ADIVINE.
      var usuario = prompt("COLOCA UN NUMERO PARA ADIVINAR EL NUMERO MAGICO"); // EL USUARIO VA A CLOCAR SU NUMERO Y VA A SER COMPARADO CON EL NUMERO MAGICO.

if(usuario == numerom){ //SI EL NUMERO DEL usuario ES IDENTICO (CONSIDERANDO EL NUMERO Y EL TIPO DE NUMERO QUE EN ESTE CASO ES ENTERO) ENTONCES
  alert("HAS GANADO");//MUESTRA UNA ALERTA
  break;//Y TERMINA EL PROGRAMA
}
else if(usuario == 0){// SI EL NUMERO DEL usuario ES IGUAL A 0 ENTONCES EL PROGRAMA ENTENDERA QUE EL usuario NO QUIERE JUGAR MAS Y TERMINARA EL PROGRAMA
  break; // CON UN BREAK;"
}
else if(usuario < numerom){
  // SI EL USUARIO COLOCA UN NUMERO MENOR QUE EL NUMEROM, ENTONCES EL PROGRAMA LE AVISARA CON UNA ALERTA Y PERMITIRA QUE EL USUARIO VUELVA A COLOCAR EL NUMERO HASTA QUE LO ADIVINE GRACIAS AL WHILE(TRUE)
  alert("EL NUMERO ES MENOR QUE EL NUMERO MAGICO, VUELVE A INTENTARLO" );
}
else if(usuario > numerom){
  
  // SI EL USUARIO COLOCA UN NUMERO MAYOR QUE EL NUMEROM, ENTONCES EL PROGRAMA LE AVISARA CON UNA ALERTA Y PERMITIRA QUE EL USUARIO VUELVA A COLOCAR EL NUMERO HASTA QUE LO ADIVINE GRACIAS AL WHILE(TRUE)
  alert("EL NUMERO ES MAYOR QUE EL NUMERO MAGICO, VUELVE A INTENTARLO");
}

} // AQUI CIERRA EL WHILE
 */