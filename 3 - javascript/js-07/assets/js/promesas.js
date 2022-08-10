// Variable que simula los datos pedidos
const saludo = "Hola mundo"

const datos = [
{
    nombre: 'Brandon',
    apellido: 'Urquieta'
},
{   nombre: 'Brandon',
    apellido: 'Urquieta'
},
{
    nombre: 'Brandon',
    apellido: 'Urquieta'
}
]


// Funcion para simular una peticion
function obtenerDatos() {
    
    return new Promise( (resolve, reject) => {
        
        setTimeout( () => {
            
            if(false){

                resolve(datos)
            } else {

                reject('Nunca te quiso')
            }
        }, 2000)


    })

}

obtenerDatos().then((nada) => {
    console.log(nada);

} ).catch( (error) =>{

    console.log('Existe un error en la peticion 1');
    console.log(error);

})


// Forma #2 - Funciones asincronas - await sync

async function funcionAsincrona (){

    try{
        
        const datos = await obtenerDatos()
        console.log(datos);
    } catch(error){

        console.log(error);

    }

} funcionAsincrona();

