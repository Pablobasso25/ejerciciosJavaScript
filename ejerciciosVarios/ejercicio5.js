
/* Crear un script que permita al usuario ingresar números mediante prompt hasta que escriba "fin".
Al finalizar, mostrar:
- El número mayor
- El número menor
- El promedio
- Los números ordenados de menor a mayor
 */



// bloque 1 //
let numeros = [];
let entrada;

/* 
• Array para guardar los números
• Variable para capturar cada entrada
*/

// bloque 2 //
do {
  entrada = prompt("Ingresá un número (o escribí 'fin' para terminar):");

  if (
    entrada !== null &&
    entrada.toLowerCase() !== "fin" &&
    entrada.trim() !== "" &&
    !isNaN(entrada)
  ) {
    numeros.push(parseFloat(entrada));
  }

} while (entrada !== null && entrada.toLowerCase() !== "fin");

console.log("Números ingresados:", numeros);

/* 
Este bloque:
• Repite mientras el usuario no escriba "fin" ni cancele
• Valida que la entrada sea un número
• Convierte a número decimal y lo guarda
*/

// bloque 3 //
let mayor = numeros[0];
let menor = numeros[0];
let suma = 0;

for (let i = 0; i < numeros.length; i++) {
  if (numeros[i] > mayor) mayor = numeros[i];
  if (numeros[i] < menor) menor = numeros[i];
  suma += numeros[i];
}

let promedio = suma / numeros.length;

/* 
 Este bloque:
• Recorre el array
• Calcula el mayor, menor y suma total
• Luego calcula el promedio
*/

// bloque 4 //
document.writeln("Resultados:<br>");
document.writeln("• Mayor: " + mayor + "<br>");
document.writeln("• Menor: " + menor + "<br>");
document.writeln("• Promedio: " + promedio.toFixed(2) + "<br>");
document.writeln("• Números ordenados: " + numeros.sort((a, b) => a - b).join(", "));


               //////// COMO SE LEE ///////

// bloque 1 //

/* Primero declaro un array vacío llamado numeros donde voy a guardar todos los valores numéricos que el usuario ingrese. También creo una variable entrada para capturar lo que el usuario escriba en cada prompt."
 */

// bloque 2 //

/* Este bloque se ejecuta al menos una vez y sigue repitiéndose mientras el usuario no escriba  ni cancele el prompt. Cada vez que el usuario ingresa algo, verifico que:
• 	No sea  (o sea, que no haya cancelado),
• 	No sea la palabra ,
• 	No esté vacío,
• 	Y que sea un número válido.
Si pasa todas esas validaciones, convierto el valor a número decimal con  y lo guardo en el array . */

// bloque 3 //

/* Una vez que tengo todos los números, inicializo  y  con el primer valor del array. Recorro el array con un  para encontrar el número más grande, el más chico y sumar todos los valores. Al final, calculo el promedio dividiendo la suma total por la cantidad de elementos." */

// bloque 4 //

/* Finalmente, muestro los resultados en pantalla usando document.writeln(). Imprimo el número mayor, el menor, el promedio con dos decimales, y los números ordenados de menor a mayor usando .sort((a, b) => a - b).
 */