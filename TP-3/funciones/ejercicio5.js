
/* Definir una función que muestre información sobre una cadena de texto que se le pasa como argumento. A partir de la cadena que se le pasa, la función determina si esa cadena está formada sólo por mayúsculas, sólo por minúsculas o por una mezcla de ambas. */


// opción 1) sin return, Esas funciones se llaman procedimientos o funciones con “efecto”, no con “resultado”.
let texto = prompt("Ingresá una frase")
function frase(texto) {
    if (texto === texto.toUpperCase()){
        alert("El texto ingresado está escrito en mayúsculas");
    }else if (texto === texto.toLowerCase()){
        alert("El texto ingresado está escrito en minúsculas");
    }else{
        alert("El texto ingresado combina mayúsculas y minúsculas")
    }
}
frase(texto);    // solo llamo a la función porque no necesito guardan nada en una variable




// opción 2) con return
/* let texto = prompt("Ingresá una frase");

function frase(texto) {
  if (texto === texto.toUpperCase()) {
    return "El texto ingresado está escrito en mayúsculas";
  } else if (texto === texto.toLowerCase()) {
    return "El texto ingresado está escrito en minúsculas";
  } else {
    return "El texto ingresado combina mayúsculas y minúsculas";
  }
}

//opción 1)
let resultado = frase(texto); // guarda el resultado en una variable
document.writeln(resultado); 

//opción 2)
let resultado = frase("HOLA como estAS");  // puedo manupular el valor sin que el usuario escriba en el prompt
document.writeln(resultado);  */