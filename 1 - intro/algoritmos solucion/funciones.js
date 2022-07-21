 // funciones


/*  function sumar(numero1, numero2) {
    console.log("Voy a sumar"); 
    console.log("el resultado de la suma es: $" + (numero1 + numero2));   
 }  */

/*  sumar(10,5);
 sumar(20,5);
 sumar(62,80) */

 // ejercicio 2 utilizando funciones

/*  function calculadoraSueldo(sueldoIngresado, diasTrabajados) {

    let nombre = prompt("Escribe tu nombre");
    console.log(nombre);

    const sueldo = sueldoIngresado;
    const diasSemana = diasTrabajados;
    const semanasMes = 4;

    console.log("Sueldo semanal: $" + (sueldo * diasSemana));
    console.log("Sueldo semanal: $" + (sueldo * diasSemana * semanasMes));
    
 }

 calculadoraSueldo(100, 2);
 calculadoraSueldo(1,6);
 calculadoraSueldo(50,1);
 */

/* function calculadoraSueldo(sueldoIngresado,diasTrabajados) {
    
    let nombre = prompt("Escribe tu nombre")
    console.log(nombre);

    const semanasMes = 4; // local

    console.log("Sueldo semanal: $" + (sueldoIngresado * diasTrabajados));
    console.log("Sueldo mensual: $" + (sueldoIngresado * diasTrabajados * semanasMes));

    return semanasMes;
}

let mes = calculadoraSueldo(100,2);


console.log(mes);
 */

// calculadora de porcentajes

// 0.6 = 60%
function calcularPorcentaje(numero, porcentaje) {

    let resultado = numero * porcentaje; // local

    return resultado;

}

/* let numero2 = calcularPorcentaje(100, 0.40);
console.log(numero2); */

let porcentajeResultado = calcularPorcentaje(100, 0.40);
console.log(porcentajeResultado);

let multi = 5 * 5
console.log(multi);