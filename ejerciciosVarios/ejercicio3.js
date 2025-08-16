
/* Crear un script que solicite al usuario ingresar edades mediante prompt.
El ingreso debe continuar hasta que el usuario presione “Cancelar”.
Al finalizar, mostrar cuántas edades son mayores o iguales a 18. */


let edades = [];
let entrada;
/* Declaro un array vacío edades para guardar las edades ingresadas, y una variable entrada para guardar lo que el usuario escriba en el prompt. */

do {
  entrada = prompt("Ingresá una edad (o presioná Cancelar para terminar):");
/* Uso un bucle do...while para pedir edades al usuario. El bucle se ejecuta al menos una vez y sigue hasta que el usuario presione Cancelar (entrada === null). */

  if (entrada !== null && entrada !== "" && !isNaN(entrada)) {
    let edad = parseInt(entrada);
    edades.push(edad);
  }
/* Verifico que el usuario no haya cancelado, que no haya dejado el campo vacío y que lo ingresado sea un número. Si todo está bien, convierto la entrada a entero y la guardo en el array edades. */

} while (entrada !== null);
/* El bucle se repite mientras el usuario no presione Cancelar. En cuanto lo hace, se termina la carga de datos. */


let mayores = 0;

for (let i = 0; i < edades.length; i++) {
    if (edades[i] >= 18){
        mayores++;
    }
}
/* Inicializo un contador mayores en 0. Luego recorro el array edades y por cada valor mayor o igual a 18, incremento el contador. Así calculo cuántas personas son mayores de edad. */

document.writeln("Cantidad de personas mayores de edad: " + mayores);
/* Finalmente, muestro en pantalla cuántas personas ingresadas tienen 18 años o más. */
