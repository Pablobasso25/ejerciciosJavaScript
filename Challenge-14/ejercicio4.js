
/* Contar cuántas veces aparece una letra en un texto: 
Crea una función que reciba un texto y una letra, y cuente cuántas veces aparece usando un for. */

function contarLetra(texto, letra) {    // estos parametros son cajas vacias que se llenan cuando llamamos a la función
    let contador = 0;                   //Inicializa una variable para contar coincidencias
    for (let i = 0; i < texto.length; i++) {  //Recorre cada carácter del texto.
        if (texto.charAt(i).toLowerCase() === letra.toLowerCase()) {  // se compara el carácter actual con la letra buscada, ignorando mayúsculas/minúsculas.
            contador++;           //Si hay coincidencia, suma 1 al contador.
        }
    }
    return contador;         //se devuelve el total de coincidencias encontradas.
} 
///// TODA ESTA FUNCIÓN DEVUELVE SOLAMENTE UN NÚMERO, QUE SE MUESTRA EN EL document.writeln DE ABAJO /////////


let entradaTexto = prompt("Ingresá un texto");
let entradaLetra = prompt("Ingresá una letra");
if (
  entradaTexto !== null &&          // verifica que el usuario no haya cancelado el prompt
  entradaTexto.trim() !== "" &&      //	Elimina espacios al principio y al final de la frase.
  entradaLetra !== null &&
  entradaLetra.trim() !== "" &&
  entradaLetra.length === 1) {        //verifica que se haya ingresado solo una letra
    document.writeln(`La letra "${entradaLetra}" aparece ${contarLetra(entradaTexto, entradaLetra)} veces en la frase: "${entradaTexto}".`);
} else{
    alert("Entrada inválida")
}
