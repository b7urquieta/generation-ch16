/* alert("Hola mundo") */

/* Control de flujo */
/* Condicionales */
/* If */

/*if(condicionA){
/*
    Codigo que se hace si se cumple la condicion A
    
} else if (condicionB){
/*
    Codigo que se hace si se cumple la condicion B

} else if (condicionC) {
/*
    Codigo que se hace si se cumple la condicion C

} else {
/*
    Codigo que se hace si no se cumple ninguna de las condiciones anteriores

} */

let condicion = false;

if(condicion === "10"){
/*
    Codigo que se hace si se cumple la condicion A
*/

console.log("Entro en la condicion A");

} else if (condicion === "B"){
/*
    Codigo que se hace si se cumple la condicion B
*/

console.log("Entro en la condicion B");

} else if (condicion === false) {
/*
    Codigo que se hace si se cumple la condicion C
*/

console.log("Entro en la condicion C");

} else {
/*
    Codigo que se hace si no se cumple ninguna de las condiciones anteriores
*/

console.log("No cumple con ninguna");

}

function dividir (a, b) {

        if (b === 0){
            console.log("No se puede realizar la operacion");
        }
        else {
            console.log(a/b);
        }
    }

dividir(10,2);

/* Switch */

let nuevaCondicion = "No sé";

switch(nuevaCondicion) {
    case "Hola":
        console.log("Buenos Dias");
        console.log("Espero que te encuentres bien");
    break;
    case "Adios":
        console.log("Nos vemos");
        break;

    case "Saludo" :
        console.log("Te mando un saludo");
        break

    default: // por defecto
        console.log("No entendi tu mensaje");
        break
    

}

/* == O === regresa un true si la condicion se cumple */

// Se utiliza para evaluar expresiones


let edad = 30

    switch(edad >= 18){
        case true:
            console.log("mayor");
            break
        case false:
            console.log("menor");
    }

    let elegir = "sumar"

    switch(elegir){

        case "sumar":
            console.log("Vamos a sumar");
            break
    
        case "restar":
            console.log("Vamos a restar");
            break
    
        case "dividir":
            console.log("Vamos a dividir");
            break
    
        case "multiplicar":
            console.log("Vamos a multiplicar");
            break
    
        default:
            console.log("No entiendo");
    }
    

if(elegir === "sumar"){

    console.log("Vamos a sumar");

}else if(elegir == "restar"){

    console.log("Vamos a restar");

}else if(elegir == "dividir"){

    console.log("Vamos a dividir");

}else if(elegir == "multiplicar"){

    console.log("Vamos a multiplicar");

} else {

    console.log("No entiendo");

}
