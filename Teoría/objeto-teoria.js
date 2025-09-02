

////////////////////////////////////////////// OBJETO /////////////////////////////////////////////////////////////

////////// Crear un abjeto //////////

/* let persona = {
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
}; */

/* for (let key in persona1) {
    document.writeln(key, persona1[key] + "<br>");
} */

/* for (let key in persona1){

    console.log(key, persona1[key]);
} */



class animal{
    constructor(especieParam,edadParam,colorParam){  // estos parametros son definidos por mi 
    this.especie = especieParam;    //this es como decir: " voy  crear una propiedad llamada: especie, edad o color "
    this.edad = edadParam;
    this.color = colorParam;
    this.info = `Soy ${this.especie}, tengo ${this.edad} años y soy de color ${this.color}`;
    }
    //creacion de una función(método) tiene que estar creado dentro del objeto o clase
    verInfo() {      // creo una función para mostrar la info
        document.writeln(this.info + "<br>")
    }
}

//instanciar clase
const perro = new animal("perro", 5,"rojo");  // le paso los parametros 
console.log(perro);

// para acceder a una propiedad del objeto puedo mostrar por consola, con document.writeIn o guardarlo en una variable y luego mostrarlo. cualquiera de las opciones dependiendo el caso.
console.log(perro.color);
// o creando una variable 
const color = perro.color;
console.log(color);
//acceder a la propiedad info
document.writeln(perro.info + "<br>");
console.log(perro.info);

// si quiero crear otros animales ejemplo:
const gato = new animal ("gato", 3, "negro");
const pajaro = new animal ("pajaro", 2, "blanco");

document.writeln(gato.info + "<br>");
console.log(gato.info);

document.writeln(pajaro.info + "<br>");
console.log(pajaro.info);


////// creación de metodos  ////// es una funcion dentro de la clase

// para mostrar la info de otra forma, llamo a la función directamente 
perro.verInfo();
gato.verInfo();
pajaro.verInfo();












