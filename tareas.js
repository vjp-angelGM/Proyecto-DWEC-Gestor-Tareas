let id = prompt("Introduce el id de la tarea: ");
let nombre = prompt("Introduce el nombre de la tarea: ");
let categoria = prompt("Introduce la categoría: ");
let fecha = prompt("Introduce la fecha: ");
let prioridad = prompt("Introduce la prioridad de la tarea: ");
let estado = prompt("Introduce el estado en el que se encuentra la tarea: ");
let responsable = prompt("Introduce quien es el responsable de la tarea: ");


// Contadores de las categorías y declaro otro contador de tareas
// para que vaya registrando las tareas que tengo creadas
let javascript = 0;
let html = 0;
let php = 0;
let tareas = 0;
let tareaCreada = false;

let Nuevatarea = {
    id: id,
    nombre: nombre,
    categoria: categoria,
    fecha: fecha,
    prioridad: prioridad,
    estado: estado,
    responsable: responsable
};

console.log(Nuevatarea);


// Switch-case y muestra de las tareas por categoría
switch(categoria){
    case "javascript":
        javascript++;
        tareas++;
        tareaCreada = true;
        break;

    case "html":
        html++;
        tareas++;
        tareaCreada = true;
        break;

    case "php":
        php++;
        tareas++;
        tareaCreada = true;
        break;

    default:
        console.warn("Categoria no encontrada");
}


// Mensaje que devuelve al usuario si la tarea se ha creado correctamente
if (tareaCreada){
    alert("Tarea creada correctamente");
}


// Contador de tareas que tenemos creadas
console.log(`Hay ${tareas} creadas: ${html} html, ${javascript} javascript, ${php} php`);

