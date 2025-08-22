

/* 
// 1. Validar que la entrada no esté vacía //

if (entrada.trim() !== "") {
  // procesar entrada
}
// Evita que el usuario ingrese solo espacios o deje el campo vacío



// 2. Validar que no sea null (cancelación)

if (entrada !== null) {
  // procesar entrada
}
// Evita errores si el usuario presiona "Cancelar" en el prompt


//  3. Validar que sea un número

if (!isNaN(entrada)) {
  let numero = parseFloat(entrada);
}
// Evita que se procesen letras, símbolos o valores no numéricos


// 4. Validar que no sea una palabra clave de corte (como "fin" o "salir")

if (entrada.toLowerCase() !== "salir") {
  // seguir procesando
}
// Permite controlar cuándo terminar el bucle por decisión del usuario


// 5. Validar que el valor no esté duplicado en un array

if (!array.includes(valor)) {
  array.push(valor);
}
// Evita que se agreguen elementos repetidos


// 6. Validar que cumpla una condición numérica (ej: mayor a 0)

if (parseFloat(entrada) > 0) {
  // procesar número positivo
}
// Filtra valores según reglas específicas del ejercicio


// 7. Validar longitud mínima o máxima (en strings o arrays)

if (entrada.length >= 3) {
  // procesar palabra con al menos 3 caracteres
}
// Controla que la entrada tenga una cantidad mínima de caracteres */



 ///////////// Validaciones en do...while ////////////      (comentar el resto para poder probar uno)

// 1. Validar número positivo y no vacío
/* do {
  entrada = prompt("Ingresá un número mayor a 0:");
} while (
  entrada === null ||
  entrada.trim() === "" ||
  isNaN(entrada) ||
  parseFloat(entrada) <= 0
); */




// 2. Validar palabra clave para corta
/* do {
  entrada = prompt("Escribí algo (o 'salir' para terminar):");

} while ( entrada !== null && entrada.toLowerCase() !== "salir");




// 3. Validar longitud mínima y evitar duplicados.
let palabras = [];

do {
  entrada = prompt("Ingresá una palabra (mínimo 3 letras):");

  if (
    entrada !== null &&
    entrada.trim().length >= 3 &&
    !palabras.includes(entrada.toLowerCase())
  ) {
    palabras.push(entrada.toLowerCase());
  }

} while (entrada !== null && entrada.toLowerCase() !== "fin"); */
/* 
• 	Acepta palabras de al menos 3 letras.
• 	Evita duplicados.
• 	Corta si se escribe fin. */



// 4 Número menor 
/* do {
  // 1. Se ejecuta este bloque al menos una vez
  entrada = prompt("Ingresá un número mayor a 0:");

} while (parseFloat(entrada) <= 0 || isNaN(entrada)); */
/*
- Si el usuario pone un número menor o igual a 0, o algo que no sea número, el bucle vuelve a pedir.
- Si pone un número válido, el bucle termina. */



// 5
/* let entrada;

do {
  entrada = prompt("Ingresá un número mayor a 0:");

} while (isNaN(entrada) || parseFloat(entrada) <= 0); */
/* 
- Si el usuario pone "abc" : isNaN(entrada) es true → se repite.
- Si pone -5 : parseFloat(entrada) <= 0 es true → se repite.
- Si pone 10 : ambas condiciones son false → sale del bucle.
 */





///////////  EJEMPLO ////////////////

let entrada;

do {
  // 🟡 Pedimos al usuario un número
  entrada = prompt("Ingresá un número mayor a 0:");

  // 🔍 Validamos si la entrada es válida
  if (
    entrada !== null &&               // No canceló
    entrada.trim() !== "" &&          // No está vacío
    !isNaN(entrada) &&                // Es un número
    parseFloat(entrada) > 0           // Es mayor a 0
  ) {
    // ✅ Entrada válida: mostramos el número
    alert("Número válido ingresado: " + entrada);
  } else {
    // ❌ Entrada inválida: mostramos mensaje de error
    alert("Entrada inválida. Intentá de nuevo.");
  }

} while (
  entrada === null ||                 // Si canceló, termina
  entrada.trim() === "" ||            // Si está vacío, repite
  isNaN(entrada) ||                   // Si no es número, repite
  parseFloat(entrada) <= 0            // Si no es mayor a 0, repite
);