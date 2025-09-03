
///////////////////////           Clases            ///////////////////////////////////////
class Animal{
    constructor(especieParam,edadParam,colorParam){  // estos parametros son definidos por mi 
    this.especie = especieParam;    //this es como decir: " voy  crear una propiedad llamada: especie, edad o color "
    this.edad = edadParam;
    this.color = colorParam;
    this.info = `Soy ${this.especie}, tengo ${this.edad} años y soy de color ${this.color}`;
    }

}

//instanciar clase//
const perro = new Animal("perro", 5,"rojo");  // le paso los parametros 
console.log(perro);

// para acceder a una propiedad del objeto puedo mostrar por consola, con document.writeIn o guardarlo en una variable y luego mostrarlo. cualquiera de las opciones dependiendo el caso.
console.log(perro.color);
// o creando una variable 
const color = perro.color;
console.log(color);
//acceder a la propiedad info

console.log(perro.info);

// si quiero crear otros animales ejemplo:
const gato = new Animal ("gato", 3, "negro");
const pajaro = new Animal ("pajaro", 2, "blanco");

/* document.writeln(gato.info + "<br>"); */
console.log(gato.info);

/* document.writeln(pajaro.info + "<br>"); */
console.log(pajaro.info);




//////////////////////         Creación de clase con valores por defecto          /////////////////////////
class PersonaPorDefecto {
    constructor(name = "Sin nombre", age = 0, alias = "sin alias"){   //le asigno valores por defecto que en el caaso que no se lo definan mas adelante, arrojen los valores por defecto 
        this.name = name;
        this.age = age;
        this.alias = alias
    }
}

//creo un objeto (persona) con la plantilla de la clase
const persona1 = new PersonaPorDefecto("pablo", 32);  // ahora puedo colocarle los valores que yo quiera, tener en cuenta el orden, en este ejemplo no defino el alias
console.log(persona1);

// acceso a las propiedades
console.log(persona1.alias); 
console.log(persona1["alias"]);

//asigno un valor al alias
persona1.alias = "polbasso";
console.log(persona1.alias);
console.log(persona1);




////////////////////          Funciones en clases          ////////////////////////////
class PersonaConFuncion {
    constructor (name, age, alias) {
        this.name = name,
        this.age = age,
        this.alias = alias
    }

    walk () {
        console.log(`${this.name} camina`);
        
    }
}
// creo una nueva persona
const persona2 = new PersonaConFuncion ("José", 25, "Josep");
console.log(persona2);
persona2.walk()


////////////////////        Propiedades privadas         ////////////////////////
class PersonaPrivada {
    constructor(name, age, alias, bank){  
        this.name = name;
        this.age = age;
        this.alias = alias,
        this.bank = bank
    }
}
//creo una nueva persona
const persona3 = new PersonaPrivada ()