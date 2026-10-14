let tareas = [];

let contadorCat = {
    javascript: 0,
    html: 0,
    php: 0
}

function anadirTarea(tarea) {
    // Validamos que el id no esté repetido
    if (tareas.some(t => t.id === tarea.id)) {
        console.warn(`La tarea con id ${tarea.id} ya existe.`);
        return false;
    }

    tareas.push(tarea);

}