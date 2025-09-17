
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
        const generacion = generaciones.find(g => this.anioDeNacimiento >= g.inicio && this.anioDeNacimiento <= g.fin); //find () Recorre el array generaciones y devuelve el primer objeto que cumpla la condición
        //const generacion, si encuentra una coincidencia, guarda el objeto completo de esa generación.


        if (generacion){
            alert(`${this.nombre} pertenece a ${generacion.nombre}\nRasgo característico: ${generacion.rasgo}`);
        }else{
            alert ("No se encontró una generación correspondiente.")
        }
    }

    
}

//array de objetos que contiene todas las generaciones 
const generaciones = [
  {
    nombre: "Generación Z",
    inicio: 1994,
    fin: 2010,
    rasgo: "Irreverencia"
  },
  {
    nombre: "Generación Y / Millennials",
    inicio: 1981,
    fin: 1993,
    rasgo: "Frustración"
  },
  {
    nombre: "Generación X",
    inicio: 1969,
    fin: 1980,
    rasgo: "Obsesión por el éxito"
  },
  {
    nombre: "Baby Boom",
    inicio: 1949,
    fin: 1968,
    rasgo: "Ambición"
  },
  {
    nombre: "Generación Silenciosa",
    inicio: 0,
    fin: 1948,
    rasgo: "Austeridad"
  }
];
const persona1 = new Persona ("pablo", 32, "40902304", "M", 85, 175, 1950);
persona1.mostrarGeneracion()
