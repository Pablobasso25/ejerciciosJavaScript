
/* Extraer una parte de un array: 
Crea una función que reciba un array y devuelva una parte usando .slice(). */

let recorte;

function recortar (array,inicio,fin){
    if (
    typeof inicio === "number" &&   // typeof sirve para saber que tipo de dato esta ingresando en este caso tiene que ser un numero 
    typeof fin === "number" &&
    inicio >= 0 &&
    fin <= array.length &&
    inicio < fin ){  

    recorte = array.slice(inicio, fin);    // si pasa la validación, se guarda en la variable recorte
    return recorte;

} else {
        alert("Posiciónes inválidas");
        return [];           // devuelve un array vacío si la entrada es inválida

    }
}
/// función para mostrar la lista del array enumerada utilizada en el ejercicio 6 ///
function mostrarListaEnumerada(array) {
  let resultado = "";
  for (let i = 0; i < array.length; i++) {
      resultado += i + " - " + array[i] + "\n";
    }
    return resultado;
}

let array = ["banana", "pera", "uva", "zanahoria", "televisor"];

let posiciones = prompt("Lista actual de elementos:\n" + mostrarListaEnumerada(array) +
"• Ingresá las posiciones de recorte separadas por coma desde 0 a " + array.length);

// el objetivo ahora es convertir la entrada que es un string en un array

if (posiciones !== null && posiciones.includes(",")) {  // verifica que el usuario no cancele y que la entrda tenga una coma
  let entradaConComa = posiciones.split(",");   // se crea un array nuevo con los datos ingresados en el prompt (ej: ["1","2"])--- el .split(",") agrega una coma y se lo coloca dentro del if porque solo tiene setido si la entrada contiene una coma
  let inicio = parseInt(entradaConComa[0].trim()); // se extraen los dos valores del array [0] accede al primer elemento ingresado y [1] accede al segundo elemento ingresado (ej: 1,4)
  let fin = parseInt(entradaConComa[1].trim());  // .trim() elimina los espacios vacios en el caso que el usuario escriba (1 , 2) y parceInt convierte el string en un número

  if (                 //este if verifica que los valores que contiene la variable "entradaConComa" sean números válidos y que esten dentro del rango del array
    !isNaN(inicio) &&
    !isNaN(fin) &&
    inicio >= 0 &&
    fin <= array.length &&
    inicio < fin
  ) {
    let resultado = recortar(array, inicio, fin);  // llamamis a la función que se creo para recortar
    alert("Recorte:\n" + mostrarListaEnumerada(resultado)); // llamamos a la función que se creo para enumerar un array en forma de lista 
  } else {
    alert("Posiciones inválidas. Asegurate de que estén entre 0 y " + (array.length - 1) + " y que inicio sea menor que fin.");
  }
} else {
  alert("Entrada inválida. Usá el formato: número,número (ej: 1,4)");
}
