

// crea un objeto con 3 propiedades
const persona = {
    nombre: "José",
    edad: 29,
    profesion: "Ingeniero",
};

// Accede y muestra su valor
console.log(persona);

// Agrega una nueva propiedad
persona.altura = 175
console.log(persona);

// Elimina una de las 3 primeras propiedades
delete persona.edad
console.log(persona);

// Agrega una función e involucrala