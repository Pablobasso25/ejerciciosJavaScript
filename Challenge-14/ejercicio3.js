
/* Eliminar el primer elemento de un array: 
Crea una función que reciba un array y elimine su primer elemento usando .shift(). */



//función para agregar utilizada en el ejercicio 2
function agregarAlFinal (elementoNuevo){
    elementos.push(elementoNuevo);
    return elementoNuevo;
}


// funcion pra eliminar el primer elemento
function eliminarElemento (){
   return elementos.shift();
}


let elementos = [];
let opcion;

do{
    opcion = prompt(
        "Menú de elementos:\n" +
        "• 1 Agregar un elemento\n" +
        "• 2 Ver lista de elementos\n" +
        "• 3 Eliminar el primer elemento\n" +
        "• 4 Salir"
    );

    switch (opcion) {
        case "1":
            let nuevoElemento = prompt("Ingresá un elemento");
            if (nuevoElemento !== null && nuevoElemento.trim() !== "") {
                let nuevo = agregarAlFinal (nuevoElemento)
                alert("Elemento agregado con exito");
            } else{
                alert("Entrada inválida");
            }
            break;

        case "2":
            if (elementos.length > 0) {
                alert("Lista de elementos:\n" + elementos.join("\n"));
            } else{
                alert("La lista está vacia");
            }
            break;

        case "3":
            if (elementos.length > 0) {
                let eliminado = eliminarElemento ()
                alert("Elemento eliminado:" + eliminado);
            } else {
                alert("No hay elementos para eliminar");
            }
            break;

        case "4":
            alert("¡¡Nos vemos pronto!!");
            break;
    
        default:
            alert("Opción inválida. Elegí entre 1 y 4");
            break;
    }
} while (opcion !== "4");
