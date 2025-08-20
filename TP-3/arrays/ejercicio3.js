

/* Escribir un script que simule el lanzamiento de dos dados. Hacer uso de la función Math.random para obtener números aleatorios entre 1 y 6 para cada uno de los lanzamientos de los dados. Sumar el resultado de lanzar dos dados y anotar en un array el número de apariciones de dicha suma, repitiendo 50 veces esta operación. */


 // Creamos un array con 13 posiciones (de 0 a 12), todas en 0
let apariciones = new Array(13).fill(0);

// Repetimos el lanzamiento de dados 50 veces
for (let i = 0; i < 50; i++) {
  let dado1 = Math.floor(Math.random() * 6) + 1; // número entre 1 y 6
  let dado2 = Math.floor(Math.random() * 6) + 1; // número entre 1 y 6
  let suma = dado1 + dado2;                      // suma entre 2 y 12

  apariciones[suma]++; // aumentamos el contador en la posición correspondiente
}

// Mostramos los resultados con document.writeln()
document.writeln("<h2>Resultado de 50 lanzamientos de dados</h2>");
document.writeln("<table border='1' cellpadding='10'>");
document.writeln("<tr><th>Suma</th><th>Apariciones</th></tr>");

// Recorremos desde 2 a 12 (las sumas posibles)
for (let suma = 2; suma <= 12; suma++) {
  document.writeln("<tr>");
  document.writeln("<td>" + suma + "</td>");
  document.writeln("<td>" + apariciones[suma] + "</td>");
  document.writeln("</tr>");
}

document.writeln("</table>");

