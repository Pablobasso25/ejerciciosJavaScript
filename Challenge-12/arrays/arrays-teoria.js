

/////////////////////////////////////////////////////// ARRAY /////////////////////////////////////////////////////////

///// Propiedad "length" (longitud)////

let miArray = ["David", "Juan", "Kevin"];

let cantidad = miArray.length;      // sirve para saber cuanto eslentos hay dentro del array

console.log(cantidad);


/////// Acceder a los elementos de un array /////

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
 

//////  Quitar elements de un array //////

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

let nombres = ["David", "Juan", "Kevin"];                           // se crea el array a recorrer

for (let i = 0; i < nombres.length; i++){                       //(let i = 0)  se inicializa la variable en 0 (0 es el primer indice del array que en este caso sería "David")
                                                                // i < nombres.length (condición: mientras i sea menor a la longitud del arreglo que en este caso es 3, que corra el bucle)           
                                                                // i++ (a medida que corre, i va tomando diferentes valores, en este caso comienza con 0, 1, 2 y cuando llega a 3 se detiene)
console.log(nombres[i]);                                        // nombres[i] (accede a los valores del array : 0, 1, 2 y los imprime)
    
}




////////////////////////////////////////////// OBJETO /////////////////////////////////////////////////////////////

////////// Crear un abjeto /////////

let persona = {
    nombre: "David",                   // Al contrario del array, donde cada elemedo tenia un incice que lo identificaba, en los objetos se denominan llaves que guardan un valos único.
    edad: 25,                          // Llave
    comidaFavorita: "hamburguesa",     // Llave
};


// Acceder a una propiedad del objeto//
let edad = persona.edad;
console.log(edad);

// Editar una propiedad del objeto//
persona.edad = 32;
console.log(persona);

// Agregar un nueva propiedad al objeto //
persona.deporteFavorito = "Tenis";
console.log(persona);

// Eliminar una propiedad del obejo //
delete persona.comidaFavorita;
console.log(persona);


////////// Recorrer / iterar un objeto ///////////

let persona1 = {
    nombre:": Pablo",
    edad:": " + 32,
    comida:": Pizza",
    deporte:": Futbol",
};

/* for (let key in persona1) {
    document.writeln(key, persona1[key] + "<br>");
} */

for (let key in persona1){

    console.log(key, persona1[key]);
}


