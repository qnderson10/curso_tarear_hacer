/**
 * clase coleccion de objetos tarea
 * _listado:
 *  {'uuid-1212-1212-2': { id: 12, desc: asasd, completadoEn: 213213(fecha)}}
 * Se creo la funcion crearTarea para meterla en el objeto de tareas
 * 
 * 
 */

const Tarea = require("./tarea");

class Tareas {
    _listado = {};

    constructor(){
        this._listado = {};
    }

    crearTarea(desc = ''){
        const tarea = new Tarea(desc);
        this._listado[tarea.id] = tarea;
    }


}

module.exports = Tareas;