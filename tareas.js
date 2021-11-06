//let funcionesDeTareas = require('./app.js');

const fs = require('fs');


//objeto literal
let archivoTareas = {
    archivo: 'tareas.json',
    leerJSON: function () {
        return JSON.parse(fs.readFileSync(this.archivo, 'utf-8'));
    },
    escribirJSON: function (tareas) {
        fs.writeFileSync(this.archivo, JSON.stringify(tareas, null, ' '))
        //uso Jnull, ' ' para hacer un salto de linea y quede uno abajo del otro (pero no es necesario)
    },
    guardarTarea: function (tarea) {
        let tareas = this.leerJSON(); //Veo todo lo que tengo en la base de datos
        tareas.push(tarea); //Le agrego la nueva tarea
        this.escribirJSON(tareas);    //Lo devuelvo a la base de datos (lo escribo en formato JSON dentro del archivo)
    },
    filtrarPorEstado: function leerPorEstado(estadoIngresado) {   
        let tareas = this.leerJSON();
        let filtrarTareas = tareas.filter(function(estado) {
            return estadoIngresado == estado.estado;
        });
        return filtrarTareas;
    }
}
module.exports = archivoTareas;



