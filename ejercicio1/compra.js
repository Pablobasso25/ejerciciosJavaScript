/* let compra 
let descuento

compra = parseInt(prompt("cuánto es el valor de la compra?"));

descuento = parseInt(prompt("cuánto es el valor del descuento?"));

total = compra * (descuento / 100);

alert (`El total es: ${total} el precio era ${compra} y el decuento ${descuento}`) 
 */

let compra 
let descuento

compra = parseInt(prompt("cuánto es el valor de la compra?"));

descuento = parseInt(prompt("cuánto es el % del descuento?"));

total = compra * (descuento / 100);

if (descuento !== 0) {
    alert(`El total con descuento es: $${total}`)
} else {
    alert(`No se aplicaron descuentos, el total es: $${compra}`)
}

