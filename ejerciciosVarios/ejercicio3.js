
/* Crear un script que solicite al usuario ingresar edades mediante prompt.
El ingreso debe continuar hasta que el usuario presione “Cancelar”.
Al finalizar, mostrar cuántas edades son mayores o iguales a 18 */

// bloque 1 //
let edades = [];
let entrada;

// bloque 2 //
do {
  entrada = prompt("Ingresá una edad (o presioná Cancelar para terminar):");

  if (entrada !== null && entrada !== "" && !isNaN(entrada)) {
    let edad = parseInt(entrada);
    edades.push(edad);
  }

} while (entrada !== null);

/* 
Este bloque:
• Repite mientras el usuario no cancele.
• Valida que la entrada sea un número.
• Convierte a entero y guarda en el array.
 */


// bloque 3 //
let mayores = 0;

for (let i = 0; i < edades.length; i++) {
    if (edades[i] >= 18){
        mayores++;
    }
    
}
document.writeln("Cantidad de personas mayores de edad: " + mayores);

/* 
Este bloque:
• Recorre el array.
• Suma 1 cada vez que encuentra una edad mayor o igual a 18.
 */