
// crear sistema que pida al usuario crear una pesona o un empleado, validar todos los datos y luego preguntar si quiere cambiar su dni 


//Se crea una persona con nombre, edad y DNI. Guardá el DNI como dato privado.
class persona {
    
    #dni;

    constructor(nombre, edad, dni){
        this.nombre = nombre;
        this.edad = edad;
        this.#dni = dni;
    }
    // El getter permite leer el DNI desde fuera de la clase
    get dni (){
        return this.#dni;
    }

    set dni (nuevoDni){
        if(nuevoDni.length === 8 && !isNaN(nuevoDni)){
            this.#dni = nuevoDni;
        } else {
            alert("DNI inválido. Debe tener 8 dígitos númericos.");
        }
    }

    presentarse(){
        return `Hola, soy ${this.nombre}, tengo ${this.edad} años`;
    }
}

class Empleado extends persona{
    constructor (nombre, edad, dni, cargo){
        super (nombre, edad, dni);
        this.cargo = cargo;
    }

    presentarse(){
        return `Hola, soy ${this.nombre}, tengo ${this.edad} años y trabajo como ${this.cargo}`;
    }
}

// interacción con el usuario

let tipo = prompt ("¿Querés crear una persona o un empleado? (persona/empleado)").toLowerCase(); // pido al usuario que ingrese un tipo 

if (tipo === "persona" || tipo === "empleado"){    // verifico si lo ingresado es válido
    let nombre = prompt("Ingresá el nombre");
    let edad = parseInt(prompt("Ingresá la edad"));
    let dni = parseInt(prompt("Ingresá el DNI (8 dígitos): "));

    if (!nombre || isNaN(edad) || dni.length !== 8 || isNaN(dni)){
        
        alert ("Datos inválidos, verificá que todos los campos estén completos y correctos.");

    } else {
        let instancia;

        if (tipo === "persona"){
            instancia = new Persona(nombre, edad, dni);
        } else {
            let cargo = prompt("Ingrese el cargo del empleado: ");
            instancia = new Empleado(nombre, edad, dni, cargo);
        }

        alert(instancia.presentarse());

        let nuevoDni = prompt("¿Querés modificar el DNI? Ingresá uno nuevo o dejá vacio para mantener el actual: ");
        if (nuevoDni) {
            instancia.dni = nuevoDni;
            alert("DNI actualizado: " + instancia.dni);
        }else {
            alert("DNI actual: " + instancia.dni);
        }
    }
} else {
    alert ("Opción inválida. Tenés que escribir: persona o empleado");
}
