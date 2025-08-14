

/* Crear un script que solicite al usuario ingresar 10 números.
Al finalizar, mostrar solo los números pares */

let numeros = [];

// bloque 2 //
for (let i = 0; i < 10; i++) {
    let entrada = prompt("Ingresá un número (" + (i + 1) + " de 10):");     // contador de la cantidad de numeros que va ingresando el usuario

    if(entrada !== null && entrada !== "" && !isNaN(entrada)){     // isNaN() significa “is Not a Number” → “¿No es un número? → entonces !isNaN significa que es un numero

        numeros.push(parseInt(entrada));
    }else{
        alert("Entrada inválida");
    }
}

/* Este bloque:
• Pide 10 números
• Valida que la entrada sea numérica.
• Convierte a entero y lo guarda en el array */

// Mostrar números pares

document.writeln("Números pares ingersados:<br>");       // titulo //

for (let i = 0; i < numeros.length; i++) {
  if (numeros[i] % 2 === 0) {
    document.writeln("• " + numeros[i] + "<br>");
  }
}

