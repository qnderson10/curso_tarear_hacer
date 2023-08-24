/**
 * Clase donde se manejara la logica de las tareas
 * Es una clase de objetos tarea
 * Se instalo la libreria uuid la cual nos genera
 * id unicos y se le puso a la tarea id con esa libreria
 * 
 */

const { v4: uuidv4 } = require('uuid');

class Tarea {

    id = '';
    desc = '';
    completadoEn = null;

    constructor(desc){
        this.id = uuidv4();
        this.desc = desc;
        this.completadoEn = null;
    }

}

module.exports = Tarea;






