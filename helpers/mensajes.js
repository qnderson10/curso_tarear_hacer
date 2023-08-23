/**
 * La funcion crearMenu sera la principal donde se colocaron las
 * opciones
 * Usando la librearia readline se creo una interface donde se recibia
 * el valor digitado en la consola que mediante una promesa se mando 
 * al index que esperaba la respuesta para
 * En donde sigue la funcion pausa que usa readline igual que mostrarMenu
 * sino que solo se hace con la intencion de dar un ENTER de confirmacion 
 * para seguir digitando valores y navegar en las opciones
 */

require('colors');

const mostrarMenu = () => {
    return new Promise(resolve => {
        console.clear();
        console.log(`============================\n   Seleccione una opcion\n============================`.red);
        console.log(`${'1.'.green} Crear tarea`);
        console.log(`${'2.'.green} Listar tareas`);
        console.log(`${'3.'.green} Listar tareas completadas`);
        console.log(`${'4.'.green} Listar tareas pendientes`);
        console.log(`${'5.'.green} Completar tarea(s)`);
        console.log(`${'6.'.green} Borrar tarea`);
        console.log(`${'0.'.green} Salir\n`);

        const readline = require('readline').createInterface({
            input: process.stdin,
            output: process.stdout
        });

        readline.question('Seleccione una opcion: ', (opt) => {
            readline.close();
            resolve(opt);
        });
    })
    
}   

const pausa = () => {
    return new Promise(resolve => {
        const readline = require('readline').createInterface({
            input: process.stdin,
            output: process.stdout
        });
    
        readline.question(`Presione ${'ENTER'.green} para continuar`, (opt) => {
            readline.close();
            resolve();
        });
    })
    
}

module.exports = {
    mostrarMenu,
    pausa
}





