

/////////////////////////////////////////////////////// ARRAY /////////////////////////////////////////////////////////

///// Propiedad "length" (longitud)////

let miArray = ["David", "Juan", "Kevin"];

let cantidad = miArray.length;      // sirve para saber cuanto eslentos hay dentro del array

console.log(cantidad);


/////// Acceder a los elementos de un array //////

let miArray1 = ["David", "Juan", "Kevin"];

let nombre1 = miArray1[0];     // [] para acceder a algun elemnto en este caso al de la posicion 0 
console.log(nombre1);

let nombre2 = miArray[1];      // accede a la posicion 1
console.log(nombre2);

let nombre3 = miArray[2];      // accede a la posicion 2
console.log(nombre3);


////// Agregar elementos a un array ///// 

// método normal: mustra el contenido del arreglo//
let miArray2 = ["David", "Juan", "Kevin"];
console.log(miArray2); 

// método push: agrega un elemento al final del arreglo//
miArray2.push("Carlos");
console.log(miArray2);

// método unshift: agrega un elemento al principio del arreglo//
miArray2.unshift("Agustin");
console.log(miArray2);
 

//////  Quitar elementos de un array //////

// método pop: quita el último elemento del arreglo//
miArray2.pop();
console.log(miArray2);

// si quiero sacar el último y guardarlo en un variable hago lo siguiente//
let final = miArray2.pop();
console.log(miArray2);
// quita "Kevin" y lo guarda en la variable final
console.log(final);

// método shift: quita el primer elemento del arreglo//
miArray2.shift();
console.log(miArray2);

// si quiero sacar el último y guardarlo en un variable hago lo siguiente//
let inicio = miArray2.shift();
console.log(miArray2);
// quita "David" y lo guarda en la variable inicio
console.log(inicio);




////////// Recorrer / iterar un array /////////


// 1) for clásico //
let nombres4 = ["David", "Juan", "Kevin"];                           // se crea el array a recorrer

for (let i = 0; i < nombres4.length; i++){                       //(let i = 0)  se inicializa la variable en 0 (0 es el primer indice del array que en este caso sería "David")
                                                                // i < nombres.length (condición: mientras i sea menor a la longitud del arreglo que en este caso es 3, que corra el bucle)           
                                                                // i++ (a medida que corre, i va tomando diferentes valores, en este caso comienza con 0, 1, 2 y cuando llega a 3 se detiene)
/* console.log(nombres4[i]); */
console.log(`Nombre ${i}: ${nombres4[i]}`);
}
/* Ideal si necesito el índice o modificar el array en posiciones específicas */


// 2) for off (recorrer valores directamente) //
let nombres5 = ["David", "Juan", "Carlos"];

for (let nombre of nombres5) {
  console.log("Hola " + nombre);
}
/* si solo te interesa el valor, no el índice */



// 3) while (recorrer hasta cumplir una condición) //
let edades = [12, 15, 18, 21];
let i = 0;

while (i < edades.length && edades[i] < 18) {
  console.log("Menor de edad:", edades[i]);
  i++;
}
/* Útil si quiere cortar el recorrido cuando se cumple una condición */



// 4) map (transformar el array)
let precios = [100, 200, 300];
let conIVA = precios.map(p => p * 1.21);
console.log(conIVA);
/* para crear un nuevo array con modificaciones */

