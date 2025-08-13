

/*             // EJERCICIO 1 //

let meses = [
  "• Enero", "• Febrero", "• Marzo", "• Abril", "• Mayo", "• Junio",
  "• Julio", "• Agosto", "• Septiembre", "• Octubre", "• Noviembre", "• Diciembre"];

for(let i = 0; i < 12; i++){
  let mostrar = meses[i];
  document.writeln(mostrar + "<br>");
} */

           // EJERCICIO 2 //

let entrada;
let ciudades = [];

do{
  entrada = prompt("Ingresá una ciudad:");                // inicializo la variable entrada//

  if (entrada !== null){                                  //significa que solo se termina el bucle si el usuario presiona cancelar//
    ciudades.push(entrada);                               // el método push agrega todas las ciudades que ingresa el usuario al array "ciudades"

  }              
}while(entrada !== null);

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



