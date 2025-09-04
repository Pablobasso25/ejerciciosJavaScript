



// Modifica la clase con get y set para que use propiedades privadas
// Utiliza los get y set y muestra sus valores
// Sobreescribe un metodo de una clase que utilice herencia



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
class Persona {
    #profesion

    constructor (_nombre, edad,profesion){
        this._nombre = _nombre;
        this.edad = edad;
        this.#profesion = profesion
    }
}