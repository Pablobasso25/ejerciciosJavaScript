
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

             5
 
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
Diagnóstico: ${diagnostico}`);


