

/* Crear un script que solicite al usuario ingresar 10 números.
Al finalizar, mostrar solo los números pares */

let numeros = [];

for (let i = 0; i < 10; i++) {
    let entrada = prompt("Ingresá un numero ");
    if(entrada !== null && entrada !== "" && isNaN(entrada)){
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
    const element = array[i];
    
}
