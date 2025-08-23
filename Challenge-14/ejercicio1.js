
/* Contar caracteres de un texto:
Crea una función que reciba un texto y muestre cuántos caracteres tiene usando .length. */


    
function cantidadCaracteres(texto){
    return texto.length;
}

let entrada = prompt("Ingresá un texto");

if (
  entrada !== null &&
  entrada.trim() !== "") {
    document.writeln(`La frase: "${entrada}" tiene ${cantidadCaracteres(entrada)} caracteres.`);
} else{
    alert("Entrada inválida")
}




