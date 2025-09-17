/* Escribe una clase Producto para crear objetos. Estos objetos, deben presentar las propiedades código, nombre y precio, además del método imprime datos, el cual escribe por pantalla los valores de sus propiedades.
Posteriormente, cree tres instancias de este objeto y guárdalas en un array.
Por último, utilice el método imprime datos para mostrar por pantalla los valores de los tres objetos instanciados.
 */

class Producto {
    constructor(codigo, nombre, precio){
        this.codigo = codigo,
        this.nombre = nombre,
        this.precio = precio
    }

    //método imprimir datos
    imprimirDatos() {
        document.writeln(`<strong>${this.nombre}</strong> - Código: ${this.codigo} - Precio: $${this.precio}<br><br>`);
    }
}

const nuevosObjetos = [];

const instancia1 = new Producto ("PRT0987", "Bateria", "2354");
nuevosObjetos.push(instancia1);

const instancia2 = new Producto ("GRT0369", "Televisor", 245678);
nuevosObjetos.push(instancia2);

const instancia3 = new Producto ("FRT2356", "Ventilador", 78906);
nuevosObjetos.push(instancia3);

// Bucle para recorrey el array y mostrar

for (let producto of nuevosObjetos) {  //Recorre el array nuevosObjetos elemento por elemento
  producto.imprimirDatos();            // En cada vuelta del bucle, guarda el elemento actual en la variable producto
}                                      // luego ejecuta el metodo "imprimirDatos()" sobre ese producto

// versión más compacta de esto:
/* for (let i = 0; i < nuevosObjetos.length; i++) {
  nuevosObjetos[i].imprimirDatos();
} */



