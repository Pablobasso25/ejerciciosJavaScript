
/* Crear un script que solicite al usuario mediante un prompt el nombre de ciudades y almacenarlas en un arreglo, cuando el usuario selecciona cancelar se debe mostrar el arreglo generado, luego realizar las siguientes acciones:

Mostrar la longitud del arreglo.
Mostrar en el documento web los ítems de las posiciones primera, tercera y última.
Añade en última posición la ciudad de París.
Escribe por pantalla el elemento que ocupa la segunda posición.
Sustituye el elemento que ocupa la segunda posición por la ciudad de 'Barcelona'.
 */

let entrada;
let ciudades = [];

do{
  entrada = prompt("Ingresá varias ciudades:");                // inicializo la variable entrada//

  if (entrada !== null){                                  
    ciudades.push(entrada);                               // el método push agrega todas las ciudades que ingresa el usuario al array "ciudades"

  }              
}while(entrada !== null);                             //significa que solo se termina el bucle si el usuario presiona cancelar por eso es null/



// longitud del arreglo //
document.writeln("• " + "El arreglo de ciudades tiene: " + ciudades.length + " elementos" + "<br><br>");

// ciudad en la primera posición //
let ciudad1er = ciudades[0];
document.writeln("• " + "La ciudad en la 1er posición es: " + ciudad1er + "<br><br>");

// ciudad en la tercera posición //
let ciudad3er = ciudades[2];
document.writeln("• " + "La ciudad en la 3er posición es: " + ciudad3er + "<br><br>");

// ciudad en la última posición //
let cuiudadUlt = ciudades[ciudades.length -1];
document.writeln("• " + "La ciudad en la última posición es: " + cuiudadUlt + "<br><br>");


// ciudad en la segunda posición //
let ciudad2da = ciudades[1];
document.writeln("• " + "La ciudad en la 2da posición es: " + ciudad2da + "<br><br>");

// sustitución de la 2da posición por: Barcelona //
ciudades[1] = "Barcelona";
document.writeln("• " + " La ciudad de " + ciudad2da + " fue reemplazada por la ciudad de: " + ciudades[1] + "<br><br>");


// añadir la ciudad de parís al final del arreglo //
ciudades.push("París");
document.writeln("• " + "La última cuidad agregada es: " + ciudades[ciudades.length -1] + "<br><br>");