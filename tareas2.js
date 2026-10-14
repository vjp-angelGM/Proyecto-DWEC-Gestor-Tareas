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

    // Actualizamos el contador si la categoría es válida
    if (contadorCategoria.has(tarea.categoria)) {
        contadorCategoria[tarea.categoria]++;
    } else {
        console.warn("Categoría no encontrada:", tarea.categoria);
    }

    console.log("Tarea creada correctamente");
    return true;

}

// ----------------------------------------------------
// 2. LISTAR TODAS LAS TAREAS
// ----------------------------------------------------
function listar() {
    if (tareas.length === 0) {
        console.log("No hay tareas creadas.");
        return;
    }

    console.table(tareas);
    console.log(
        `Total: ${tareas.length} | html: ${contadorCategoria.html}, ` +
        `javascript: ${contadorCategoria.javascript}, php: ${contadorCategoria.php}`
    );
}

// ----------------------------------------------------
// 3. BUSCAR POR TEXTO (nombre o responsable)
// ----------------------------------------------------
function buscarPorTexto(texto) {
    let resultado = tareas.filter(t =>
        t.nombre.toLowerCase().includes(texto.toLowerCase()) ||
        t.responsable.toLowerCase().includes(texto.toLowerCase())
    );

    if (resultado.length === 0) {
        console.log(`No se encontraron tareas con "${texto}".`);
    } else {
        console.table(resultado);
    }
    return resultado;
}

