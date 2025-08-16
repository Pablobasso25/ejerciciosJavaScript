

/* Array de animales

Crear un array con 5 animales.

• Añadir 2 más (uno al inicio y otro al final).

• Eliminar el que está en la tercera posición.

 • Mostrar la cantidad total de animales. */

 let animales = ["gato", "pato", "perro", "loro", "vaca"];

animales.unshift("tiburón");
console.log(animales);

animales.push("delfin");
console.log(animales);

animales.splice(2,1);
console.log(animales);

let total=animales.length;
console.log(`El total de animales es: ${total}`);

