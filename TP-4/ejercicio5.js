
/* 5- Crea una clase llamada Persona que siga las siguientes condiciones:
Sus propiedades son: nombre, edad, DNI, sexo (H hombre, M mujer), peso y altura, año de nacimiento. Si quieres añadir alguna propiedad extra puedes hacerlo.
Los métodos que se debe poder utilizar  son:
mostrarGeneracion: este método debe mostrar un mensaje indicando a qué generación pertenece la persona creada y cual es el rasgo característico de esta generación.
Para realizar este método tener en cuenta la siguiente tabla de generaciones:

(ver captura de pantalla )

esMayorDeEdad: indica si es mayor de edad, devuelve un mensaje indicando que la persona es mayor de edad.
mostrarDatos: devuelve toda la información del objeto.
generaDNI(): genera un número aleatorio de 8 cifras.*/



class Persona {
    constructor (nombre, edad, dni, sexo, peso, altura, anioDeNacimiento){
        this.nombre = nombre,
        this.edad = edad,
        this.dni = dni,
        this.sexo = sexo,
        this.peso = peso,
        this.altura = altura,
        this.anioDeNacimiento = anioDeNacimiento
    }

    //métodos
    mostrarGeneracion (){
        if (this.anioDeNacimiento >= 1994 && this.anioDeNacimiento <= 2010){
            alert(`${this.nombre} pertenece a la Generación Z\nRasgo característico: Irreverencia`);
        }
    }
}
const persona1 = new Persona ("pablo", 32, "40902304", "M", 85, 175, 1996);
persona1.mostrarGeneracion()
