

////////////////////////////////////////////// OBJETO /////////////////////////////////////////////////////////////

////////// Crear un abjeto //////////

const persona = {
    nombre: "David",                   // Al contrario del array, donde cada elemedo tenia un incice que lo identificaba, en los objetos se denominan llaves que guardan un valos único.
    edad: 25,                          // Llave
    comidaFavorita: "hamburguesa",     // Llave
};


// Acceder a una propiedad del objeto//
// Notacióm punto
let edad = persona.edad;    //si quiero guardar el valor en una variable
console.log(edad);
// Notación corchetes
console.log(persona["nombre"]);


// Editar una propiedad del objeto//
persona.edad = 32;
console.log(persona);


// Agregar un nueva propiedad al objeto //
// Notación punto
persona.deporteFavorito = "Tenis";
console.log(persona);
// Notación corchetes
persona["altura"] = 175;
console.log(persona);


// Eliminar una propiedad del obejo //
delete persona.comidaFavorita;
console.log(persona);



////////// Agregar métodos (funciones) al objeto ////////////
const persona1 = {
    name: "Pablo",
    age: 32,
    alias: "polbasso",
    walk: function () {
        console.log("La persona camina");
    }
}
//llamo a la función
persona1.walk()


////////// Anidación de objetos ////////
const persona3 = {
    name: "Pablo",
    age: 32,
    alias: "polbasso",
    walk: function () {
        console.log("La persona camina");
    },
    job: {
        name: "Programador",
        exp: 2,
        work: function(){
            console.log(`La persona de ${this.exp} años de experiencia, trabaja`); // la palabra reservada "this" hace referencia al objeto en este caso a "job", no a persona3
        }
    }
}
// Acceder a las propiedades
console.log(persona3);
console.log(persona3.name);
console.log(persona3.job);
console.log(persona3.job.name);
persona3.job.work();


//////// Igualdad de objetos (ejemplo: comparo la igualdad de persona1 con persona4) //////
const persona4 = {
    name: "Pablo",
    age: 32,
    alias: "polbasso",
    walk: function () {
        console.log("La persona camina");
    }
}
console.log(persona1);
console.log(persona4);

console.log(persona1 == persona4);
console.log(persona1 === persona4);
console.log(persona1.name == persona4.name);



////////// Recorrer / iterar un objeto ///////////

let persona2 = {
    nombre:": Pablo",
    edad:": " + 32,
    comida:": Pizza",
    deporte:": Futbol",
};

for (let key in persona2) {
    console.log(key, persona2[key] + "<br>");
    /* console.log(key + ": " + persona2[key]); */
    
}
