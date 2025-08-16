/* Ejercicio 3: Cálculo de Propina en un Restaurante

Descripción: Crea un programa que calcule la propina a dejar en un restaurante basado en el total de la cuenta y el porcentaje de propina deseado.

Requisitos:

Pedir al usuario que ingrese el total de la cuenta.
Pedir al usuario que ingrese el porcentaje de propina que desea dejar.
Calcular la cantidad de propina.
Calcular el total a pagar incluyendo la propina.
Imprimir la propina y el total a pagar */

let totCuenta
let propina

totCuenta = parseInt(prompt("Ingresa el total de la cuenta en $"));
propina = parseInt(prompt("Qué % de propina queres dejarle al mozo ?"));

propina = totCuenta * (propina / 100);
totalAPagar = totCuenta + propina;

if (totalAPagar > 0 && propina > 0) {
    alert(`La propina es de $${propina}, y el total a pagar es de $${totalAPagar}`);
}else {
    alert(`El total a pagar es de $${totalAPagar}`);
}

