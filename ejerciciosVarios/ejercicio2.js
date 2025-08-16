

/* Crear un script que solicite al usuario ingresar 10 números.
Al finalizar, mostrar solo los números pares. */

let numeros = [];
/* Declaro un array vacío llamado numeros, donde voy a guardar los valores numéricos que el usuario ingrese. */

for (let i = 0; i < 10; i++) {
    let entrada = prompt("Ingresá un número (" + (i + 1) + " de 10):");  
/* Uso un bucle for que se repite 10 veces. En cada vuelta, muestro un prompt indicando cuántos números se han ingresado hasta el momento. */  

    if(entrada !== null && entrada !== "" && !isNaN(entrada)){     /* isNaN() significa “is Not a Number” → “¿No es un número? → entonces !isNaN significa que es un numero */
        numeros.push(parseInt(entrada));
    }else{
        alert("Entrada inválida");
    }
}
/* Verifico que el usuario no haya cancelado (!== null), que no haya dejado el campo vacío (!== ""), y que lo ingresado sea un número (!isNaN). Si todo está bien, convierto el valor a entero con parseInt() y lo guardo en el array. Si no, muestro una alerta. */


document.writeln("Números pares ingersados:<br>");       // titulo //

for (let i = 0; i < numeros.length; i++) {
  if (numeros[i] % 2 === 0) {
    document.writeln("• " + numeros[i] + "<br>");
  }
}
/* Recorro el array numeros y uso el operador módulo (%) para verificar si cada número es divisible por 2. Si lo es, lo muestro en pantalla con un punto como viñeta.*/

