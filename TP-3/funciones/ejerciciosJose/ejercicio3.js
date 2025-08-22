
// 3. Crea una función que reciba un string y devuelva el número de volcales que contiene


let frase = "";
let entrada;

do {
  entrada = prompt("Escribí una frase o palabra");

  if (entrada === null && entrada.trim() === "") {     // si cancela antes sin escribir nada 
    break;
  }
  if (entrada !== null && entrada.trim() !== "") {    // si la entrada no se cancela o no se inngresa espacios vacíos, es una entrda válida
    frase = entrada;
  }else {
    alert("Entrada inválida. Intentá de nuevo.");
  }
} while (entrada.trim() === "" || entrada === null || !isNaN(entrada) ); // se repite el bucla mientras el usuario no cancele, la entrada esté vacia o escriba un número

/////////////////// opción de función para contar la cantidad de vocales /////////////////////
function contarVocales(frase) {
  let contador = 0;

  for (let i = 0; i < frase.length; i++) {
    let letra = frase.charAt(i);
    if ("aeiouAEIOU".includes(letra)) {
      contador++;
    }
  }

  return contador;
}
let resultado = contarVocales(frase);
alert(`• Frase/palabra ingresada: "${entrada}"\n• Cantidad de vocales que contiene: ${resultado}`);


/////////////////// opción de función para saber que vocales se encontraron /////////////////////

/* function vocalesEncontradas(frase) {
  let vocales = [];

  for (let i = 0; i < frase.length; i++) {
    let letra = frase.charAt(i);
    if ("aeiouAEIOU".includes(letra)) {
      vocales.push(letra);
    }
  }

  return vocales;
}
let resultado = vocalesEncontradas(frase);
alert(`• Frase/palabra ingresada: "${entrada}"\n• Vocales encontrdas: ${resultado}`); */









