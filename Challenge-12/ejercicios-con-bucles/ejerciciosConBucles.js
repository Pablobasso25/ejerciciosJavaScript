/*          // EJERCICIO 1 //

for (let i = 1; i <= 10; i++) {
  console.log(i);
} */

  

/*         // EJERCICIO 2 //

  let suma = 0;

for (let i = 1; i <= 50; i++) {
  suma += i;
}
alert(`La suma de los primeros 50 números naturales es: ${suma}`); */



/*         // EJERCICIO 3 CON BUCLE "for" //

let numero = parseInt(prompt("Ingrese un número para ver su tabla de multiplicar:"));

for (let i = 1; i <= 10; i++) {
  alert(`${numero} x ${i} = ${numero * i}`);
}  */




/*         // EJERCICIO 3 CON BUCLE "while" //

let numero = parseInt(prompt("Ingrese un número para ver su tabla de multiplicar:"));
let i = 1;

while (i <= 10) {
  alert(`${numero} x ${i} = ${numero * i}`);
  i++;
}  */

  

/*         // EJERCICIO 3 CON BUCLE "do...while" //

let numero = parseInt(prompt("Ingrese un número para ver su tabla de multiplicar:"));
let i = 1;

do {
  alert(`${numero} x ${i} = ${numero * i}`);
  i++;
} while (i <= 10);
 */



/*          // EJERCICIO 4 //                            //SE LEE DE LA SIEGUIENTE MANERA //

for (let i = 1; i <= 100; i++) {       // •1) Se inicia un bucle for. •2) i comienza en 1. •3) El bucle se repite mientras i sea menor o igual a 100. •4) En cada vuelta, i aumenta en 1 (i++).

  if (i % 2 === 0) {                  // •1) Se evalúa si el número actual (i) es par. •2) % 2 calcula el resto de dividir i por 2. •3) Si el resto es 0, significa que i es par.

    console.log(i);                   // Si la condición se cumple, se muestra el número en consola.
  }
} */



/*          // EJERCICIO 5 //

for (let i = 10; i >= 1; i--) {
  console.log(i);
}  */




/*           // EJERCICIO 6 //                                                         //SE LEE DE LA SIEGUIENTE MANERA //

let secreto = Math.floor(Math.random() * 10) + 1;                   // •1) Se genera un número aleatorio entre 1 y 10 •2) Math.random() da un número entre 0 y 1//  •3) se Multiplica por 10 → rango entre 0 y 9.999. •4) Math.floor() redondea hacia abajo. •5) - se Suma 1 para que el rango sea de 1 a 10.

let intento;                                                        // Se declara la variable intento, que va a guardar el número que ingrese el usuario.

do {                                                                //Se inicia un bucle do...while.
  intento = parseInt(prompt("Adiviná el número (entre 1 y 10):"));  //El usuario ingresa un número.

} while (intento !== secreto);                                      //Si no coincide con el número secreto, el bucle se repite.

if (intento === secreto) {                                          //si el número ingresado es igual al secreto
  alert(`¡Acertaste! El número era: ${secreto}`);                   // se muestra un mensaje de acierto.
} */



/*           // EJERCICIO 7 //

let suma = 0;                                                             // se inicializan las variables para acumular la suma de los números y contar cuando números se van ingresando.
let contador = 0;

while (suma < 100){                                                       // se inicia un bucle que se repite mientras la suma sea menor que 100.                 
  let numero = parseFloat(prompt("Ingresá un número"));                   // se pide un número al usuario

  if (!isNaN(numero)){                                                    // (!isNaN(numero)) --> ¿Es un número válido?, si es lo es, se ejecuta el siguiente bloque.
    suma += numero;                                                       //se suma el número ingresado al acumulador "suma" ---> abreviación de: suma = suma + numero
    contador++;                                                           // se incrementa el contador en 1, sirve para llevar la cuenta de cúantos números válidos se ingresaron
  } else {
    alert("Ingresá un número válido.");
  }
}
  alert(`La suma total es ${suma} y se ingresaron ${contador} números`); */


/*             // EJERCICIO 7 //   (Mismo esjercicio pero sin el contador)

let suma = 0;                                                             

while (suma < 100){                                                                   
  let numero = parseFloat(prompt("Ingresá un número"));                  

  if (!isNaN(numero)){                                                   
    suma += numero;                                                                                                          
  } else {
    alert("Ingresá un número válido.");
  }
}
  alert(`La suma total es ${suma}`);
 */



/*              //EJERCICIO 8 //


let frase = prompt("Escribí una frase:");
let vocales = "";

for (let i = 0; i < frase.length; i++) {
    let letra = frase.charAt(i);
    if ("aeiouAEIOU".includes(letra)){
        vocales += letra;
        alert(`Las vocales que aparecen son: ${vocales}`);
    }
} */

/*              // EJERCICIO 9 //

let edad;

do {
  edad = parseInt(prompt("Ingresá tu edad (entre 18 y 99):"));

  if (isNaN(edad)) {                                               //Si el valor no es un número, se muestra un mensaje de error.
    alert("Ingresá un número válido.");

  } else if (edad < 18 || edad > 99) {                             //si la edad no esta en el rango, se muestra un mensaje de advertencia.
    alert("Edad fuera del rango permitido.");
  }

} while (isNaN(edad) || edad < 18 || edad > 99);                   // el bucle se repite mientras la edad no sea válida.

alert("Edad válida. Acceso permitido.");    */                        // y si la edad ingresada está dentro del rango, sale del bucle y se muestra otro mensaje.


