

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

