
/*              1
let edad = parseInt(prompt("Ingresa tu edad"));

if (isNaN(edad) || edad < 0) {    // “Si el valor ingresado no es un número válido o es menor que cero, mostrar un mensaje de error.” 
  alert("Edad inválida. Ingresá un número positivo.");        
}else if (edad <= 12) {
  alert("Sos un niño.");  
}else if (edad <= 17){
  alert("Sos un adolecente");
}else if (edad <= 59){
  alert("Sos un adulto");
}else{
  alert("Sos un adulto mayor");
} */

/*                2
let dia = parseInt(prompt("Ingresá el día (1-31)"));
let mes = parseInt(prompt("Ingresá el mes (1-12)"));
let año = parseInt(prompt("Ingresá el año"));

if (dia <= 0 || mes <= 0 || año <= 0){
  alert("Fecha inválida");
}else{
  alert(`✅ La fecha ${dia}/${mes}/${año} es válida.`);
}
 */

/*               3
let usuario = prompt("Infresá tu usuario").toUpperCase;
let rol = prompt("Elije una opción: admin-editor-invitado").toLowerCase();


if (rol === "admin" ){
  alert(`Hola ${usuario}, tenés acceso total al sistema`);

}else if (rol === "editor"){
  alert(`Hola ${usuario}, tenés acceso limitado al contenido`);

}else if (rol === "invitado"){
  alert(`Hola ${usuario}, tenés acceso restringido al contenido, solo lectura`);

}else{
  alert(`Hola ${usuario}, no tenés acceso al contenido`);
} */

               4
/* - Menos de R$1.000 → 0%
- Entre R$1.000 y R$5.000 → 10%
- Más de R$5.000 → 20%
 */

/* let ingreso = parseFloat(prompt("Cuál es tu ingreso mensual en R$")); 

if (isNaN(ingreso) || ingreso < 0) {  //si el usuario ingresa un valor distinto a un número o un valor menor a 0
  alert("Ingreso inválido.");
}

if (ingreso < 1000){
  alert(`•Tu ingreso es de: $R${ingreso} 
         • Impuestos: 0%
         • Total a pagar $${ingreso * 0}`);
}else if (ingreso >= 1000 && ingreso < 5000 ){
  alert(`•Tu ingreso es de: $R${ingreso} 
         • Impuestos: 10%
         • Total a pagar $${ingreso * 0.10}`);
}else if (ingreso >= 5000){
  alert(`•Tu ingreso es de: $R${ingreso}
         • Impuestos: 20%
         • Total a pagar $${ingreso * 0.20}`);
} */


         //APLICANDO DO WHILE //

/* let ingreso;

do{
ingreso = parseFloat(prompt("Cuál es tu ingreso mensual en R$")); 

if (isNaN(ingreso) || ingreso < 0) {  //si el usuario ingresa un valor distinto a un número o un valor menor a 0 //
  alert("Ingreso inválido.");
}
} while (confirm("Ingresar de nuevo"));   // otra opción es: while (isNaN(ingreso) || ingreso < 0); //

if (ingreso < 1000){
  alert(`•Tu ingreso es de: $R${ingreso} 
         • Impuestos: 0%
         • Total a pagar $${ingreso * 0}`);
}else if (ingreso >= 1000 && ingreso < 5000 ){
  alert(`•Tu ingreso es de: $R${ingreso} 
         • Impuestos: 10%
         • Total a pagar $${ingreso * 0.10}`);
}else if (ingreso >= 5000){
  alert(`•Tu ingreso es de: $R${ingreso}
         • Impuestos: 20%
         • Total a pagar $${ingreso * 0.20}`);
} */

/*              5
 
let unidad;
let temperatura;

// Pedir unidad válida
do {
  unidad = prompt("¿La temperatura está en °C o °F? Escribí C o F").toUpperCase();

  if (unidad !== "C" && unidad !== "F") {
    alert("Unidad inválida. Escribí 'C' para Celsius o 'F' para Fahrenheit.");
  }
} while (unidad !== "C" && unidad !== "F");

// Pedir temperatura válida
do {
  temperatura = parseFloat(prompt(`Ingresá la temperatura en °${unidad}`));

  if (isNaN(temperatura)) {
    alert("El valor ingresado no es un número válido.");
  }
} while (isNaN(temperatura));

// Convertir y diagnosticar
let temperaturaConvertida;
let diagnostico = "";

if (unidad === "C") {
  temperaturaConvertida = (temperatura * 9/5) + 32; // Celsius a Fahrenheit
} else {
  temperaturaConvertida = (temperatura - 32) * 5/9; // Fahrenheit a Celsius
}


let tempC = unidad === "C" ? temperatura : temperaturaConvertida;

if (tempC < 35) {
  diagnostico = "Hipotermia";
} else if (tempC <= 37.5) {
  diagnostico = "Temperatura normal";
} else {
  diagnostico = "Fiebre";
}

// resultados
alert(`Temperatura ingresada: ${temperatura.toFixed(1)}°${unidad}
Convertida: ${temperaturaConvertida.toFixed(1)}°${unidad === "C" ? "F" : "C"}
Diagnóstico: ${diagnostico}`); */

/*             6

do {            
let numeroSecreto = Math.round(Math.random() * 10) + 1;
let intento = parseInt(prompt("Adivina el número (entre 1 y 10):"));

if (intento === numeroSecreto) {
  alert("¡Correcto! Adivinaste el número.");
} else if (intento < numeroSecreto) {
  alert("Demasiado bajo. Intenta con un número más alto.");
} else {
  alert("Demasiado alto. Intenta con un número más bajo.");
}} while (confirm("Ingresar de nuevo"));
 */


                  7             //  Documentación: https://developer.mozilla.org/es/docs/Web/JavaScript/Guide/Regular_expressions
                                              //   https://www.freecodecamp.org/espanol/news/expresiones-regulares-regex-en-javascript-manual-para-principiantes/#use-regex-in-js

/* // Pedir la contraseña al usuario
let contraseña = prompt("Ingresá tu contraseña");

// Validar si tiene al menos 8 caracteres
if (contraseña.length < 8) {
  alert("❌ La contraseña debe tener al menos 8 caracteres.");
} 
// Validar si tiene al menos una letra mayúscula
else if (!/[A-Z]/.test(contraseña)) {
  alert("⚠️ La contraseña debe incluir al menos una letra mayúscula.");
} 
// Validar si tiene al menos un número
else if (!/[0-9]/.test(contraseña)) {
  alert("⚠️ La contraseña debe incluir al menos un número.");
} 
// Validar si tiene al menos un símbolo
else if (!/[^A-Za-z0-9]/.test(contraseña)) {
  alert("⚠️ La contraseña debe incluir al menos un símbolo (ej: @, #, $, %, etc).");
} 
// Si todas las condiciones se cumplen
else {
  alert("✅ Contraseña válida y segura.");
} */


// otra forma de validar en una sola linea//
/* // Pedir la contraseña al usuario
let contraseña = prompt("Ingresá tu contraseña");

if (
  contraseña.length >= 8 &&
  /^[A-Za-z]/.test(contraseña) &&
  /^\S+$/.test(contraseña) &&
  /[A-Z]/.test(contraseña) &&
  /[0-9]/.test(contraseña) &&
  /[^A-Za-z0-9]/.test(contraseña)
) alert("✅ Contraseña válida"); else alert("❌ Contraseña inválida"); */

  
              8


