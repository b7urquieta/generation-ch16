/*Crea una calculadora para convertir un valor ingresado por el usuario a grados Celsius, Fahrenheit y Kelvin.

Considera:

Solicitar el valor por medio de un prompt
Crear funciones para realizar los cálculos
Mostrar los resultados mediante alertas
*/

var grados = Number(prompt('Ingresa el valor a convertir (en número): '));
var opcion = Number(prompt('En que ingresas los datos: (1.- Celsius 2.-Fahrenheit 3.-Kelvin) '));

function gradosCelsius (grados)
{
    let aKelvin = grados + 273.15;
    let aFahrenheit = (1.8 * grados) + 32;

    alert('De grados Celcius a Fahrenheit: ' + aFahrenheit);
    alert('De grados Celcius a Kelvin: ' + aKelvin);
}

function gradosFahrenheit(grados)
{
    let aKelvin = ((grados - 32) * (5 / 9) ) + 273.15;
    let aCelsius = (grados - 32) * (5 / 9);

    alert('De grados Fahrenheit a Celcius: ' + aCelsius);
    alert('De grados Fahrenheit a Kelvin: ' + aKelvin);
}

function gradosKelvin(grados)
{
    let aCelsius = grados - 273.15;
    let aFahrenheit = (1.8 * (grados/273.15)) + 32;

    alert('De grados Kelvin a Celcius: ' + aCelsius);
    alert('De grados Kelvin a Fahrenheit: ' + aFahrenheit);
}

switch (opcion) {
    case 1:
       gradosCelsius(grados);
        break;

    case 2:
        gradosFahrenheit(grados);
        break;

    case 3:
        gradosKelvin(grados);
        break;

    default:
        console.log("Sorry. Nontendi");
        break;
}
