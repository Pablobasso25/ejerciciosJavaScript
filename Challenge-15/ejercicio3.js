
const tareas = 
[ { id: 1, descripcion: "Hacer ejercicio", completada: true, prioridad: "alta" }, 
{ id: 2, descripcion: "Estudiar JavaScript", completada: false, prioridad: "alta" }, 
{ id: 3, descripcion: "Comprar víveres", completada: false, prioridad: "media" }, 
{ id: 4, descripcion: "Llamar al médico", completada: true, prioridad: "baja" }, 
{ id: 5, descripcion: "Limpiar la casa", completada: false, prioridad: "media" } ];


//Mostrar las tareas que están pendientes (no completadas)
const pendientes = tareas.filter(tareas => !tareas.completada);   // filter recorre el array buscando las tareas no completadas (!tareas.completadas) y las guarda en la variable "pendientes" 

if (pendientes.length > 0 ){   // significa que si dentro de "pendientes" hay por lo menos una tarea, que ejecute el el forEach y sino hay ninguna tarea, que muestre le mensaje "no hay tareas pendientes"
console.log("Tareas pendientes:");   //solo se mustra un mensaje como si fuera un titulo
pendientes.forEach(tareas => console.log("- " + tareas.descripcion));    // forEach recorre a la variable "pendientes" que es la que contiene las tareas que estan sin realizar  
}else{
    console.log("No tenes tareas pendientes");
};


//Crear un array solo con las descripciones de las tareas
console.log("Lista de tareas")   // solo es un titulo
const descripcionDeTareas = tareas.forEach(tareas => console.log("- " + tareas.descripcion));
/* const descripcionDeTareas = tareas.forEach(tareas => {
    console.log("- " + tareas.descripcion)
}); */


//Filtrar las tareas de alta prioridad que no están completadas

console.log("Tereas de alta prioridad: ");

const altaPrioridad = tareas.filter(tareas => {
    if (tareas.prioridad === "alta" && tareas.completada === false) {
        console.log("- " + tareas.descripcion);
        
    }
})


//Encontrar la tarea que contiene "JavaScript" en su descripción
console.log("La tarea que contiene Javascript es:");
const palabra = tareas.find(tareas=> tareas.descripcion.toLowerCase().includes("javascript"))
console.log(palabra);


// Tareas que contengan "limpiar" y "llamar"
console.log("Tareas que contienen 'limpiar' o 'llamar': ");  //titulo

const palabras =tareas.filter(tareas =>                       //filter para recorrer el array y guardar las tareas qeu contengan esas palabras
    tareas.descripcion.toLowerCase().includes("limpiar") || tareas.descripcion.toLowerCase().includes("llamar"));

palabras.forEach(tareas => console.log("- " + tareas.descripcion));  // forEach recorre el array palabras y muestra las tareas que contienen las palabras por consola 



// ejemplo pidiendo las palabras a un usuario

let palabra1 = prompt("Primera palabra a buscar:");
let palabra2 = prompt("Segunda palabra a buscar:");

const resultado = tareas.filter(tareas => 
    tareas.descripcion.toLowerCase().includes(palabra1.toLowerCase()) ||
    tareas.descripcion.toLowerCase().includes(palabra2.toLowerCase())
);

if (resultado.length > 0) {   //si existe por lo menos una tarea que contenga alguna de las dos palabras, que ejecute el bloque
     console.log("Tareas que contienen '" + palabra1 + "' o '" + palabra2 + "':");
    resultado.forEach(tareas => console.log("- " + tareas.descripcion));   // vuelve a recorrer la variable "resultado" en busca de las palabras ingresada. si encuentra alguna, la muestra
} else{
    console.log("No se encontraron tareas con esas palabras.");
    
}
