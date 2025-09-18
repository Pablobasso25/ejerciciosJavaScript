
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
        /*   */
        this.dni = Math.floor(Math.random() * 90000000) + 10000000;
        this.sexo = sexo,
        this.peso = peso,
        this.altura = altura,
        this.anioDeNacimiento = anioDeNacimiento
    }

    //métodos
    mostrarDatos(){
      document.writeln
      (`<strong>Nombre: </strong>${this.nombre}<br>
        <strong>Edad: </strong>${this.edad}<br>
        <strong>Dni: </strong>${this.dni}<br>
        <strong>Sexo: </strong>${this.sexo}<br>
        <strong>Peso: </strong>${this.peso}<br>
        <strong>Altura: </strong>${this.altura}<br>
        <strong>Año de nacimiento: </strong>${this.anioDeNacimiento}<br>`)
    }
    mostrarGeneracion (){
        const generacion = generaciones.find(g => this.anioDeNacimiento >= g.inicio && this.anioDeNacimiento <= g.fin); //find () Recorre el array generaciones y devuelve el primer objeto que cumpla la condición
        //const generacion, si encuentra una coincidencia, guarda el objeto completo de esa generación.


        if (generacion){
            document.writeln(`<strong>Generación: </strong> ${generacion.nombre}<br><strong>Rasgo característico:</strong> ${generacion.rasgo}<br> `);
        }else{
            alert ("No se encontró una generación correspondiente.")
        }
    }

    esMayorDeEdad(){
      if (this.edad >= 18){
        document.writeln("<em>¡Sos mayor de edad!<em><br><br>");
      }else{
        document.writeln("<em>¡Sos menor de edad!<em><br><br>")
      }
    }

    /* generaDNI() {   // si activo este método, tengo que descomentar "this.dni = dni" y comentar "this.dni = Math.floor(Math.random() * 90000000) + 10000000;" en el constructor
    this.dni = Math.floor(Math.random() * 90000000) + 10000000;
    } */


    
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
const persona1 = new Persona ("Pablo", 32, null, "M", 85, 175, 1950);
const persona2 = new Persona ("José", 15, null, "M", 65, 160, 2009)
/* persona1.generaDNI() */
persona1.mostrarDatos()
persona1.mostrarGeneracion()
persona1.esMayorDeEdad()

/* persona2.generaDNI() */
persona2.mostrarDatos()
persona2.mostrarGeneracion()
persona2.esMayorDeEdad()
