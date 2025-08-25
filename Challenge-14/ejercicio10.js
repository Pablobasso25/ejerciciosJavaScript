
/* Mostrar la primera letra de un texto: 
Crea una función que reciba un texto y devuelva su primera letra con .charAt(). */

function primeraLetra(texto) {
  if (                                ///verifica que no esté vacio, que tenga al menos 3 letras, no contenga símbolos ni números
  texto &&
  texto.trim() !== "" &&
  texto.length >= 3 &&
  /^[a-zA-Z]+$/.test(texto)
)

 {
    return texto.charAt(0);
  } else {
    return "Entrada inválida";
  }
}

let palabra = prompt("Ingresá una palabra");
let letra = primeraLetra(palabra);
alert("La primera letra es: " + letra);