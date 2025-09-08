
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

    // El setter permite modificar el DNI, pero con validación: debe tener 8 dígitos numéricos.
    set dni (nuevoDni){
        if(nuevoDni.length === 8 && !isNaN(nuevoDni)){
            this.#dni = nuevoDni;
        } else {
            alert("DNI inválido. Debe tener 8 dígitos númericos.");
        }
    }

    //método
    presentarse(){
        return `Hola, soy ${this.nombre}, tengo ${this.edad} años`;
    }
}

//clase empleado que hereda de persona
class Empleado extends persona{
    constructor (nombre, edad, dni, cargo){    //se agrega una nueva propiedad "cargo"
        super (nombre, edad, dni);
        this.cargo = cargo;
    }

    presentarse(){
        return `Hola, soy ${this.nombre}, tengo ${this.edad} años y trabajo como ${this.cargo}`;  // se sobreecribe el metodo presentarse para incluir el cargo del empleado
    }
}

// interacción con el usuario

let tipo = prompt ("¿Querés crear una persona o un empleado? (persona/empleado)").toLowerCase(); // pido al usuario que ingrese un tipo (persona o empleado) 

if (tipo === "persona" || tipo === "empleado"){    // si el tipo ingresado es válido, continua. Si no, se muestra un mensaje de error
    //se piden datos : nombre, edad,dni
    let nombre = prompt("Ingresá el nombre");
    let edad = parseInt(prompt("Ingresá la edad"));
    let dni = parseInt(prompt("Ingresá el DNI (8 dígitos): "));

    if (!nombre || isNaN(edad) || dni.length !== 8 || isNaN(dni)){  // si los datos ingresados no son válidos, se muestra un mensaje de error
        
        alert ("Datos inválidos, verificá que todos los campos estén completos y correctos.");

    } else {                    // si los datos son válidos se crea la variable instancia 
        let instancia;

        if (tipo === "persona"){
            instancia = new Persona(nombre, edad, dni);
        } else {
            let cargo = prompt("Ingrese el cargo del empleado: ");
            instancia = new Empleado(nombre, edad, dni, cargo);
        }

        alert(instancia.presentarse());

        // modificar DNI
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
