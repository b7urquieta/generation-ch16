/* alert("Holi") */

/* -------------------- Ejercicio #3 -------------------- */
/*  Escriba bucles while hace lo siguiente:

    1.- Imprime repetidamente el valor de la variable xValue, disminuyéndolo 
        en 0,5 cada vez, mientras xValor siga siendo positivo.

    2.- Imprime todos los números impares entre el 1 y el 100.

    3.- Escribe un método con un bucle while para imprimir del 1 al n entre corchetes. 
        Por ejemplo, si n = 6 imprime [1] [2] [3] [4] [5] [6]

    4.- Escribe un método con un bucle while que calcule la suma de los primeros n enteros positivos: 
        suma = 1 + 2 + 3 + ... + n
            Ejemplos:
                n = 5 suma = 15
                n = 19 suma = 190
*/

/* ---------- 1 ---------- */
console.log("\nDecremento en 0.5")
let xValue = 5;
while (xValue >= 0) {
    console.log(xValue);
    xValue = xValue - 0.5;
}

/* ---------- 2 ---------- */
console.log("\nNúmeros Impares:")
let i = 0;
while (i <= 100) {
    if(i % 2 === 1) {
        console.log(i)
    }
    i++;
}

/* ---------- 3 ---------- */
console.log("\nNúmeros entre Corchetes:")

let j =1; 
let n = 9;
while (j <= n) {
    console.log("[" + j + "] ");
    j++;
}

/* ---------- 4 ---------- */
console.log("\nSuma de los primeros n enteros positivos:")
let suma = 0;
let num = 19;
console.log("n = " + num);

while (num >= 0) {
    suma = suma + num;
    num--;
}
console.log("suma = " + suma);