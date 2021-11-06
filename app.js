const fs = require('fs');
/*let notas = fs.readFileSync('tareas.json', 'utf-8');
let notasArray = JSON.parse(notas);*/

let archivoTareas = require('./tareas');

let resultado = process.argv[2];
switch (resultado) {
    case 'listar':
        let tareas = archivoTareas.leerJSON();
        tareas.forEach((tarea,index) =>{
            console.log(index + 1 + '. ' + tarea.titulo + ' - ' + tarea.estado);
        });
        break;
    case 'crear':
        let titulo = process.argv[3];
        let tarea = {
            titulo: titulo,
            estado: 'Pendiente'
        };
        archivoTareas.guardarTarea(tarea);
        console.log('La tarea guardada fue ');
        console.log(tarea.titulo + ' ' + '>>> ' + tarea.estado);
        break;
    case 'filtrar':
        let estado = process.argv[3];
        let estadoFiltrado = archivoTareas.filtrarPorEstado(estado);
        estadoFiltrado.forEach((estado,index) => {
            console.log(index+1);
            console.log(estado);
        });
        break;
    case undefined: 
        console.log('Atención - Tienes que pasar una acción.');
        break;
    default:
        console.log('No entiendo que quieres hacer.');
}
module.exports = resultado


