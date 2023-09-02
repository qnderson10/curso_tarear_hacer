/**
 * Esta clase tendra toda la logica del menu interactivo de la
 * consola
 * Creamos un objeto con los atributos que pide la
 * libreria inquirer
 * En la funcion asincrona inquirerMenu la llamamos igual 
 * que la de mensajes, solo que aqui usamos la funcion
 * inquirer.prompt para crear la interfaces con las preguntas
 * que ya creamos
 * NOTA: Despues de la version 8 la libreria
 * inquirer no se maneja con COMMONJS sino con ESM
 * entonces no se puede trabajar con esa sin cambiar 
 * el entorno a ESM
 * Configuramos la estructura de las preguntas de la lista a mostrar
 * Creamos la funcion pausa para la verificacion de la opcion elegida 
 * en la lista
 * Se creo la funcion leerInput para leer las tareas que se ingresen 
 * 
 * 
 */

const inquirer = require('inquirer');
const Tarea = require('../models/tarea');
require('colors');

const preguntas = [
    {
        type: 'list',
        name: 'opcion',
        message: 'Que desea hacer?'.blue,
        choices: [
            {
                value: 1,
                name: `${'1.'.green} Crear tarea`
            },
            {
                value: 2,
                name: `${'2.'.green} Listar tareas`
            },
            {
                value: 3,
                name: `${'3.'.green} Listar tareas completadas`
            },
            {
                value: 4,
                name: `${'4.'.green} Listar tareas pendientes`
            },
            {
                value: 5,
                name: `${'5.'.green} Completar tarea(s)`
            },
            {
                value: 6,
                name: `${'6.'.green} Borrar tarea`
            },
            {
                value: 0,
                name: `${'0.'.green} Salir\n`
            },
        ]
    }
];

const inquirerMenu = async() => {
    console.clear();
    console.log(`============================\n   Seleccione una opcion\n============================`.red);

    const {opcion} = await inquirer.prompt(preguntas);
    
    return opcion;
}

const pausa = async() => {
    const pause = [
        {
            type: 'input',
            name: 'enter',
            message: `Presione ${'ENTER'.green} para continuar`,
            choises: 'enter'
        }
    ];

    console.log('\n');
    const enter = await inquirer.prompt(pause);

    return enter;
}

const leerInput = async(message) => {
    const question = [
        {
            type: 'input',
            name: 'desc',
            message,
            validate(value) {
                if (value.length === 0) {
                    return 'Por favor ingrese un valor';
                }
                return true;
            }
        }
    ];
 
    const {desc} = await inquirer.prompt(question);
    return desc;
}

// Esta funcion me genera un nuevo prompt para seleccionar la tarea que quiero
// borrar, donde tomamos el id de la tarea a borrar
const listadoTareasBorrar = async(tareas = []) => {
    const choices = tareas.map((tarea, i) => {
        const idx = `${i + 1}.`.green;

        return{
            value: tarea.id,
            name: `${idx} ${tarea.desc}`
        }
    });

    choices.unshift({
        value: 0,
        name: '0.'.green + ' Cancelar'
    })
    const preguntas = [
        {
            type: 'list',
            name: 'opcion',
            message: 'Borrar',
            choices
        }
    ];

    const {opcion} = await inquirer.prompt(preguntas);
    return opcion;
}

const confirmar = async(message) => {
    const question = [
        {
            type: 'confirm',
            name: 'ok',
            message
        }
    ];

    const {ok} = await inquirer.prompt(question);
    return ok;
}

module.exports = {
    inquirerMenu,
    pausa,
    leerInput,
    listadoTareasBorrar,
    confirmar
}