/*              // EJERCICIO 10 //

let num1 = parseInt(prompt(" Ingresá el primer número:"));
let num2 = parseInt(prompt(" Ingresá el segundo número:"));
let num3 = parseInt(prompt(" Ingresá el tercer número:"));

if (num1 < num2 && num2 < num3) {
  alert("Los números SI están en orden creciente.");
} else {
  alert(" Los números NO están en orden creciente.");
} */

/*               // EJERCICIO 11 //  

let opcion;

do {
  opcion = prompt(
    "📋 Menú interactivo:\n" +                                   // se usa \n+ para hacer saltos de linea y concatenar los valores por linea, y que el menú quede mejor visualmente
    "1. Saludar\n" +
    "2. Generar número aleatorio\n" +
    "3. Salir"
  );

  switch (opcion) {
    case "1":
      alert("👋 ¡Hola!, ¿que tal?");
      break;
    case "2":
      alert("Número aleatorio: " + (Math.floor(Math.random() * 100) + 1));           //ya use esto en un ejercicio anterior
      break;
    case "3":
      alert("👋 ¡Nos vemos!");
      break;
    default:
      alert("Opción inválida. Elegí una opción del 1 al 3.");
  }
} while (opcion !== "3"); */



/*             // EJERCICIO 12 //

let contraseñaCorrecta = "Rolling2025";
let intento;

do {
  intento = prompt("Ingresá la contraseña:");
  if (intento !== contraseñaCorrecta) {
    alert("Contraseña incorrecta. Intentá de nuevo.");
  }
} while (intento !== contraseñaCorrecta);

alert("¡Acceso concedido!"); */


/*             // EJERCICIO 12 (VERSION 2) //               // la explicación de este método esta en el ejercicio (14 versión 2) //

let contraseñaCorrecta = "Rolling2025";
let intento;

do {
  intento = prompt("Ingresá la contraseña:");

  if (contraseñaCorrecta === intento){
    break;
  }else if (intento !== contraseñaCorrecta){
    alert("Contraseña incorrecta. Intentá de nuevo.");
  }
  
} while (true);

alert("¡Acceso concedido!"); */




/*                // EJERCICIO 13 //
 
let calificacion;
let contador = 0;

do {
  calificacion = parseFloat(prompt("📚 Ingresá una calificación (negativa para salir):"));

  if (calificacion >= 0) {
    contador++;
  }
} while (calificacion >= 0);

if (contador > 0) {
  alert(`Se ingresaron: ${contador} calificaciones`)
} else {
  alert("⚠️ No se ingresaron calificaciones válidas.") 
} */


/*                  // EJERCICIO 14 //

let respuesta;

do {
  respuesta = prompt("¿Confirmás la acción? (sí / no)").toLowerCase();

    if (respuesta === "sí" || respuesta === "si") {
      alert("Acción confirmada.");
    }else if (respuesta === "no"){
      //no se hace nada, vuelve a repetir el bucle
    }else{
      alert("Respuesta inválida. Escribí 'sí' o 'no'.");     //si el usuario pone otra palabra que no sea si o no, se muestra este mensaje
    }

} while (respuesta !== "sí" && respuesta !== "si"); */


 

/*                 // EJERCICIO 14 (VERSION 2) //


let respuesta;                                                            // se declara un variable sin asignarle valor todavía, va a guardar lo que el usuario escriba en el prompt.
//bloque 1 //
do {                                                                      // comienza el bucle (siempre se ejecuta al menos una vez).
  respuesta = prompt("¿Confirmás la acción? (sí / no)").toLowerCase();    // se inicializa la variable y guarda el valor que ingresa el usuario.

  if (respuesta === "si" || respuesta === "sí") {                         // si el usuario escribe "sí" o "si", ejecuta el bloque siguiente que seria el break

    break;                                                                 // este comando rompe el bucle automaticamente luego de que se ingrese el "sí" o el "si", directamente pasa al bloque siguiente que seria: "acción confirmada" y termina el programa

  } else if (respuesta === "no") {                                         // si la respuesta es no, vuelve a ejecutar el bucle hasta que se proporcione otro valor.
    // No se hace nada, vuelve a repetir el bucle

  } else {                                                                 // si el usuario ingresa otro valor ej: tal vez, se ejecuta el mensaje de "respuesta inválida".
    alert("Respuesta inválida. Escribí 'sí' o 'no'.");
  }

} while (true);                                                            // se usa "true" para que el bucle siga repitiéndose hasta que es usuario confirme. 
                                                                           // usar true con break te da más control, se puede salir del bucle desde cualquier parte del bloque, no solo al final . 
//bloque 2//
alert("Acción confirmada."); */



/*                // EJERCICIO 15 //

let numero;
let suma = 0;
let cantidad = 0;

do {
  let numero = parseFloat(prompt("Ingresá un número:"));
    suma += numero;
    cantidad++;
} while (confirm("¿Querés ingresar otro número?"));

if (cantidad > 0) {
  let promedio = suma / cantidad;
  alert(`El promedio de los ${cantidad} números ingresados es: ${promedio.toFixed(2)}`);
} else {
  alert("No se ingresaron números válidos.");
}
 */



