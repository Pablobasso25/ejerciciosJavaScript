
// Crea un clase que reciba dos propiedades
class Animal {
    constructor (especieParam,edadParam){
    this.especie = especieParam;
    this.edad = edadParam;        
    }
}
const perro = new Animal("perro", 5);
console.log(perro);


// Crea una clase que haga uso de herencia
class NuevoAnimal extends Animal {
    constructor (especieParam,edadParam,colorParam){
        super(especieParam,edadParam);
        this.color = colorParam;
    }
}

const gato = new NuevoAnimal ("gato",3,"blanco");
console.log(gato);



// Crea una clase que haga uso de get y set
class GetSetPersona {
    #profesion
    #dni
    constructor (_nombre, edad, profesion, dni){
        this._nombre = _nombre;
        this.edad = edad;
        this.#profesion = profesion;
        this.#dni = dni
    }

    presentarse () {
        return `Hola, soy ${this._nombre} y tengo ${this.edad} años.`
    }



    get profesion (){
        return this.#profesion
    }

    
    /* get dni(){            // descomentar para ver el nuevo valor !!
        return this.#dni
    } */

    set dni(NuevoDni){
        this.#dni = NuevoDni;
    }

}

// Utiliza los get y set y muestra sus valores
const persona = new GetSetPersona ("Juan", 32, "abogado", "40902304");
console.log(persona);
console.log(persona.presentarse());
console.log(persona.profesion);

persona.dni = "36700222";
console.log(persona.dni);




// Sobreescribe un metodo de una clase que utilice herencia
class NuevaPersona extends GetSetPersona{
    constructor (_nombre, edad, cargo){
        super(_nombre,edad);
        this.cargo = cargo;
    }

    presentarse () {
    return `Hola, soy ${this._nombre} y tengo ${this.edad} años y trabajo de ${this.cargo}`
    }

}
const empleado = new NuevaPersona ("Pablo", 32, "Desarrollador");
console.log(empleado.presentarse());

