
/* Generar un número aleatorio entre 1 y 10: 
Crea una función que devuelva un número aleatorio entre 1 y 10 usando Math.random() y Math.floor(). */

function numeroAleatorio() {
  return Math.floor(Math.random() * 10) + 1;
}

let aleatorio = numeroAleatorio();
alert("Tu número aleatorio entre 1 y 10 es: " + aleatorio);