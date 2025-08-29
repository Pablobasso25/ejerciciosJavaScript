
/* Eliminar un elemento de un array según su posición: 
Crea una función que reciba un array y una posición, y elimine el elemento con .splice(). */


// función para eliminar un elemento de la lista///
function eliminarElemento (posicion){
    if (posicion >= 0 && posicion < elementos.length){   // (posicion >= 0) -----no puede ser negativa y (posicion < elementos.length) ---- no puede superar el último índice
        elementos.splice(posicion, 1);    // "del array elementos, elimina el elemento de la posición 1", (posicion)--- es el índice desde donde querés empezar a modificar el array, (1)--- es la cantidad de elementos que querés eliminar desde esa posición
    } else {
        alert("Posición inválida");
    }
}

/// función para mostrar la lista del array enumerada///
function mostrarListaEnumerada(array) {
  let resultado = "";
  for (let i = 0; i < array.length; i++) {
    resultado += i + " - " + array[i] + "\n";
  }
  return resultado;
}

// Pido al usuario cuántos elementos quiere ingresar
let cantidad;
let elementos = [];

do{                    // uso do..while para validar que las entradas proporcionadas por el usuario sean validas
    cantidad = prompt("¿Cuántos elementos vas a ingresar?");
    if (
        cantidad === null ||            // si se canceló la entrada 
        cantidad.trim() === "" ||         // si está vacía o llena de espacios
        isNaN(cantidad) ||              // si no es un número
        parseInt(cantidad) < 1          // si es menor que 1
    ) {
        alert("Cantidad inválida. Tenes que ingresar un número mayor a 0.");
        cantidad = null;   // al ser null fueza a que se repita el bucle
    } else {
        cantidad = parseInt(cantidad);   // entrada válida
    }
    
} while (cantidad === null)  // si la cantidad es null o sea no se ingresa un valor válido, el  bucle se repite hasta que ingrese un valor válido


// Se pide los elementos y lo guardamos en el array

for (let i = 0; i < cantidad; i++) {
    let entrada;

    do{
    entrada = prompt("Ingresá el elemento #" + (i + 1));   // forma dinámica de pedir elementos, se suma 1 porque los indices comienzan en 0  
    if (
      entrada === null ||          // El usuario presionó "Cancelar"
      entrada.trim() === "" ||     // La entrada está vacía o son solo espacios
      !isNaN(entrada)               // La entrada es un número
    ) {
      alert("Entrada inválida.");
      entrada = null;
    } else {                      
      elementos.push(entrada); // si se ingesa un elemento válido se lo agrega al array "elementos"
      alert("Lista actualizada:\n" + mostrarListaEnumerada(elementos));
    }
  } while(entrada === null)
} 

let posicionEliminar;

  do{
  posicionEliminar = prompt("¿Qué posición querés eliminar? (empezando desde 0)");
      
if (                 // el primer if verifica si realmente es un numero 
  posicionEliminar !== null &&
  posicionEliminar.trim() !== "" &&
  !isNaN(posicionEliminar)
) {
  posicionEliminar = parseInt(posicionEliminar);

  if (posicionEliminar >= 0 && posicionEliminar < elementos.length){ //el segundo if verifica al primer if o sea que el valor ingresado sea mayor o igual a cero y menor a la cantidad de elementos del array

    eliminarElemento(posicionEliminar);                             // una vez que el numero pasa ese filtro, recien elimina el elemento del array
    alert("Lista actualizada:\n" + mostrarListaEnumerada(elementos)); // lista actualizada sin el elemento eliminado
    break;  // Sale del bucle porque la entrada fue válida y se eliminó
  } else{
    alert("Posición inválida. Debe estar entre 0 y " + (elementos.length - 1)); // length te da la cantidad total de elementos y length -1 es el ultimo indice del array por lo tanto se utiliza para delimitar un rango
  }

} else {
    alert("Entrada inválida. Ingresá un número válido");
}
}while(true); /* true hace que se repita siempre generando un bucle infinito, pero siempre tiene que haber un "break" dentro del bloque
 que le indique cuando cortar (salida manual)*/







//////// EJEMPLO MUY PRÁCTICO /////////

/*pedir 3 elementos, pero asegurarse de que cada uno sea válido (no vacío, no número, etc.):
 */

/* let elementos = [];

for (let i = 0; i < 3; i++) {
  let entrada;

  do {
    entrada = prompt("Ingresá el elemento #" + (i + 1));

    if (
      entrada === null ||
      entrada.trim() === "" ||
      !isNaN(entrada)
    ) {
      alert("Entrada inválida. Intentá de nuevo.");
      entrada = null; // fuerza que el bucle se repita
    }

  } while (entrada === null);

  elementos.push(entrada);
} */

/* 
• El for garantiza que se pidan exactamente 3 elementos
• El do...while garantiza que cada elemento sea válido
• No se avanza al siguiente i hasta que el usuario ingrese algo correcto
 */



//////// EJEMPLO DE UN BUCLE WHILE (TRUE) ///////////////////////

/* while (true) {
  let entrada = prompt("Ingresá una letra (o escribí 'salir')");

  if (entrada === "salir") {
    break; // salimos del bucle manualmente
  }

  if (entrada.length === 1 && isNaN(entrada)) {
    alert("Letra válida: " + entrada);
    break; // también podrías salir acá si querés
  } else {
    alert("Entrada inválida. Intentá de nuevo.");
  }
} */


  /* Eliminar un elemento de un array según su posición: 
Crea una función que reciba un array y una posición, y elimine el elemento con .splice(). */


