

/* Invertir un texto: 
Crea una función que reciba un texto y lo devuelva invertido usando un while y .substring() o .charAt(). */

let textoInvertido = "";      //Inicializa una variable para almacenar el texto invertido
function invertirTexto(texto) {    // estos parametros son cajas vacias que se llenan cuando llamamos a la función
    let i = texto.length - 1;     //Comienza desde el final del texto.
    while (i >= 0) {              //Mientras no se haya llegado al principio del texto.
        textoInvertido += texto.charAt(i); //Agrega el carácter actual al texto invertido.
        i--;                        //Mueve al carácter anterior.
    }
    return textoInvertido;        //Devuelve el texto invertido.
}
let entrada = prompt("Ingresá un texto");
if (
  entrada !== null &&
  entrada.trim() !== "") {
    document.writeln(`El texto invertido de "${entrada}" es: "${invertirTexto(entrada)}".`);
} else{
    alert("Entrada inválida")
}
