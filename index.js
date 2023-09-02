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
 * Se creara una carpeta llamada models donde se manejara
 * la logica de las opciones del menu
 * Se creo la lista de tareas con la clase Tareas y se agrego, luego se mostro
 * en consola, teniendo esta estructura
 * Tareas {
 *       _listado: {
 *           'f50b1924-5de8-42ee-b228-f84e425b49a2': Tarea {
 *           id: 'f50b1924-5de8-42ee-b228-f84e425b49a2',
 *           desc: 'Comprar comida',
 *           completadoEn: null
 *       }
 *   }
 *   }
 * Se creo un switch para recibir las opciones elegidas en el menu
 * correspondientes a las acciones que ejerce cada opcion
 * 
 * Se uso la funcion leerDB para verificar si existe el archivo con tareas
 * Luego con un if si ya hay tareas existentes se carga el objeto tareas
 * con las tareas del archivo
 * Al final del switch se guardan los objetos que se agreguen 
 * Se crearon las opciones de listar tareas completadas y pendientes
 * Se creo la opcion de borrar tareas la cual tambien se mostrara a elegir como
 * un menu interactivo
 * 
 * 
 */
require('colors');

const { guardarDB, leerDB } = require('./helpers/guardarArchivo');
const { inquirerMenu, pausa, leerInput, listadoTareasBorrar, confirmar } = require('./helpers/inquirer');
const Tareas = require('./models/tareas');
// const { mostrarMenu, pausa } = require('./helpers/mensajes');

const main = async() => {
    let opt = '';
    const opSP = [0,5,6];
    const tareas = new Tareas();

    const tareasDB = leerDB();

    if (tareasDB) {
        tareas.cargarTareasFromArray(tareasDB);
    }
    
    do{
        // Imprimir el menu
        opt = await inquirerMenu();
        // console.log(opt);
        switch (opt) {
            case 1:
                // Crear tarea
                const desc = await leerInput('Descripcion:');
                // console.log(desc);
                const ct = await confirmar('Esta seguro?');
                if (ct) {
                    tareas.crearTarea(desc);
                    console.log('Tarea creada correctamente'.green);    
                }
            break;
            case 2:
                //Listar tareas
                tareas.listadoCompleto();
            break;
            case 3:
                // Listar tareas completadas  
                tareas.listarPendientesCompletadas(true);
            break;
            case 4:
                //Listar tareas pendientes
                tareas.listarPendientesCompletadas(false);
            break;
            case 6:
                //Listar tareas pendientes
                const id = await listadoTareasBorrar(tareas.listadoArr);
                if (id !== 0) {
                    const ok = await confirmar('Esta seguro?');
                    if (ok) {
                        tareas.borrarTarea(id);
                        console.log('Tarea borrada correctamente'.red);
                        await pausa();
                    }
                }
            break;
        };

        guardarDB(tareas.listadoArr);
        
        // const tareas = new Tareas();
        // const tarea = new Tarea('Comprar comida');
        // tareas._listado[tarea.id] = tarea;
        // console.log(tareas);

        if(!opSP.includes(opt)) await pausa();
    }while(opt !== 0);
};

main();





