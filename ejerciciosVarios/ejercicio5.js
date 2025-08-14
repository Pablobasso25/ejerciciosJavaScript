
/* Crear un script que permita al usuario ingresar números mediante prompt hasta que escriba "fin".
Al finalizar, mostrar:
- El número mayor
- El número menor
- El promedio
- Los números ordenados de menor a mayor */


let numeros = [];
let entrada;
/* Primero declaro un array vacío llamado numeros donde voy a guardar todos los valores numéricos que el usuario ingrese. También creo una variable entrada para capturar lo que el usuario escriba en cada prompt." */

do {
  entrada = prompt("Ingresá un número (o escribí 'fin' para terminar):");
/* Uso un bucle do...while para pedir números al usuario. El bucle se ejecuta al menos una vez y sigue hasta que el usuario escriba 'fin' o presione Cancelar. */

  if (
    entrada !== null &&
    entrada.toLowerCase() !== "fin" &&
    entrada.trim() !== "" &&
    !isNaN(entrada)
  ) {
    numeros.push(parseFloat(entrada));
  }
/* Verifico que la entrada no sea null , que no sea "fin" , que no esté vacía (trim() elimina espacios), y que sea un número (!isNaN). Si pasa la validación, convierto la entrada a número decimal con parseFloat() y la guardo en el array "numeros" . */

} while (entrada !== null && entrada.toLowerCase() !== "fin");
/* El bucle se repite mientras el usuario no escriba 'fin' ni presione Cancelar. */


let mayor = numeros[0];
let menor = numeros[0];
let suma = 0;

for (let i = 0; i < numeros.length; i++) {
  if (numeros[i] > mayor) mayor = numeros[i];
  if (numeros[i] < menor) menor = numeros[i];
  suma += numeros[i];
}
/* Inicializo mayor, menor y suma con el primer número del array. Luego recorro el array y actualizo el mayor y menor si encuentro valores más extremos. También acumulo la suma total. */

let promedio = suma / numeros.length;
/* Divido la suma total por la cantidad de elementos para obtener el promedio. */

document.writeln("Resultados:<br>");
document.writeln("• Mayor: " + mayor + "<br>");
document.writeln("• Menor: " + menor + "<br>");
document.writeln("• Promedio: " + promedio.toFixed(2) + "<br>");
document.writeln("• Números ordenados: " + numeros.sort((a, b) => a - b).join(", "));
/* Muestro los resultados en pantalla: el mayor, el menor, el promedio con dos decimales (toFixed(2)), y los números ordenados de menor a mayor usando sort() con función de comparación. */



