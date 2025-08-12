/* 📝 Ejercicio: 1
Escribir un programa que determine si un número ingresado por el usuario es positivo, negativo o cero.


🎯 Objetivo del problema:
Determinar la naturaleza de un número ingresado por el usuario: si es positivo, negativo o igual a cero. El programa debe analizar el valor y mostrar un mensaje correspondiente.

📥 Entrada:
- Un número ingresado por el usuario mediante prompt.

⚙️ Proceso:
- Convertir el dato ingresado a número con parseFloat o parseInt.
- Evaluar si el número es mayor que cero, menor que cero o igual a cero.
- Usar condicionales (if, else if, else) para decidir qué mensaje mostrar.

📤 Salida:
- Un mensaje que indique si el número es positivo, negativo o cero.

🧠 Herramientas necesarias:
- prompt()
- parseFloat()
- if, else if, else
- alert() */

/*            EJERCICIO 1
let numero = parseFloat(prompt("Ingrese un número"));

if (numero > 0 ){
    alert(`El número ${numero} es positivo`);
}else if (numero == 0) {
    alert(`El número ${numero} es cero`);
}else{
    alert(`El número ${numero} es negativo`);
} */

/*            EJERCICIO 2
let edad = parseInt(prompt("Que edad tenes?"));

if (edad < 16 ){
    alert("No podes votar, porque sos menor de 16 años");
}else{
    alert("Podes votar");
} */

/*            EJERCICIO 3
let numero = parseInt(prompt("Ingresá un número"));

if (numero % 2 == 0){
    alert("El número ingresado es par");
}else{
    alert("El número ingresado es impar");
}
 */

/*            EJERCICIO 4
let contraseñaGuardada = "Pablobasso1234";
let contraseñaIngresada = prompt("Ingresá nuevamente la contraseña");

if (contraseñaGuardada === contraseñaIngresada){
    alert("Las contraseñas ingresadas si coinciden");
}else{
    alert("Las contraseña ingresadas no coinciden");
} */

/*            EJERCICIO 5
let num1 = parseInt(prompt("Ingresa el primer número"));
let num2 = parseInt(prompt("Ingresa el segundo número"));
let num3 = parseInt(prompt("Ingresa el tercer número"));

if (num1 > num2 && num1 > num3){
    alert(`El número ${num1} es mayor que el número ${num2} y el número ${num3}`);
}else if (num2 > num1 && num2 > num3){
    alert(`El número ${num2} es mayor que el número ${num1} y el número ${num3}`);
}else{
    alert(`El número ${num3} es mayor que el número ${num2} y el número ${num1}`);
} */

/*            EJERCICIO 6
let operacion = prompt("Elegir una opción: Sumar - Restar - Multiplicar - Dividir")
let num1 = parseFloat(prompt("Ingresa el primer número"));
let num2 = parseFloat(prompt("Ingresa el segundo número"));
let resultado;

if (operacion === "sumar"){
    resultado = num1 + num2;
    alert(`El resultado es: ${resultado}`);
}else if (operacion === "restar") {
    resultado = num1 - num2;
    alert(`El resultado es: ${resultado}`);
}else if (operacion === "multiplicar") {
    resultado = num1 * num2;
    alert(`El resultado es: ${resultado}`);

} else if (operacion === "dividir") {
  if (num2 !== 0) {
    resultado = num1 / num2;
    alert(`El resultado es: ${resultado}`);
  } else {
    alert(`No se puede dividir en 0`);
  }
} else {
  alert("Operación no válida.");
} */

/*            EJERCICIO 7
let año = parseInt(prompt("Ingresá un año"));

if ((año % 4 === 0 && año % 100 !== 0) || año % 400 === 0) {
  alert(`El año ${año} es bisiesto.`);
} else {
  alert(`El año ${año} no es bisiesto.`);
} */

/*              EJERCICIO 8
let nota = parseFloat(prompt("Ingresá tu calificación (0 a 10)"));

if (nota < 0 || nota > 10 || isNaN(nota)) {
  alert("Calificación inválida. Debe estar entre 0 y 10.");
} else if (nota <= 5) {
  alert("Reprobado");
} else if (nota <= 8) {
  alert("Aprobado");
} else {
  alert("Excelente");
} */

/*              EJERCICIO 9
let compra = parseFloat(prompt("Ingrese el monto de la compra en pesos $:"));
let descuento = compra * (10 / 100);
let total = compra - descuento;

if (compra > 100){
  alert(`Tenes un descuento del 10%, el monto a pagar es: $${total}`);

} else{
  alert(`No se aplicaron descuentos, el monto a pagar es: $${compra}`);
} */

/*             EJERCICIO 10
let usuario = prompt("Ingresá tu nombre de usuario");
let contraseña = prompt("Ingresar contraseña");

let usuarioG = "pablobasso1234";
let contraseñaG = "Pablobassobasso"

if (usuario === usuarioG && contraseña === contraseñaG){
  alert(`Bienvenido ${usuarioG}`);
}else if (usuario !== usuarioG && contraseña === contraseñaG){
  alert(`Nombre de usuario incorrecto`);
}else if (usuario === usuarioG && contraseña !== contraseñaG){
  alert(`Contraseña incorrecta`);
}else{
  alert(`El usuario o la contraseña no son correctos`);
} */


let series = ["narturo", "fragmentosdelEclipce", "alvarito"];
let seri = ["narturo", "fragmentosdelEclipce", "alvarito"];

console.log(seri);



