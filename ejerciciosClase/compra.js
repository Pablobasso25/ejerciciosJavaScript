/* let compra 
Ejercicio 1: Cálculo del Total de una Compra

Descripción: Crea un programa que calcule el total de una compra después de aplicar un descuento.

Requisitos:

Pedir al usuario que ingrese el precio de la compra.
Pedir al usuario que ingrese el porcentaje de descuento (si hay)
Calcular el total aplicando el descuento.
Imprimir el total de la compra.
 */

let compra 
let descuento

compra = parseInt(prompt("cuánto es el valor de la compra?"));

descuento = parseInt(prompt("cuánto es el % del descuento?"));


total = compra - compra * (descuento / 100);

if (descuento > 0) {
    alert(`El total con descuento es: $${total}`)
} else {
    alert(`No se aplicaron descuentos, el total es: $${compra}`)
}

