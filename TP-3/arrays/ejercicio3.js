

/* Escribir un script que simule el lanzamiento de dos dados. Hacer uso de la función Math.random para obtener números aleatorios entre 1 y 6 para cada uno de los lanzamientos de los dados. Sumar el resultado de lanzar dos dados y anotar en un array el número de apariciones de dicha suma, repitiendo 50 veces esta operación. */


 
let apariciones = new Array(13).fill(0);                // Creamos un array con 13 posiciones (de 0 a 12),
//Se llena con ceros usando .fill(0) para que cada posición empiece en 0. Solo se utilizan los índices del 2 al 12, porque esas son las sumas posibles de dos dados.


for (let i = 0; i < 50; i++) {                  //Se inicia un bucle que se repite 50 veces. Cada vuelta representa un lanzamiento doble de dados.


  let dado1 = Math.floor(Math.random() * 6) + 1; // Math.random() genera un número entre 0 y 0.999..., si se lo multiplica por 6, da entre 0 y 5.999..., Math.floor() redondea hacia abajo, da entre 0 y 5, - Sumamos 1 y obtenemos un número entre 1 y 6
  let dado2 = Math.floor(Math.random() * 6) + 1; // lo mismo para el segundo dado
  let suma = dado1 + dado2;                      // Calcula la suma de los dos dados.El resultado estará entre 2 (1+1) y 12 (6+6) proque son la mínima y maxima combinación

  apariciones[suma]++;                           // Accede a la posición del array correspondiente a la suma y le suma 1.Así se van contando cuántas veces aparece cada suma.”
}

document.writeln("<h2>Resultado de 50 lanzamientos de dados</h2>");

document.writeln("<tr><th>Suma</th><br>"); 
document.writeln("<th>Apariciones</th></tr><br>"); 


for (let suma = 2; suma <= 12; suma++) {                          //for para recorrer las sumas posibles del 2 al 12.

  document.writeln("<tr><br>");                               // Por cada suma, crea una fila con los valores de la suma y de la cantidad de apariciones
  document.writeln("<td><br>" + suma + "</td>");
  document.writeln("<td>" + "------------------------------" +  apariciones[suma] + "</td>");

}

