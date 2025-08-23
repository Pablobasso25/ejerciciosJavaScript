

/* Agregar un elemento al final del array:
Crea una función que reciba un array y un elemento, y lo agregue al final usando .push(). */

/* let agregar;
let array = [];

function agregarAlFinal (elementoNuevo){
    array.push(elementoNuevo);
    return elementoNuevo
}

do{
    agregar = prompt("¿Qué querés agregar a la lista? (Cancelar para salir)")
    
if (agregar !== null && agregar.trim() !== "") {
    let agregado = agregarAlFinal(agregar)           //una vez que la entrada es válida, se crea una variable nueva para guardar los nuevos ingresos 
    alert("Agregaste: " + agregado + " a la lista");
} else if (agregar !== null){
    alert("Entrada inválida")
}
} while (confirm("¿Querés agregar algo más?"))      

document.writeln("Lista completa:" + array.join(", ")) */


////////// sin bucle y con un array que ya contiene elementos ///////////

let agregar = prompt("¿Que queres a agregar a la lista? (Cancelar para salir)")
let array = ["Pera", "Manzanas", "Arroz", "Huevos"]


function agregarAlFinal (elemento){
    array.push(elemento);
    return elemento;
}

if (
  agregar !== null &&
  agregar.trim() !== "") {
    alert(`Agregaste ${agregarAlFinal (agregar)} a la lista`);
} else{
    alert("Entrada inválida")
}
document.writeln("Lista completa:" + array.join(", ")) 