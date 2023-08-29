/**
 * Funcion para guardar los archivos de las tareas creadas
 * Se volvio el objeto tarea a la hora de crearse en un string
 * con la funcion de json.stringify y se creo el archivo json con 
 * ese string
 * Con la funcion leerDB se lee el archivo json que contiene las tareas
 * y con parse se vuelve otra vez un arreglo para poder usarlo en el programa
 * 
 * 
 */

const fs = require('fs');

const archivo = './db/data.json';

const guardarDB = (data) => {
    fs.writeFileSync(archivo, JSON.stringify(data));
}

const leerDB = () => {
    if (!fs.existsSync(archivo)) {
        return null;
    }

    const info = fs.readFileSync(archivo, {encoding: 'utf-8'});
    const data = JSON.parse(info);

    return data;
}

module.exports = {
    guardarDB,
    leerDB
}
