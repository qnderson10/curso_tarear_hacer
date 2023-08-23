/**
 * Crearemos una aplicacion de consola interactiva
 * con inquirer
 * En la clase mensajes se creo la base de como se queria 
 * sin usar inquirer
 * En donde las funciones creadas en la clase mensajes se llaman
 * tomando como condicion que se siga mostrando el menu si la opcion
 * digitada es diferente de 0, la cual queda guardada en la variable opt 
 * Ahora usaremos inquirer para crearla, usando su documentacion 
 * y poder usar completamenta la navegacion de opciones de forma mas 
 * facil y optimizada
 * 
 */
require('colors');

const { inquirerMenu, pausa } = require('./helpers/inquirer');
// const { mostrarMenu, pausa } = require('./helpers/mensajes');

console.clear();

const main = async() => {
    let opt = '';
    
    do{
        opt = await inquirerMenu();

        if(opt !== 0) await pausa();
    }while(opt !== 0);
};

main();





